import "./App.css";

import type { planetType } from "./lib/definitions";
import data from "./assets/data/planetes.json";

import { useState } from "react";
import logo from "./assets/data/images/logo.png";
import PlanetProduct from "./components/PlanetProduct";
import FilterPlanet from "./components/FilterPlanet";
import PlanetDetails from "./components/PlanetDetails";
import Footer from "./components/Footer";

function App() {
	const planetsList: planetType[] = data;

	const [planetCard, setPlanetCard] = useState(planetsList);

	const [planetIndex, setPlanetIndex] = useState(planetsList[0].key - 1);

	return (
		<>
			<header className="bg-slate-900  text-yellow-100 sticky top-0 z-10">
				<img src={logo} alt="logo" className="w-20 inline sm:w-40" />
				<h1 className="font-header text-center text-4xl py-5 border-5 border-black inline sm:text-5xl">
					Buy A Planet
				</h1>
				<nav className="font-main flex justify-between px-4 py-1 gap-2 border-b-2 border-yellow-100">
					<FilterPlanet
						planetsList={planetsList}
						setPlanetCard={setPlanetCard}
					/>
				</nav>
			</header>
			<main className="bg-slate-400 py-5 flex flex-col-reverse gap-2 px-2 sm:flex-row ">
				<PlanetProduct
					planets={planetCard}
					setPlanetIndex={setPlanetIndex}
					planetIndex={planetIndex}
				/>
				<PlanetDetails planets={planetCard} planetIndex={planetIndex} />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
