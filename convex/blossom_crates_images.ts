import { query } from "./_generated/server";
import { v } from "convex/values";

export const getByCrateName = query({
  args: { crateName: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query("crateImages").filter((q) => q.eq(q.field("name"), args.crateName)).first();
  },
});