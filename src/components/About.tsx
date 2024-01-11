
const About = () => {

	const skillListItemsStyle = {
		border: '2px solid white', 
		padding: '0.5rem 1rem',
		borderRadius: '0.5rem'
	}


  return (
		<section className="about-section grid grid-cols-[60rem,]">
			<div className="about-section ml-[10rem] w-[40rem]">
				<h2 className="font-[900] text-[2rem]">About</h2>
				<p className="mt-[2rem] text-[1.1rem] leading-[2.5rem]">
					I'm a <span>Web Developer</span> in Nairobi enthusiastic about
					building web solutions whether that be building visually appealing
					projects from the frontend using frameworks like React and Tailwind or
					creating applications which function flawlessly from the backend using
					tools like NodeJS and MongoDb. I completed my university bachelors
					degree at United States International University - Africa (USIU-A)
					majoring in Applied Computer Technologies with a concentration in
					Software Engineering.
				</p>
			</div>
			<div className="skills-section col-start-2">
				<h3 className="text-[1.5rem] font-[900]">My Skills</h3>
				<ul className="mt-[2rem] flex gap-x-[1.5rem] w-[30rem] flex-wrap gap-y-6">
					<li style={skillListItemsStyle}>HTML</li>
					<li style={skillListItemsStyle}>CSS</li>
					<li style={skillListItemsStyle}>JavaScript</li>
					<li style={skillListItemsStyle}>React</li>
					<li style={skillListItemsStyle}>Tailwind</li>
					<li style={skillListItemsStyle}>NodeJS</li>
					<li style={skillListItemsStyle}>MongoDb</li>
					<li style={skillListItemsStyle}>Git</li>
				</ul>
			</div>
		</section>
	);
}

export default About