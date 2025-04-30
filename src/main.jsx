import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import { Blog, Contact, Home, Projects, Skills } from "./pages/index.js";
import "./main.css";

createRoot(document.getElementById("root")).render(
	<StrictMode className="app-container">
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
