"use client";

import * as Card from "@/components/ui/card";
import type { Doc } from "convex@/_generated/dataModel";
import { ItemTagsBadge } from "./item-tag-badge";
import { useQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import Link from "next/link";

export function CrateItemCard({ item }: { item: Doc<"blossomItems"> }) {
  const images = useQuery(api.blossom_items_images.getByItemName, {
    itemName: item.name,
  });
  if (!images) {
    return (
      <Card.Card>
        <Card.CardHeader className='flex flex-row gap-2'>
          <div className='flex flex-col gap-2'>
            <Card.CardTitle>{item.name}</Card.CardTitle>
            <div className='flex flex-row gap-2 overflow-x-scroll'>
              <ItemTagsBadge tags={item.tags} />
            </div>
          </div>
        </Card.CardHeader>
      </Card.Card>
    );
  }
  return (
    <Link href={`/item/${item._id}`}>
      <Card.Card>
        <Card.CardHeader className='flex flex-row gap-2'>
          <img
            src={`/cdn/ut/${images.images.item}`}
            alt={item.name}
            className='h-16 w-16 rounded-lg'
          />
          <div className='flex flex-col gap-2'>
            <Card.CardTitle>{item.name}</Card.CardTitle>
            <div className='flex flex-row gap-2 overflow-x-scroll'>
              <ItemTagsBadge tags={item.tags} />
            </div>
          </div>
        </Card.CardHeader>
        <Card.CardContent>
          <img
            src={`/cdn/ut/${images.images.lore}`}
            alt={item.name}
            className='h-full w-full rounded-lg'
          />
        </Card.CardContent>
      </Card.Card>
    </Link>
  );
}
