import { Page } from "@/components/client-pages/crate/page";
import { TitleDataUpdater } from "@/components/title-provider";
import type { Id } from "convex@/_generated/dataModel";
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id: Id<"blossomCrates"> = (await params).id as Id<"blossomCrates">;
  return (
    <>
      <Page id={id} />
    </>
  );
}
