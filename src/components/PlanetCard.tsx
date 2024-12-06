export default function planetCard({
	name,
	image,
	prix,
}: { key: number; name: string; image: string; prix: number }) {
	return (
		<figure className="flex-col p-2">
			<img
				src={image}
				alt={`Planète ${name}`}
				className="w-auto h-auto mx-auto px-2 mt-2 min-h-24 max-h-24 shadow-2xl rounded-lg"
			/>
			<figcaption className="text-center font-head text-yellow-100 text-2xl my-2">
				{name}
			</figcaption>
			<p className="font-main text-yellow-100  text-lg max-h-36 min-h-36 sm:max-h-36 sm:min-h-0">
				Le prix de {name} est de {prix} millions de crédits galactique.
			</p>
		</figure>
	);
}
