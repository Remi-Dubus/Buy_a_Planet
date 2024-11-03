import "./App.css";

import type { planetType } from "./lib/definitions";
import data from "./assets/data/planetes.json";

import { useState } from "react";
import PlanetProduct from "./components/PlanetProduct";
import FilterPlanet from "./components/filterPlanet";
import PlanetDetails from "./components/PlanetDetails";

function App() {
	const planetsList: planetType[] = data;

	const [planetCard, setPlanetCard] = useState(planetsList);

	const [planetIndex, setPlanetIndex] = useState(planetsList[0].key - 1);

	return (
		<>
			<header>
				<nav>
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
