import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "Disclaimer" }} />
      <main className='p-2 prose'>
        <p>
          The BlossomCraft Unofficial Wiki (BCUW) is provided "as is" without
          warranties of any kind. We are not responsible for:
        </p>
        <ul>
          <li>Downtime or technical issues.</li>
          <li>User-generated content, including posts or profiles.</li>
          <li>Any damages resulting from the use of this website.</li>
        </ul>
      </main>
    </>
  );
}
