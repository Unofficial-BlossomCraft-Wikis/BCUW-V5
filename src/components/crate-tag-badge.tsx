import { Badge } from "./ui/badge";

interface CrateTagBadgeProps {
  infinite?: boolean;
  season?: boolean;
  lt?: boolean;
  holiday?: boolean;
  other?: boolean;
}

export function CrateTagsBadge({ tags }: { tags: CrateTagBadgeProps }) {
  return (
    <>
      {tags.infinite && <Badge variant={"celestial"}>Infinite</Badge>}
      {tags.season && <Badge variant={"pancake"}>Season</Badge>}
      {tags.lt && <Badge variant={"lotus"}>LT</Badge>}
      {tags.holiday && <Badge variant={"tulip"}>Holiday</Badge>}
      {tags.other && <Badge variant={"default"}>Other</Badge>}
    </>
  );
}
