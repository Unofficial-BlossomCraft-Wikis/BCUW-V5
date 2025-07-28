import { ItemsList } from "@/components/items-list";
import { TitleDataUpdater } from "@/components/title-provider";

export default function HomePage() {
  return (
    <>
      <TitleDataUpdater data={{ title: "Items" }} />
      <main className='p-2'>
        <ItemsList />
      </main>
    </>
  );
}
