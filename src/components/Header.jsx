import { pages } from "../constants";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const navButtonStyle = "hover:bg-orange-400 rounded px-1";

export const Header = () => (
	<header className="flex bg-purple-700 text-gray-200 text-5xl p-3">
		<span className="grow">
			{pages.map(page => (
				<a href={page.route} key={page.name} className={navButtonStyle}>
					{page.name}
				</a>
			))}
		</span>
		<span className="flex items-center">
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
