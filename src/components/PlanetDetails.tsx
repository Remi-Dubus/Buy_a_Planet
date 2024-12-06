import type { planetType } from "../lib/definitions";

export default function PlanetDetails({
	planets,
	planetIndex,
}: { planets: planetType[]; planetIndex: number }) {
	return (
		<article className=" bg-slate-600 rounded-xl h-fit shadow-xl sm:w-11/12">
			<h1 className="my-5 font-header text-3xl text-yellow-100 text-center">
				Détails:
			</h1>
			<figure className="flex flex-col items-center">
				<figcaption className="my-3 font-main text-2xl text-yellow-100">
					{planets[planetIndex].name}
				</figcaption>
				<img
					src={planets[planetIndex].image}
					alt={`Planète ${planets[planetIndex].name}`}
					className="w-auto h-auto px-2 rounded-lg shadow-xl"
				/>
				<div className="bg-slate-900 rounded-lg p-4 m-2 text-yellow-100 font-main text-lg shadow-xl">
					<p>
						La planète {planets[planetIndex].name} est une planète de type{" "}
						{planets[planetIndex].type}, la température maximal est de{" "}
						{planets[planetIndex].températureMax} degrès Celsius.
					</p>
					<span>
						Le prix non négociable de cette planète est de{" "}
						{planets[planetIndex].prix} millions de
					</span>
					<img
						className="h-6 inline"
						src="https://vignette.wikia.nocookie.net/star-wars-galactic-defense/images/a/af/Credit.png/revision/latest?cb=20150504022255"
						alt="crédit galactique"
					/>
					<span>crédits galactique.</span>
				</div>
			</figure>
		</article>
	);
}
