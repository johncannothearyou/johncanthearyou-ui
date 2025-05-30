import { pages } from "../constants";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navButtonStyle = "hover:bg-orange-400 rounded p-1";

export const Header = () => (
	<header className="flex bg-purple-700 text-gray-200 text-4xl">
		<span className="flex flex-col sm:flex-row">
			{pages.map(page => (
				<a
					href={page.route}
					key={page.name}
					className={`${navButtonStyle} ${window.location.pathname === page.route ? "bg-green-500" : ""}`}
				>
					{page.name}
				</a>
			))}
		</span>
		<span className="grow" />
		<span className="flex flex-col sm:flex-row justify-center">
			<a href="https://github.com/johncannothearyou" target="_blank" rel="noreferrer" className={navButtonStyle}>
				<FaGithub />
			</a>
			<a
				href="https://www.linkedin.com/in/johncannothearyou/"
				target="_blank"
				rel="noreferrer"
				className={navButtonStyle}
			>
				<FaLinkedinIn />
			</a>
		</span>
	</header>
);
