import { useState } from "react";
import type { planetType } from "../lib/definitions";
import PlanetCard from "./PlanetCard";

export default function PlanetProduct({
	planets,
	setPlanetIndex,
	planetIndex,
}: {
	planets: planetType[];
	planetIndex: number;
	setPlanetIndex: (arg0: number) => void;
}) {
	useState(planetIndex);
	return (
		<article>
			{planets.map((p, i) => (
				<section key={p.key}>
					<PlanetCard key={p.key} name={p.name} image={p.image} prix={p.prix} />
					<button type="button" onClick={() => setPlanetIndex(i)} key={p.key}>
						Plus de détails
					</button>
				</section>
			))}
		</article>
	);
}
