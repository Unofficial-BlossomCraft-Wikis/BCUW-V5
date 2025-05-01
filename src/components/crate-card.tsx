"use client";
import { useQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import * as Card from "@/components/ui/card";
import Link from "next/link";
import { CrateTagsBadge } from "./crate-tag-badge";
import { Skeleton } from "./ui/skeleton";

export function CrateCard({ crate }: { crate: any }) {
  const items = useQuery(api.blossom_items.getByCrate, {
    crate: crate?.name ?? "",
  });
  if (!items) {
    return (
      <Link href={`/crate/${crate._id}`}>
        <Card.Card>
          <Card.CardHeader className='flex flex-row gap-2'>
            <div className='flex flex-col gap-2'>
              <Card.CardTitle>{crate.name}</Card.CardTitle>
              <div className='grid grid-cols-3 gap-2'>
                <CrateTagsBadge tags={crate.tags} />
              </div>
              <Card.CardDescription>
                <Skeleton className='h-[14px] w-[75px]' />
              </Card.CardDescription>
            </div>
          </Card.CardHeader>
        </Card.Card>
      </Link>
    );
  }
  return (
    <Link href={`/crate/${crate._id}`}>
      <Card.Card>
        <Card.CardHeader className='flex flex-row gap-2'>
          <div className='flex flex-col gap-2'>
            <Card.CardTitle>{crate.name}</Card.CardTitle>
            <div className='grid grid-cols-3 gap-2'>
              <CrateTagsBadge tags={crate.tags} />
            </div>
            <Card.CardDescription>{items.length} items</Card.CardDescription>
          </div>
        </Card.CardHeader>
      </Card.Card>
    </Link>
  );
}
