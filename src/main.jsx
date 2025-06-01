import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header, Main, Footer } from "./components";
import "./main.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className="flex flex-col min-h-screen">
			<Header />
			<Main />
			<Footer />
		</div>
	</StrictMode>
);
