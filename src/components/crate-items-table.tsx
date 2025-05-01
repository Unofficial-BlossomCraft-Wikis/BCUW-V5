import * as Table from "@/components/ui/table";
import type { Doc } from "convex@/_generated/dataModel";

export function CrateItemsTable({ items }: { items: Doc<"blossomItems">[] }) {
  const sortedItems = items.sort((a, b) => b.crateWinChance - a.crateWinChance);
  return (
    <Table.Table>
      <Table.TableHeader>
        <Table.TableRow>
          <Table.TableHead>Item</Table.TableHead>
          <Table.TableHead>Win Chance</Table.TableHead>
        </Table.TableRow>
      </Table.TableHeader>
      <Table.TableBody>
        {sortedItems.map((item) => (
          <Table.TableRow key={item._id}>
            <Table.TableCell>{item.name}</Table.TableCell>
            <Table.TableCell>{item.crateWinChance}</Table.TableCell>
          </Table.TableRow>
        ))}
      </Table.TableBody>
    </Table.Table>
  );
}
