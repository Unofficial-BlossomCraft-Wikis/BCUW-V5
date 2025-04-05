import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "Credits" }} />
      <main className="p-2 prose">
        <p>Use of BlossomCraft and its logos was granted by LegionOfBullets, an Admin of the BlossomCraft Minecraft Server on August 13, 2023.</p>
        <p>Minecraft and its logos/textures are property of Mojang Studios (Micorsoft).</p>
        <p>
        The BCUW logo was created using the <Link href="https://www.blockbench.net/plugins/minecraft_title_generator">Minecraft Title Generator</Link> plugin for <Link href="https://www.blockbench.net/">Blockbench</Link>.
        </p>
        <p>The BCUW V5 site was created by altie122 using <Link href="https://nextjs.org/">Next.js</Link>, <Link href="https://tailwindcss.com/">Tailwind CSS</Link>, <Link href="https://ui.shadcn.com/">Shadcn/ui</Link> and more amazing tools!</p>
        <p>The site background is a screenshot of the spawn area on the Cherry sub-server.</p>
      </main>
    </>
  );
}
