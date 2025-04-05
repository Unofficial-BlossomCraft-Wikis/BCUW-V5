import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater
        data={{ title: "Frequently Asked Questions", tags: { stub: true } }}
      />
      <main className='p-2 prose'>
        <h2>We are currently working on this page</h2>
      </main>
    </>
  );
}
