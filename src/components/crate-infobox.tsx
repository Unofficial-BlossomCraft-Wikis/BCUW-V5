import * as Card from "@/components/ui/card";
import type { Doc } from "convex@/_generated/dataModel";
import { CrateTagsBadge } from "./crate-tag-badge";
import { Separator } from "./ui/separator";

export function CrateInfobox({ crate, items }: { crate: Doc<"blossomCrates">, items: Doc<"blossomItems">[] }) {
  return (
    <Card.Card className='w-full h-fit top-2'>
      <Card.CardHeader className='flex flex-row gap-2'>
        <div className='flex flex-col gap-2'>
          <Card.CardTitle>{crate.name}</Card.CardTitle>
          <div className='grid grid-cols-3 gap-2'>
            <CrateTagsBadge tags={crate.tags} />
          </div>
          <Card.CardDescription>{items.length} items</Card.CardDescription>
        </div>
      </Card.CardHeader>
      <Separator />
      <Card.CardContent>
        <p className='prose-h2'>Price:</p>
        <ul className='list-disc list-inside'>
          {crate.price_keyshop == -1 ? (
            <li>/warp KeyShop: Offsale</li>
          ) : (
            <li>/warp KeyShop: {crate.price_keyshop}</li>
          )}
          <li>Shop (USD):
            <ul className='list-disc list-inside ml-2'>
              <li>1 key: {crate.price_shop.one == -1 ? <>Offsale</> : crate.price_shop.one}</li>
              <li>5 keys: {crate.price_shop.five == -1 ? <>Offsale</> : crate.price_shop.five}</li>
              <li>10 keys: {crate.price_shop.ten == -1 ? <>Offsale</> : crate.price_shop.ten}</li>
            </ul>
          </li>
        </ul>
      </Card.CardContent>
    </Card.Card>
  );
}
