"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { TitleProvider } from "@/components/title-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import type { ComponentProps, ReactNode } from "react";

interface GlobalProviderProps {
  ThemeProviderProps?: ComponentProps<typeof ThemeProvider>
  children?: ReactNode
}

export function GlobalProvider({ ThemeProviderProps={attribute:"class",defaultTheme:"system",enableSystem:true,disableTransitionOnChange:true}, children }: GlobalProviderProps) {
  return (
    <ThemeProvider
      {...ThemeProviderProps}
    >
      <ConvexClientProvider>
        <SidebarProvider>
          <TitleProvider>{children}</TitleProvider>
        </SidebarProvider>
      </ConvexClientProvider>
    </ThemeProvider>
  );
}
