import { Badge } from "./ui/badge";

interface ItemTagBadgeProps {
  magicInfinite?: boolean;
  weapon?: boolean;
  armor?: boolean;
  consumable?: boolean;
  tool?: boolean;
  key?: boolean;
  other?: boolean;
  common?: boolean;
  uncommon?: boolean;
  rare?: boolean;
  epic?: boolean;
  legendary?: boolean;
  disabled?: boolean;
  broken?: boolean;
}

export function ItemTagsBadge({ tags }: { tags: ItemTagBadgeProps }) {
  return (
    <>
      {tags.magicInfinite && <Badge variant={"cherry"}>Magic/Infinite</Badge>}
      {tags.weapon && <Badge variant={"spirit"}>Weapon</Badge>}
      {tags.armor && <Badge variant={"lotus"}>Armor</Badge>}
      {tags.consumable && <Badge variant={"tulip"}>Consumable</Badge>}
      {tags.tool && <Badge variant={"pancake"}>Tool</Badge>}
      {tags.key && <Badge variant={"outline"}>Key</Badge>}
      {tags.other && <Badge variant={"default"}>Other</Badge>}
      {tags.common && <Badge variant={"default"}>Common</Badge>}
      {tags.uncommon && <Badge variant={"samurai"}>Uncommon</Badge>}
      {tags.rare && <Badge variant={"shogun"}>Rare</Badge>}
      {tags.epic && <Badge variant={"immortal"}>Epic</Badge>}
      {tags.legendary && <Badge variant={"celestial"}>Legendary</Badge>}
      {tags.disabled && <Badge variant={"destructive"}>Disabled</Badge>}
      {tags.broken && <Badge variant={"destructive"}>Broken</Badge>}
    </>
  );
}
