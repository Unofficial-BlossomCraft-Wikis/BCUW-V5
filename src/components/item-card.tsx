"use client";
import { useQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import * as Card from "@/components/ui/card";
import Link from "next/link";
import { ItemTagsBadge } from "./item-tag-badge";

export function ItemCard({ item }: { item: any }) {
  const images = useQuery(api.blossom_items_images.getByItemName, {
    itemName: item.name,
  });
  return (
    <Link href={`/item/${item._id}`}>
      <Card.Card>
        <Card.CardHeader className='flex flex-row gap-2'>
          <img
            src={`/cdn/ut/${images?.images?.item}`}
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
      </Card.Card>
    </Link>
  );
}
