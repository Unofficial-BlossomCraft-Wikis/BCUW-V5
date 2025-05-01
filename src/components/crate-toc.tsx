import type { Doc } from "convex@/_generated/dataModel";


export function CrateTOC({ items }: { items: Doc<"blossomItems">[] }) {
  return (
    <div className="space-y-2">
      <p className="font-medium">On This Page</p>
      <ul className="m-0 list-none">
        <li className="mt-0 pt-2">
          <a href="#preview" className="inline-block no-underline font-medium text-primary">
            Preview
          </a>
        </li>
        <li className="mt-0 pt-2">
          <a href="#items" className="inline-block no-underline font-medium text-primary">
            Items
          </a>
          <ul className="m-0 list-none">
            {items.map((item) => (
              <li className="mt-0 pt-2">
                <a href={`#${item._id}`} className="inline-block no-underline font-medium text-primary">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}