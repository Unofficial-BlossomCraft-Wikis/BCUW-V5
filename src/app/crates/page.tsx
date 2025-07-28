import { CratesList } from "@/components/crates-list";
import { TitleDataUpdater } from "@/components/title-provider";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "Crates" }} />
      <main className='p-2'>
        <CratesList />
      </main>
    </>
  );
}
