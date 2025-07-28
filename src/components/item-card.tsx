"use client";
import { useQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import * as Card from "@/components/ui/card";
import Link from "next/link";
import { ItemTagsBadge } from "./item-tag-badge";
import type { Doc } from "convex@/_generated/dataModel";
import { ItemCardPlaceholder } from "./item-card-skeleton";

export function ItemCard({ item }: { item: Doc<"blossomItems"> }) {
  if (!item) {
    return <ItemCardPlaceholder/>
  }
  return (
    <Link href={`/item/${item._id}`}>
      <Card.Card>
        <Card.CardHeader className='flex flex-row gap-2'>
          <img
            src={`/cdn/ut/${item.images.item}`}
            alt={item.name}
            className='h-16 w-16 rounded-lg'
          />
          <div className='flex flex-col gap-2'>
            <Card.CardTitle>{item.name}</Card.CardTitle>
            <div className='flex flex-row gap-2'>
              <ItemTagsBadge tags={item.tags} />
            </div>
          </div>
        </Card.CardHeader>
      </Card.Card>
    </Link>
  );
}
