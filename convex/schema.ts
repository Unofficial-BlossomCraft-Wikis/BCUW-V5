import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  blossomItems: defineTable({
    name: v.string(),
    release: v.string(),
    crate: v.string(),
    baseitem: v.string(),
    sharedItemId: v.optional(v.string()),
    isSharedItemBaseItem: v.optional(v.boolean()),
    tags: v.object({
      magicInfinite: v.boolean(),
      weapon: v.boolean(),
      armor: v.boolean(),
      consumable: v.boolean(),
      tool: v.boolean(),
      key: v.boolean(),
      other: v.boolean(),
      common: v.boolean(),
      uncommon: v.boolean(),
      rare: v.boolean(),
      epic: v.boolean(),
      legendary: v.boolean(),
      disabled: v.boolean(),
      broken: v.boolean(),
    }),
  }).index("by_name", ["name"]).index("by_crate", ["crate"]).index("by_tags", ["tags"]),
  blossomCrates: defineTable({
    name: v.string(),
    release: v.string(),
    price_keyshop: v.number(),
    price_shop: v.object({
      one: v.number(),
      five: v.number(),
      ten: v.number()
    }),
    tags: v.object({
      infinite: v.boolean(),
      season: v.boolean(),
      lt: v.boolean(),
      holiday: v.boolean(),
      other: v.boolean(),
    }),
  }).index("by_name", ["name"]).index("by_tags", ["tags"]),
  itemImages: defineTable({
    name: v.string(),
    images: v.object({
      item: v.string(),
      lore: v.string(),
    }),
  }).index("by_name", ["name"]),
  crateImages: defineTable({
    name: v.string(),
    images: v.array(v.string()),
  }).index("by_name", ["name"]),
});


