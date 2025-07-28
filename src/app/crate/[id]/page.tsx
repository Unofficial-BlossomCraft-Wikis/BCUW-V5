import { CrateInfobox } from "@/components/crate-infobox";
import { CrateItemCard } from "@/components/crate-item-card";
import { CrateItemsTable } from "@/components/crate-items-table";
import { CratePreview } from "@/components/crate-preview";
import { TitleDataUpdater } from "@/components/title-provider";
import type { Id } from "convex@/_generated/dataModel";
import { api } from "convex@/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry";

const columnsCountBreakPoints = {
  400: 1,
  850: 2,
  1200: 3,
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id: Id<"blossomCrates"> = (await params).id as Id<"blossomCrates">;
  const crate = await fetchQuery(api.blossom_crates.getById, {
    id: id,
  });
  const items = await fetchQuery(api.blossom_items.getByCrate, {
    crate: crate?.name ?? "",
  });
  if (!crate) {
    return <TitleDataUpdater data={{ title: `Crate - ${id.toString()}` }} />;
  }
  if (!items) {
    return <TitleDataUpdater data={{ title: `Crate - ${crate.name}` }} />;
  }
  const sortedItems = items.sort((a, b) => b.crateWinChance - a.crateWinChance);
  return (
    <>
      <TitleDataUpdater data={{ title: `Crate - ${crate.name}` }} />
      <main className='p-2'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full'>
          <div className='w-full sm:order-last sticky h-fit top-2'>
            <CrateInfobox crate={crate} items={items} />
          </div>
          <div className='col-span-1 md:col-span-2 lg:col-span-3'>
            <h2 className='prose-h2' id='preview'>
              Preview
            </h2>
            <CratePreview crate={crate} />
            <h2 className='prose-h2' id='items'>
              Items
            </h2>
            <CrateItemsTable items={items} />
            <ResponsiveMasonry
              columnsCountBreakPoints={columnsCountBreakPoints}
            >
              <Masonry gutter='0.5rem'>
                {sortedItems.map((item) => (
                  <CrateItemCard item={item} key={item._id} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </main>
    </>
  );
}
