import Image from "next/image";
import { ModeToggle as ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "./ui/sidebar";

export default function Navbar() {
	return (
		<header className="w-full p-2">
			<div className="flex h-12 flex-row rounded-lg border border-sidebar-border/75 bg-sidebar/75 text-sidebar-foreground shadow">
				<div className="flex basis-1/2 flex-row items-center justify-start gap-4 pl-2 md:basis-1/3">
					<SidebarTrigger />
					<a href="/">
						<img
							src="/bcuwOnlyTitleNormal.png"
							alt="BCUW Logo"
							className="h-10 w-auto"
						/>
					</a>
				</div>
				<div className="flex basis-1/3 flex-row items-center justify-center gap-4 max-md:hidden"></div>
				<div className="flex flex-auto basis-1/2 flex-row items-center justify-end gap-2 pr-2 md:basis-1/3">
					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}
