import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater
        data={{ title: "Discord Resources", tags: { stub: true } }}
      />
      <main className='p-2 prose'></main>
    </>
  );
}
