import type { planetType } from "../lib/definitions";

export default function FilterPlanet({
	planetsList,
	setPlanetCard,
}: {
	planetsList: planetType[];
	setPlanetCard: (planets: planetType[]) => void;
}) {
	const handleClickTellurique = () => {
		setPlanetCard(planetsList.filter((p) => p.type === "téllurique"));
	};
	const handleClickGaz = () => {
		setPlanetCard(planetsList.filter((p) => p.type === "géante gazeuze"));
	};
	const handleClickGlace = () => {
		setPlanetCard(planetsList.filter((p) => p.type === "géante de glace"));
	};
	const handleClickNoFilter = () => {
		setPlanetCard(planetsList.map((p) => p));
	};

	return (
		<>
			<button
				type="button"
				onClick={handleClickTellurique}
				className="border-2 border-yellow-100 rounded-lg p-1 hover:bg-slate-800"
			>
				Planete téllurique
			</button>
			<button
				type="button"
				onClick={handleClickGaz}
				className="border-2 border-yellow-100 rounded-lg p-1  hover:bg-slate-800"
			>
				Géante gazeuse
			</button>
			<button
				type="button"
				onClick={handleClickGlace}
				className="border-2 border-yellow-100 rounded-lg p-1  hover:bg-slate-800"
			>
				Géante de glace
			</button>
			<button
				type="button"
				onClick={handleClickNoFilter}
				className="border-2 border-yellow-100 rounded-lg p-1  hover:bg-slate-800"
			>
				Pas de filtres
			</button>
		</>
	);
}
