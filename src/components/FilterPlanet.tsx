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

	return (
		<>
			<h2>Filtres</h2>
			<button type="button" onClick={handleClickTellurique}>
				Planete téllurique
			</button>
			<button type="button" onClick={handleClickGaz}>
				Géante gazeuse
			</button>
			<button type="button" onClick={handleClickGlace}>
				Géante de glace
			</button>
		</>
	);
}
