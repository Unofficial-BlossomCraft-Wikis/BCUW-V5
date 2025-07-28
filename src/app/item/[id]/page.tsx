import { TitleDataUpdater } from "@/components/title-provider";
import { api } from "convex@/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { type Id } from "convex@/_generated/dataModel";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default async function HomePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const item = await fetchQuery(api.blossom_items.getById, {id: id as Id<"blossomItems">})
  if (!item) {
    return(<><TitleDataUpdater data={{ title: `Item - ${id}`}} /></>)
  }
  return (
    <>
      <TitleDataUpdater data={{ title: `Item - ${item.name}`, icon:`/cdn/ut/${item.images.item}`, tags:{item:true,itemTags:{key:true}}}} />
      <main className='p-2'>
        {
          item.baseitem && <Alert>
            <AlertTitle>Sub-item</AlertTitle>
            <AlertDescription>This item is not the base item. This item is from the {item.crate}, to see the base item, click <Link href={`/item/${item.baseitem}`}>here</Link>.</AlertDescription>
          </Alert>
        }
      </main>
    </>
  );
}
