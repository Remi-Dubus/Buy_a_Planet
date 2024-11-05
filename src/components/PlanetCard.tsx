export default function planetCard({
	name,
	image,
	prix,
}: { key: number; name: string; image: string; prix: number }) {
	return (
		<figure className="flex-col">
			<img
				src={image}
				alt={`Planète ${name}`}
				className="w-28 h-auto mx-auto mt-2 rounded-lg"
			/>
			<figcaption className="text-center font-head text-yellow-100 text-2xl">
				{name}
			</figcaption>
			<p className="font-main text-yellow-100 pr-0.5 pl-0.5 text-xs">
				Le prix de {name} est de {prix} millions de crédits galactique.
			</p>
		</figure>
	);
}
