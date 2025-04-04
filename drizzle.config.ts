import type { Config } from "drizzle-kit";

import { env } from "@/env";

export default {
	schema: "./src/server/db/schema.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: env.DATABASE_URL,
		token: env.DATABASE_TOKEN,
	},
	tablesFilter: ["bcuw-v5_*"],
} satisfies Config;
