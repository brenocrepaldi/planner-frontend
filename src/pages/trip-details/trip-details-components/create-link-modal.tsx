import { Link2, Tag, X } from "lucide-react";
import { Button } from "../../../components/button";

interface CreateLinkModalProps {
	handleCreateLinkModal: () => void;
}

export function CreateLinkModal({
	handleCreateLinkModal: handleCreateLinkModal,
}: CreateLinkModalProps) {
	return (
		<div className="fixed inset-0 bg-black/60 flex items-center justify-center">
			<div className="w-[540px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
				<div className="space-y-2">
					<div className="flex items-center justify-between">
						<h2 className="text-lg font-semibold">Cadastrar link</h2>
						<button onClick={handleCreateLinkModal}>
							<X className="size-5 text-zinc-400" />
						</button>
					</div>
					<p className="text-sm text-zinc-400">
						Todos convidados podem visualizar os links importantes.
					</p>
				</div>

				<form className="space-y-3">
					<div className="space-y-2">
						<div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
							<Tag className="text-zinc-400 size-5" />
							<input
								type="title"
								placeholder="Título do link"
								className="bg-transparent placeholder-zinc-400 outline-none flex-1"
							/>
						</div>

						<div className="h-14 px-4 bg-zinc-950 border-zinc-800 rounded-lg flex items-center gap-2">
							<Link2 className="text-zinc-400 size-5" />
							<input
								type="title"
								placeholder="URL"
								className="bg-transparent placeholder-zinc-400 outline-none flex-1"
							/>
						</div>
					</div>
					<Button variant="primary" size="full">
						Salvar link
					</Button>
				</form>
			</div>
		</div>
	);
}
