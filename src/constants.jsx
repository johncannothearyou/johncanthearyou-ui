import { Home, Music, Programming } from "./pages/index.js";

export const pages = [
	{
		name: "Home",
		route: "/",
		component: <Home />,
	},
	{
		name: "Programming",
		route: "/programming",
		component: <Programming />,
	},
	{
		name: "Music",
		route: "/music",
		component: <Music />,
	},
];
