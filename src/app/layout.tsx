import Navbar from "@/components/navbar";
import { AppSidebar } from "@/components/sidebar";
import { ThemeProvider } from "@/components/theme-provider";
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
    <html lang='en' suppressHydrationWarning>
      <body className='h-svh w-screen overflow-hidden'>
        {" "}
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <main className='flex flex-col w-full h-full'>
              <Navbar />
              <div className='h-[calc(100vh-3rem)]'>{children}</div>
            </main>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
