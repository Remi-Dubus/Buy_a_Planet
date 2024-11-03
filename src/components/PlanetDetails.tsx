import type { planetType } from "../lib/definitions";

export default function PlanetDetails({
	planets,
	planetIndex,
}: { planets: planetType[]; planetIndex: number }) {
	return (
		<article>
			<figure>
				<figcaption>{planets[planetIndex].name}</figcaption>
				<img
					src={planets[planetIndex].image}
					alt={`Planète ${planets[planetIndex].name}`}
				/>
				<div>
					<p>
						La planète {planets[planetIndex].name} est une planète de type{" "}
						{planets[planetIndex].type} la température maximal est de{" "}
						{planets[planetIndex].températureMax} degrès Celsius.
					</p>
					<p>
						Le prix non négociable de cette planète est de{" "}
						{planets[planetIndex].prix} millions de
					</p>
					<img
						src="https://vignette.wikia.nocookie.net/star-wars-galactic-defense/images/a/af/Credit.png/revision/latest?cb=20150504022255"
						alt="crédit galactique"
					/>
					<p>crédits galactique</p>
				</div>
			</figure>
		</article>
	);
}
