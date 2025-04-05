import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "Official Resources" }} />
      <main className='p-2 prose'>
        <ul>
          <li>
            <Link href='https://blossomcraft.org/'>BlossomCraft Website</Link>
          </li>
          <li>
            <Link href='https://docs.google.com/document/d/1PBvYnRUlfhd6AVdqC3_RbdDcfP46xSpxHbI1fEMY_10/edit?usp=sharing'>
              BlossomCraft Pet Showcase
            </Link>{" "}
            Please note that pets are currently disabled on BlossomCraft.
          </li>
          <li>
            <Link href='https://blossomcraft.org/wiki'>BlossomCraft Wiki</Link>
          </li>
          <li>
            <Link href='https://discord.gg/blossomcraft'>
              BlossomCraft Discord
            </Link>
          </li>
          <li>
            <Link href='https://blossomcraft.org/vote'>
              BlossomCraft Voting Links
            </Link>
          </li>
          <li>
            <Link href='https://shop.blossomcraft.org/'>BlossomCraft Shop</Link>
          </li>
        </ul>
        <h3>World Maps</h3>
        <ul>
          <li>
            <Link href='https://cherry.blossomcraft.org/'>Cherry</Link>
          </li>
          <li>
            <Link href='https://spirit.blossomcraft.org/'>Spirit</Link>
          </li>
          <li>
            <Link href='https://lotus.blossomcraft.org/'>Lotus</Link>
          </li>
          <li>
            <Link href='https://tulip.blossomcraft.org/'>Tulip</Link>
          </li>
        </ul>
      </main>
    </>
  );
}
