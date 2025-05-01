import { query } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blossomItems")
      .order("desc")
      .paginate(args.paginationOpts);
  },
});

export const getById = query({
  args: { id: v.id("blossomItems") },
  handler: async (ctx, args) => {
    return await ctx.db.query("blossomItems").filter((q) => q.eq(q.field("_id"), args.id)).first();
  },
});