import { BrowserRouter, Routes, Route } from "react-router-dom";
import { pages } from "../constants";

export const Main = () => (
	<main className="grow overflow-x-clip bg-gray-600 text-gray-200 p-16 text-center text-xl">
		<BrowserRouter>
			<Routes>
				{pages.map(page => (
					<Route path={page.route} element={page.component} />
				))}
			</Routes>
		</BrowserRouter>
	</main>
);
