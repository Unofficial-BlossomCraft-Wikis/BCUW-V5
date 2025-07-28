"use client";
import { usePaginatedQuery } from "convex/react";
import { api } from "convex@/_generated/api";
import { useState } from "react";
import { CrateCard } from "./crate-card";
import InfiniteScroll from "@/components/ui/infinite-scroll";
import { Loader2 } from "lucide-react";
import { Masonry, ResponsiveMasonry } from "@/components/ui/masonry";

const columnsCountBreakPoints = {
  400: 1,
  850: 2,
  1200: 3,
};

export function CratesList() {
  const [loading, setLoading] = useState(false);

  const { results, status, loadMore } = usePaginatedQuery(
    api.blossom_crates.list,
    {},
    { initialNumItems: 6 }
  );

  const hasMore = status === "CanLoadMore";

  const next = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      await loadMore(6);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ResponsiveMasonry columnsCountBreakPoints={columnsCountBreakPoints}>
      <Masonry gutter='0.5rem'>
        {results?.map((item) => <CrateCard crate={item} key={item._id} />)}
        <InfiniteScroll
          hasMore={hasMore}
          isLoading={loading}
          next={next}
          threshold={0.8}
        >
          {hasMore && (
            <div className='col-span-full flex justify-center py-4'>
              <Loader2 className='h-8 w-8 animate-spin' />
            </div>
          )}
        </InfiniteScroll>
      </Masonry>
    </ResponsiveMasonry>
  );
}