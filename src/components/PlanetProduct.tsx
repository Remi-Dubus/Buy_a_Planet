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
		<article className="mx-3 grid grid-cols-3 bg-slate-600 rounded-xl">
			<h2 className="col-span-3 my-5 text-center text-3xl font-header text-yellow-100">
				Liste des planètes à vendre
			</h2>
			{planets.map((p, i) => (
				<section key={p.key} className="mx-3 bg-slate-900 mb-3 rounded-lg">
					<PlanetCard key={p.key} name={p.name} image={p.image} prix={p.prix} />
					<button
						type="button"
						onClick={() => setPlanetIndex(i)}
						key={p.key}
						className="border-yellow-100 border-2 rounded lg text-yellow-100 px-0.5 block mx-auto my-5"
					>
						Plus de détails
					</button>
				</section>
			))}
		</article>
	);
}
