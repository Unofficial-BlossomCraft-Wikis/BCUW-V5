import { query } from "./_generated/server";
import { v } from "convex/values";
import { paginationOptsValidator } from "convex/server";

export const list = query({
  args: { paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("blossomCrates")
      .order("desc")
      .paginate(args.paginationOpts);
  },
});

export const getById = query({
  args: { id: v.id("blossomCrates") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getRandom = query({
  handler: async (ctx) => {
    const crates = await ctx.db.query("blossomCrates").collect();
    return crates[Math.floor(Math.random() * crates.length)];
  },
});

export const getFiveRandom = query({
  handler: async (ctx) => {
    const crates = await ctx.db.query("blossomCrates").collect();
    crates.sort(() => Math.random() - 0.5);
    return crates.slice(0, 5);
  },
});