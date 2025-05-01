"use client";
import { usePaginatedQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import { Button } from "./ui/button";
import { useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { ItemCard } from "./item-card";

export function ItemsList() {
  const [scrollRef, setScrollRef] = useState<HTMLElement | null>(null); // Manage ref dynamically
  const { results, status, loadMore } = usePaginatedQuery(
    api.blossom_items.list,
    {},
    { initialNumItems: 25 }
  );
  useEffect(() => {
    // Dynamically assign the container
    const container = document.querySelector<HTMLElement>(".main-scroll");
    if (container) setScrollRef(container);
  }, []); // Run
  const { scrollYProgress } = useScroll({ container: scrollRef ? { current: scrollRef } : undefined })
  //dynamically load more items when the user scrolls to 80% of the container
  if ( scrollYProgress.get() === 1 ) {
    console.log("Loading more items");
    loadMore(10);
  };
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {results?.map((item) => <ItemCard item={item} key={item._id}/>)}
      </div>
    </>
  );
}
