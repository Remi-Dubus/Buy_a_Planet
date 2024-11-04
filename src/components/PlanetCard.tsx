export default function planetCard({
	name,
	image,
	prix,
}: { key: number; name: string; image: string; prix: number }) {
	return (
		<figure>
			<img src={image} alt={`Planète ${name}`} />
			<figcaption>Planète {name}</figcaption>
			<p>
				Le prix de {name} est de {prix} millions de crédits galactique
			</p>
		</figure>
	);
}
