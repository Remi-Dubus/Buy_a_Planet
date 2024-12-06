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
		<article className=" bg-slate-600 rounded-xl grid grid-cols-1 shadow-xl h-fit sm:grid-cols-3 sm:w-11/12">
			<h2 className="col-span-1 my-5 text-center text-3xl font-header text-yellow-100 sm:col-span-3">
				Liste des planètes à vendre
			</h2>
			{planets.map((p, i) => (
				<section
					key={p.key}
					className="flex flex-col items-center mx-10 bg-slate-900 mb-3 rounded-lg shadow-xl sm:m-2"
				>
					<PlanetCard key={p.key} name={p.name} image={p.image} prix={p.prix} />
					<button
						type="button"
						onClick={() => setPlanetIndex(i)}
						key={p.key}
						className="border-yellow-100 border-2 rounded-lg text-yellow-100 p-0.5 block mx-1 mt-8 mb-4 font-main text-lg hover:scale-105 hover:bg-slate-800 "
					>
						Plus de détails
					</button>
				</section>
			))}
		</article>
	);
}
