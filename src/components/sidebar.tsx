"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  PanelLeft,
  Newspaper,
  BookCheck,
  NotebookPen,
  LibraryBig,
  Code,
  Package,
  Swords,
  Server,
  Image,
  ScrollText,
  BookUser,
  BookOpen,
  Eye,
} from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import React from "react";
import Link from "next/link";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const [sidebar_collapsible_1_open, sidebar_collapsible_1_setOpen] = useSidebarState(1);
  const [sidebar_collapsible_2_open, sidebar_collapsible_2_setOpen] = useSidebarState(2);
  const [sidebar_collapsible_3_open, sidebar_collapsible_3_setOpen] = useSidebarState(3);
  const [sidebar_collapsible_4_open, sidebar_collapsible_4_setOpen] = useSidebarState(4);
  const [sidebar_collapsible_5_open, sidebar_collapsible_5_setOpen] = useSidebarState(5);
  return (
    <Sidebar collapsible='icon' variant='floating'>
      <SidebarHeader />
      <SidebarContent>
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_1_open}
          onOpenChange={sidebar_collapsible_1_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                BCUW
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='https://v4.bcuw.xyz/blog'>
                        <Newspaper />
                        <span>Blog</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/tutorials'>
                        <BookOpen />
                        <span>Tutorials</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/credits'>
                        <ScrollText />
                        <span>Credits</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarSeparator />
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_2_open}
          onOpenChange={sidebar_collapsible_2_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Resources
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/OfficialResources'>
                        <BookCheck />
                        <span>Official Resources</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/UserMadeResources'>
                        <NotebookPen />
                        <span>User-made Resources</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/DiscordResources'>
                        <LibraryBig />
                        <span>Discord Resources</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarSeparator />
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_3_open}
          onOpenChange={sidebar_collapsible_3_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Docs
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/ranks'>
                        <BookUser />
                        <span>Ranks</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/crates'>
                        <Package />
                        <span>Crates</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/items'>
                        <Swords />
                        <span>Items</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <SidebarSeparator />
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_4_open}
          onOpenChange={sidebar_collapsible_4_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Contribute
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/contributing'>
                        <Code />
                        <span>Contributing</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/cdn'>
                        <Server />
                        <span>CDN</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/logos'>
                        <Image />
                        <span>Logos</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
        <Collapsible
          className='group/collapsible'
          open={sidebar_collapsible_5_open}
          onOpenChange={sidebar_collapsible_5_setOpen}
        >
          <SidebarGroup>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger>
                Other
                <ChevronDown className='ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180' />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <Link href='/privacy'>
                        <Eye />
                        <span>Privacy</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </SidebarGroup>
        </Collapsible>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={toggleSidebar}>
              <PanelLeft />
              <span className='ml-auto'>Toggle Sidebar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

function useSidebarState(collapsibleNumber: number) {
  const [isOpen, setIsOpen] = React.useState(true);
  
  React.useEffect(() => {
    try {
      const savedOpenState = localStorage.getItem(
        `main-sidebar-collapsible-${collapsibleNumber}Open`
      );
      if (savedOpenState !== null) {
        setIsOpen(JSON.parse(savedOpenState));
      }
    } catch (error) {
      console.error("Error reading from localStorage:", error);
    }
  }, [collapsibleNumber]);
  
  React.useEffect(() => {
    try {
      localStorage.setItem(
        `main-sidebar-collapsible-${collapsibleNumber}Open`,
        JSON.stringify(isOpen)
      );
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [isOpen, collapsibleNumber]);
  
  return [isOpen, setIsOpen] as const;
}