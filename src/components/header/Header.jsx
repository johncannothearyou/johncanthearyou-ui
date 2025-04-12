import "./Header.css";

export default function Header() {
	const pages = ["Home", "Projects", "Skills", "Blog", "Contact"];

	return (
		<div className="header-bar">
			{pages.map(page => {
				const pageLink = page === "Home" ? "/" : `/${page.toLowerCase()}`;
				const highlight = window.location.pathname !== pageLink ? "" : "active";
				return (
					<a className={highlight} href={pageLink} key={page}>
						{page}
					</a>
				);
			})}
			<div className="right-links">
				<a
					className="fa-brands fa-github"
					href="https://github.com/johncannothearyou"
					target="_blank"
					rel="noreferrer"
				/>
				<a className="fa-brands fa-linkedin" href="https://linkedin.com" target="_blank" rel="noreferrer" />
			</div>
		</div>
	);
}
