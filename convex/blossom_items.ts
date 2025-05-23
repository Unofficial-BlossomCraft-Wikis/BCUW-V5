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
    return await ctx.db.get(args.id);
  },
});

export const getByCrate = query({
  args: { crate: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.query("blossomItems").withIndex("by_crate").filter((q) => q.eq(q.field("crate"), args.crate)).collect();
  },
});

export const getRandom = query({
  handler: async (ctx) => {
    const items = await ctx.db.query("blossomItems").collect();
    return items[Math.floor(Math.random() * items.length)];
  },
});

export const getFiveRandom = query({
  handler: async (ctx) => {
    const items = await ctx.db.query("blossomItems").collect();
    items.sort(() => Math.random() - 0.5);
    return items.slice(0, 5);
  },
});