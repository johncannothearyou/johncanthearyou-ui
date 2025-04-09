export default function Header() {
	const pages = ["Home"];

	const orangeHover = "hover:bg-orange-400";

	return (
		<header className="bg-purple-800 flex width-full h-1/6 p-4 ">
			{pages.map(page => {
				const pageLink = page === "Home" ? "/" : `/${page.toLowerCase()}`;
				const highlight = window.location.pathname !== pageLink ? "" : "active";
				return (
					<a className={`${highlight} ${orangeHover}`} href={pageLink} key={page}>
						{page}
					</a>
				);
			})}
			<div className="ml-auto">
				<a
					className={`fa-brands fa-github ${orangeHover}`}
					href="https://github.com/johncannothearyou"
					target="_blank"
					rel="noreferrer"
				/>
				<a
					className={`fa-brands fa-linkedin ${orangeHover}`}
					href="https://linkedin.com"
					target="_blank"
					rel="noreferrer"
				/>
			</div>
		</header>
	);
}
