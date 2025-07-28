import type { Doc } from "convex@/_generated/dataModel";

export function CratePreview({ crate }: { crate: Doc<"blossomCrates"> }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
      {crate.images.map((image) => (
        <img
          src={`/cdn/ut/${image}`}
          alt={crate.name}
          key={image}
          className='h-full w-full rounded-lg'
        />
      ))}
    </div>
  );
}
