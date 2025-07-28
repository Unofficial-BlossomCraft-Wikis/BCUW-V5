"use client";
import { useQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import * as Card from "@/components/ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { CrateCard } from "./crate-card";
import { CrateCardPlaceholder } from "./crate-card-skeleton";
import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry";

const columnsCountBreakPoints = {
  0: 1,
  1200: 2,
  1400: 3,
};

export function FiveCrates() {
  const crates = useQuery(api.blossom_crates.getFiveRandom);
  if (!crates) {
    return (
      <Card.Card className='w-full h-fit'>
        <Card.CardHeader className='flex flex-row gap-2'>
          <Card.CardTitle>Check out one of these crates!</Card.CardTitle>
        </Card.CardHeader>
        <Card.CardContent>
          <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
            <Masonry gutter='0.5rem'>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <CrateCardPlaceholder key={i} />
                ))}
            </Masonry>
          </ResponsiveMasonry>
        </Card.CardContent>
        <Card.CardFooter>
          <Button variant='outline' className='w-full' asChild>
            <Link href='/crates'>View All Crates</Link>
          </Button>
        </Card.CardFooter>
      </Card.Card>
    );
  }
  return (
    <Card.Card className='w-full h-fit'>
      <Card.CardHeader className='flex flex-row gap-2'>
        <Card.CardTitle>Check out one of these crates!</Card.CardTitle>
      </Card.CardHeader>
      <Card.CardContent>
        <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
          <Masonry gutter='0.5rem'>
            {crates.map((crate) => (
              <CrateCard crate={crate} key={crate._id} />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Card.CardContent>
      <Card.CardFooter>
        <Button variant='outline' className='w-full' asChild>
          <Link href='/crates'>View All Crates</Link>
        </Button>
      </Card.CardFooter>
    </Card.Card>
  );
}
