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
				className="w-full h-auto max-h-[50%] mx-auto rounded-lg "
			/>
			<figcaption className="text-center font-head text-yellow-100 text-2xl my-2">
				{name}
			</figcaption>
			<p className="font-main text-yellow-100  text-lg max-h-20 min-h-20 sm:max-h-36 sm:min-h-0">
				Le prix de {name} est de {prix} millions de crédits galactique.
			</p>
		</figure>
	);
}
