"use client";
import { useQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import * as Card from "@/components/ui/card";
import Link from "next/link";
import { ItemCard } from "./item-card";
import { Button } from "./ui/button";
import { ItemCardPlaceholder } from "./item-card-skeleton";

export function FiveItems() {
  const items = useQuery(api.blossom_items.getFiveRandom);
  if (!items) {
    return (
      <Card.Card className='w-full h-fit'>
        <Card.CardHeader className='flex flex-row gap-2'>
          <Card.CardTitle>Check out one of these items!</Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
            {
              Array(5).fill(0).map((_, i) => (
                <ItemCardPlaceholder key={i} />
              ))
            }
          </div>
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
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
          {items.map((item) => (
            <ItemCard item={item} key={item._id} />
          ))}
        </div>
      </Card.CardContent>
      <Card.CardFooter>
        <Button variant='outline' className='w-full' asChild>
          <Link href='/items'>View All Items</Link>
        </Button>
      </Card.CardFooter>
    </Card.Card>
  );
}
