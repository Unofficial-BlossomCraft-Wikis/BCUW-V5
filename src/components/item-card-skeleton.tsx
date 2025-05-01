"use client";
import * as Card from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

export function ItemCardPlaceholder() {
  return (
    <Card.Card>
      <Card.CardHeader className='flex flex-row gap-2'>
        <Skeleton className='h-16 w-16 rounded-lg' />
        <div className='flex flex-col gap-2'>
          <Card.CardTitle><Skeleton className="h-6 w-[250px]" /></Card.CardTitle>
          <div className='flex flex-row gap-2 overflow-x-scroll'>
            <Skeleton className="h-5 w-[50px]" />
          </div>
        </div>
      </Card.CardHeader>
    </Card.Card>
  );
}
