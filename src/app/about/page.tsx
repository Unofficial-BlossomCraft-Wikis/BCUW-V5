import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "About" }} />
      <main className='p-2 prose'>
        <p>
          The BlossomCraft Unofficial Wiki (BCUW) is a community-driven project
          created by <span className='mention'>@🌸 Altie122</span>
          dedicated to providing accurate and helpful information about
          BlossomCraft. Created by fans for fans, BCUW is an independent
          platform and is not officially affiliated with BlossomCraft or its
          staff.
        </p>
        <p>
          Our goal is to create a comprehensive resource for BlossomCraft
          players, covering everything from gameplay tips to community events.
          BCUW is maintained by a passionate team of volunteers and
          contributors, and we’re always looking for new members to join us!
        </p>
        <p>If you would like to learn more about BCUW, please feel free to:</p>
        <ul>
          <li>
            <Link href='mailto:contact@email.bcuw.xyz'>Email us</Link>
          </li>
          <li>
            DM <span className='mention'>@🌸 Altie122</span> on Discord
          </li>
        </ul>
      </main>
    </>
  );
}
