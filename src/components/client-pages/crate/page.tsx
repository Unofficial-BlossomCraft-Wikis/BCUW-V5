"use client";
import { CrateInfobox } from "@/components/crate-infobox";
import { CrateItemCard } from "@/components/crate-item-card";
import { CrateItemsTable } from "@/components/crate-items-table";
import { CratePreview } from "@/components/crate-preview";
import { TitleDataUpdater } from "@/components/title-provider";
import { useQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import type { Id } from "convex@/_generated/dataModel";

export function Page({ id }: { id: Id<"blossomCrates"> }) {
  const crate = useQuery(api.blossom_crates.getById, {
    id: id,
  });
  const items = useQuery(api.blossom_items.getByCrate, {
    crate: crate?.name ?? "",
  });
  const crateImages = useQuery(api.blossom_crates_images.getByCrateName, {
    crateName: crate?.name ?? "",
  });
  console.log(crateImages);
  if (!crate) {
    return <TitleDataUpdater data={{ title: `Crate - ${id.toString()}` }} />;
  }
  if (!items) {
    return <TitleDataUpdater data={{ title: `Crate - ${crate.name}` }} />;
  }
  const sortedItems = items.sort((a, b) => b.crateWinChance - a.crateWinChance);
  if (!crateImages) {
    return (
      <>
        <TitleDataUpdater data={{ title: `Crate - ${crate.name}` }} />
        <main className='p-2'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full'>
            <CrateInfobox crate={crate} items={items} />
            <div className='col-span-1 md:col-span-2 lg:col-span-3'>
              <h2 className='prose-h2'>Items</h2>
              <CrateItemsTable items={items} />
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
                {sortedItems.map((item) => (
                  <CrateItemCard item={item} key={item._id} />
                ))}
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
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
            <CratePreview crateImages={crateImages} />
            <h2 className='prose-h2' id='items'>
              Items
            </h2>
            <CrateItemsTable items={items} />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
              {sortedItems.map((item) => (
                <CrateItemCard item={item} key={item._id} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
// 195 to 213
