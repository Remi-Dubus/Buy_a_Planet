export default function Footer() {
	return (
		<>
			<div className="bg-slate-900  text-yellow-100 p-8 flex flex-col items-center border-t-2 border-yellow-100">
				<span>&copy; Rémi Dubus. </span>
				<span className="flex flex-wrap justify-center">Image conçu par</span>
				<a className="text-orange-400" href="https://pixabay.com/fr/">
					Pixabay
				</a>
			</div>
		</>
	);
}
