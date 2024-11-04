import "./App.css";

import type { planetType } from "./lib/definitions";
import data from "./assets/data/planetes.json";

import { useState } from "react";
import PlanetProduct from "./components/PlanetProduct";
import FilterPlanet from "./components/FilterPlanet";
import PlanetDetails from "./components/PlanetDetails";

function App() {
	const planetsList: planetType[] = data;

	const [planetCard, setPlanetCard] = useState(planetsList);

	const [planetIndex, setPlanetIndex] = useState(planetsList[0].key - 1);

	return (
		<>
			<header className="bg-slate-900  text-yellow-100 mb-3">
				<h1 className="font-[header] text-center text-5xl py-5 border-5 border-black ">
					Buy A Planet
				</h1>
				<nav className="font-[header] flex justify-between px-4 py-4">
					<FilterPlanet
						planetsList={planetsList}
						setPlanetCard={setPlanetCard}
					/>
				</nav>
			</header>
			<main>
				<PlanetProduct
					planets={planetCard}
					setPlanetIndex={setPlanetIndex}
					planetIndex={planetIndex}
				/>
				<PlanetDetails planets={planetCard} planetIndex={planetIndex} />
			</main>
		</>
	);
}

export default App;
