import { query } from "./_generated/server";
import { v } from "convex/values";

export const getByItemName = query({
  args: { itemName: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query("itemImages").filter((q) => q.eq(q.field("name"), args.itemName)).first();
  },
});