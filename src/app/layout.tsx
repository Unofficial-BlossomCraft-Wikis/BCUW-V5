import Navbar from "@/components/navbar";
import { ContentHeader } from "@/components/page-header";
import { AppSidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { TitleProvider } from "@/components/title-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "BCUW | The BlossomCraft Unofficial Wiki",
	description:
		"The BlossomCraft Unofficial Wiki | The community-run BlossomCraft Wiki, documenting since August 13, 2023.",
	icons: [{ rel: "icon", url: "/bcuwOnlyTitleSquare.png" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className="h-svh w-screen overflow-hidden">
				{" "}
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<SidebarProvider>
						<TitleProvider>
							<AppSidebar />
							<main className="flex h-full w-full flex-col">
								<Navbar />
								<div className="h-[calc(100vh-4rem)] p-2 pt-0">
									<div className="h-full w-full overflow-y-scroll rounded-xl border border-sidebar-border/75 bg-sidebar/75 text-sidebar-foreground shadow">
										<ContentHeader />
										{children}
									</div>
								</div>
							</main>
						</TitleProvider>
					</SidebarProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
