"use client";
import { useQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import * as Card from "@/components/ui/card";
import Link from "next/link";
import { ItemCard } from "./item-card";
import { Button } from "./ui/button";
import { ItemCardPlaceholder } from "./item-card-skeleton";
import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry";

const columnsCountBreakPoints = {
  0: 1,
  1600: 2,
  1800: 3,
};

export function FiveItems() {
  const items = useQuery(api.blossom_items.getFiveRandom);
  if (!items) {
    return (
      <Card.Card className='w-full h-fit'>
        <Card.CardHeader className='flex flex-row gap-2'>
          <Card.CardTitle>Check out one of these items!</Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent>
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter='0.5rem'>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <ItemCardPlaceholder key={i} />
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </Card.CardContent>
        <Card.CardFooter>
          <Button variant='outline' className='w-full' asChild>
            <Link href='/items'>View All Items</Link>
          </Button>
        </Card.CardFooter>
      </Card.Card>
    );
  }
  return (
    <Card.Card className='w-full h-fit'>
      <Card.CardHeader className='flex flex-row gap-2'>
        <Card.CardTitle>Check out one of these items!</Card.CardTitle>
      </Card.CardHeader>
      <Card.CardContent>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter='0.5rem'>
            {items.map((item) => (
              <ItemCard item={item} key={item._id} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Card.CardContent>
      <Card.CardFooter>
        <Button variant='outline' className='w-full' asChild>
          <Link href='/items'>View All Items</Link>
        </Button>
      </Card.CardFooter>
    </Card.Card>
  );
}
