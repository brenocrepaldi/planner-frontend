import { MapPin, Calendar, ArrowRight } from "lucide-react";

export function App() {
	return (
		<div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
			<div className="max-w-3xl w-full px-6 text-center space-y-10 -mt-20">
				<div className="flex flex-col items-center">
					<img className="size-52 -mb-16" src="/logo.svg" alt="Logo planner" />
					<p className="text-zinc-300 text-lg">
						Convide seus amigos e planeje sua próxima viagem!
					</p>
				</div>

				<div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
					<div className="flex items-center gap-2 flex-1">
						<MapPin className="size-5 text-zinc-400" />
						<input
							className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
							type="text"
							placeholder="Para onde você vai?"
						/>
					</div>

					<div className="flex items-center gap-2">
						<Calendar className="size-5 text-zinc-400" />
						<input
							className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
							type="text"
							placeholder="Quando?"
						/>
					</div>

					<div className="w-px h-6 bg-zinc-800"></div>

					<button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
						Continuar
						<ArrowRight className="size-5" />
					</button>
				</div>
				<p className="text-sm text-zinc-500">
					Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
					<br /> com nossos{" "}
					<a href="#" className="text-zinc-300 underline">
						termos de uso
					</a>{" "}
					e
					<a href="#" className="text-zinc-300 underline">
						{" "}
						políticas de privacidade
					</a>
					.
				</p>
			</div>
		</div>
	);
}