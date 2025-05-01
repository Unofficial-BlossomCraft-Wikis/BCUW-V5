"use client";
import { usePaginatedQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import { Button } from "./ui/button";
import { useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { CrateCard } from "./crate-card";

export function CratesList() {
  const [scrollRef, setScrollRef] = useState<HTMLElement | null>(null); // Manage ref dynamically
  const { results, status, loadMore } = usePaginatedQuery(
    api.blossom_crates.list,
    {},
    { initialNumItems: 25 }
  );
  useEffect(() => {
    // Dynamically assign the container
    const container = document.querySelector<HTMLElement>(".main-scroll");
    if (container) setScrollRef(container);
  }, []); // Run
  const { scrollYProgress } = useScroll({ container: scrollRef ? { current: scrollRef } : undefined })
  //dynamically load more crates when the user scrolls to 80% of the container
  if ( scrollYProgress.get() === 1 ) {
    console.log("Loading more crates");
    loadMore(10);
  };
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
        {results?.map((item) => <CrateCard crate={item} key={item._id}/>)}
      </div>
    </>
  );
}
