import Header from "../components/Header/Header.jsx";
import AboutMe from "../components/AboutMe/AboutMe.jsx";
import Interest from "../components/Interest/Interest.jsx";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import "../styles/globals.css";

export default function Home() {
	return (
		<>
			<link rel="icon" href="/favicon.png" />
			<Header />
			<main className="mainContent">
				<AboutMe />
				<Interest />
				<ContactForm />
			</main>
			<footer>Realizado por @juanfiakosky</footer>
		</>
	);
}
