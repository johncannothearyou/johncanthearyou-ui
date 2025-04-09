import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./main.css";
import { pages } from "./constants";
import { Header, Footer } from "./components";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="grow bg-gray-600 text-gray-200 py-2 text-center">
				<BrowserRouter>
					<Routes>
						{pages.map(page => (
							<Route path={page.route} element={page.component} />
						))}
					</Routes>
				</BrowserRouter>
			</main>
			<Footer />
		</div>
	</StrictMode>
);
