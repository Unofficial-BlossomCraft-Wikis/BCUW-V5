import { TitleDataUpdater } from "@/components/title-provider";
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <>
      <TitleDataUpdater data={{ title: `Item - ${id}` }} />
      <main className='p-2'>
        {id}
      </main>
    </>
  );
}
