export default function Footer() {
	return (
		<>
			<div className="bg-slate-900  text-yellow-100 p-8 flex flex-col items-center">
				<span>&copy; Rémi Dubus. </span>
				<span className="flex flex-wrap justify-center">
					Image conçu par{" "}
					<a className="text-orange-400" href="https://pixabay.com/fr/">
						Pixabay
					</a>
				</span>
			</div>
		</>
	);
}
