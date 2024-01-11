
const Header = () => {
	return (
		<header className="grid grid-rows-[7rem,35rem] grid-cols-[60rem,]">
			<nav className="h-[7rem] flex items-center row-start-1 col-start-2">
				<ul className="flex gap-x-[5rem] text-[1.35rem]  font-[600]">
					<li>About</li>
					<li>Project</li>
					<li>Writing</li>
				</ul>
			</nav>

			<div className="row-start-2 col-start-1 flex ml-[10rem] items-center">
				<div>
					<h1 className="text-[4rem]">Frontend</h1>
					<h1 className="text-[4rem]">Developer</h1>
				</div>
			</div>
			<div className="row-start-2 col-start-2 flex items-center">
				<div className="">
					<h2 className="text-[1.75rem] font-[900]">Hey, I'm Daniel Theuri</h2>
                    <p></p>
				</div>
			</div>
		</header>
	);
};

export default Header;
