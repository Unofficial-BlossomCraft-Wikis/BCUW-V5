import type { Doc } from "convex@/_generated/dataModel";

export function CratePreview({
  crateImages,
}: {
  crateImages: Doc<"crateImages">;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        crateImages.images.map((image) => (
          <img src={`/cdn/ut/${image}`} alt={crateImages.name} className="h-full w-full rounded-lg" />
        ))
      }
    </div>
  );
}
