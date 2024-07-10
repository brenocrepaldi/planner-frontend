import {
	Calendar,
	CircleCheck,
	CircleDashed,
	Link2,
	MapPin,
	Plus,
	Settings2,
	Tag,
	UserCog,
	X,
} from "lucide-react";
import { useState } from "react";

export function TripDetailsPage() {
	const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
		useState(false);

	const handleCreateArtivityModal = () => {
		isCreateActivityModalOpen
			? setIsCreateActivityModalOpen(false)
			: setIsCreateActivityModalOpen(true);
	};

	return (
		<div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
			<div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
				<div className="flex items-center gap-2">
					<MapPin className="size-5 text-zinc-400" />
					<span className="text-lg text-zinc-100">Florianópolis, Brasil</span>
				</div>

				<div className="flex items-center gap-5">
					<div className="flex items-center gap-2">
						<Calendar className="size-5 text-zinc-400" />
						<span className="text-zinc-100">17 a 23 de Agosto</span>
					</div>

					<div className="w-px h-6 bg-zinc-800"></div>

					<button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
						Alterar local/data
						<Settings2 className="size-5" />
					</button>
				</div>
			</div>

			<main className="flex gap-16 px-4">
				<div className="flex-1 space-y-6">
					<div className="flex items-center justify-between">
						<h2 className="text-3xl font-semibold">Atividades</h2>
						<button
							onClick={handleCreateArtivityModal}
							className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
						>
							<Plus className="size-5" />
							Cadastrar atividade
						</button>
					</div>

					<div className="space-y-8">
						<div className="space-y-2.5">
							<div className="flex gap-2 items-baseline">
								<span className="text-xl text-zinc-300 font-semibold">
									Dia 17
								</span>
								<span className="text-xs text-zinc-500">Sábado</span>
							</div>
							<p className="text-sm text-zinc-500">
								Nenhuma atividade cadastrada nessa data.
							</p>
						</div>

						<div className="space-y-2.5">
							<div className="flex gap-2 items-baseline">
								<span className="text-xl text-zinc-300 font-semibold">
									Dia 18
								</span>
								<span className="text-xs text-zinc-500">Domingo</span>
							</div>

							<div className="space-y-2.5">
								<div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
									<CircleCheck className="size-5 text-lime-300" />
									<span className="text-zinc-100">Academia em grupo</span>
									<span className="text-zinc-400 text-sm ml-auto">08:00h</span>
								</div>
							</div>

							<div className="space-y-2.5">
								<div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
									<CircleCheck className="size-5 text-lime-300" />
									<span className="text-zinc-100">Academia em grupo</span>
									<span className="text-zinc-400 text-sm ml-auto">08:00h</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="w-80 space-y-6">
					<div className="space-y-6">
						<h2 className="font-semibold text-xl">Links importantes</h2>
						<div className="space-y-5">
							<div className="flex items-center justify-between gap-4">
								<div className="space-y-1.5">
									<span className="block font-medium text-zinc-100">
										Reserva do AirBnB
									</span>
									<a
										href="https://www.airbnb.com.br"
										target="_blank"
										className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
									>
										https://www.airbnb.com.br/rooms/10470001154315425642
									</a>
								</div>
								<Link2 className="text-zinc-400 size-5 shrink-0" />
							</div>

							<div className="flex items-center justify-between gap-4">
								<div className="space-y-1.5">
									<span className="block font-medium text-zinc-100">
										Reserva do AirBnB
									</span>
									<a
										href="https://www.airbnb.com.br"
										target="_blank"
										className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
									>
										https://www.airbnb.com.br/rooms/10470001154315425642
									</a>
								</div>
								<Link2 className="text-zinc-400 size-5 shrink-0" />
							</div>
						</div>

						<button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 w-full hover:bg-zinc-700">
							<Plus className="size-5" />
							Cadastrar novo link
						</button>
					</div>

					<div className="w-full h-px bg-zinc-800" />

					<div className="space-y-6">
						<h2 className="font-semibold text-xl">Convidados</h2>
						<div className="space-y-5">
							<div className="flex items-center justify-between gap-4">
								<div className="space-y-1.5">
									<span className="block font-medium text-zinc-100">
										Breno Crepaldi
									</span>
									<span className="block text-sm text-zinc-400 truncate">
										brenogaia2004@gmail.com
									</span>
								</div>
								<CircleCheck className="text-lime-300 size-5 shrink-0" />
							</div>

							<div className="flex items-center justify-between gap-4">
								<div className="space-y-1.5">
									<span className="block font-medium text-zinc-100">
										Mercedes Kulas
									</span>
									<span className="block text-sm text-zinc-400 truncate">
										myrl_rutherford@gmail.com
									</span>
								</div>
								<CircleDashed className="text-zinc-400 size-5 shrink-0" />
							</div>
						</div>

						<button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 w-full hover:bg-zinc-700">
							<UserCog className="size-5" />
							Gerenciar convidados
						</button>
					</div>
				</div>
			</main>

			{isCreateActivityModalOpen && (
				<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
					<div className="w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
						<div className="space-y-2">
							<div className="flex items-center justify-between">
								<h2 className="text-lg font-semibold">Cadastrar atividade</h2>
								<button onClick={handleCreateArtivityModal}>
									<X className="size-5 text-zinc-400" />
								</button>
							</div>
							<p className="text-sm text-zinc-400">
								Todos convidados podem visualizar as atividades.
							</p>
						</div>

						<form className="space-y-3">
							<div className="space-y-2">
								<div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
									<Tag className="text-zinc-400 size-5" />
									<input
										type="title"
										placeholder="Qual a atividade?"
										className="bg-transparent placeholder-zinc-400 outline-none flex-1"
									/>
								</div>
								<div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
									<Calendar className="text-zinc-400 size-5" />
									<input
										type="datetime-local"
										name="occurs_at"
										placeholder="Data e horário da atividade"
										className="bg-transparent placeholder-zinc-100 outline-none flex-1"
									/>
								</div>
							</div>
							<button
								type="submit"
								className="w-full bg-lime-300 text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center justify-center gap-2 hover:bg-lime-400"
							>
								Salvar atividade
							</button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}