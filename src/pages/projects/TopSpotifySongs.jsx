import { useEffect, useState } from "react";

// TODO: make these env vars (.env)
const clientId = "7f7e218ee5174a1a8a07f12674395726";
const redirectUri = "http://[::1]:80/projects/top_spotify_songs";

const generateRandomString = length => {
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const values = crypto.getRandomValues(new Uint8Array(length));
	return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const sha256 = async plain => {
	const encoder = new TextEncoder();
	const data = encoder.encode(plain);
	return await window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = input => {
	return btoa(String.fromCharCode(...new Uint8Array(input)))
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
};

const getToken = async () => {
	const body = await fetch("https://accounts.spotify.com/api/token", {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			client_id: clientId,
			grant_type: "authorization_code",
			code: window.sessionStorage.getItem("spotify_auth_token"),
			redirect_uri: redirectUri,
			code_verifier: window.sessionStorage.getItem("code_verifier"),
		}),
	});
	const data = await body.json();
	return data.access_token;
};

const getTopTracks = async accessToken => {
	const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=20&time_range=short_term", {
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	const data = await response.json();
	return data.items;
};

export default function TopSpotifySongs() {
	const [topTracks, setTopTracks] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const setupSpotify = async () => {
			try {
				if (!window.sessionStorage.getItem("code_verifier")) {
					window.sessionStorage.setItem("code_verifier", generateRandomString(64));
				} else if (!window.sessionStorage.getItem("spotify_auth_token")) {
					if (!new URLSearchParams(window.location.search).has("code")) {
						const codeVerifier = window.sessionStorage.getItem("code_verifier");
						const hashed = await sha256(codeVerifier);
						const codeChallenge = base64encode(hashed);

						const params = {
							response_type: "code",
							client_id: clientId,
							scope: "user-top-read",
							code_challenge_method: "S256",
							code_challenge: codeChallenge,
							redirect_uri: redirectUri,
						};

						const authUrl = new URL("https://accounts.spotify.com/authorize");
						authUrl.search = new URLSearchParams(params).toString();
						window.location.href = authUrl.toString();
					} else {
						const code = new URLSearchParams(window.location.search).get("code");
						window.sessionStorage.setItem("spotify_auth_token", code);
						window.history.replaceState({}, document.title, window.location.pathname);
					}
				} else if (!topTracks) {
					const accessToken = await getToken();
					const tracks = await getTopTracks(accessToken);
					setTopTracks(tracks);
				}
			} catch (err) {
				setError(err.message);
				console.error("Error:", err);
			}
		};

		setupSpotify();
	}, [topTracks]);

	if (error) return <div>Error: {error}</div>;
	if (!topTracks) return <div>Loading...</div>;

	return (
		<div>
			<h1>Your Top Spotify Tracks</h1>
			<ol>
				{topTracks.map(track => (
					<li key={track.id}>
						<strong>{track.name}</strong> by {track.artists[0].name}
					</li>
				))}
			</ol>
		</div>
	);
}
