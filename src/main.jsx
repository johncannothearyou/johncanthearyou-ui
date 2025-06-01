import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import { Header, Footer } from "./components";
import { Main } from "./components/Main";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className="flex flex-col min-h-screen">
			<Header />
			<Main />
			<Footer />
		</div>
	</StrictMode>
);
