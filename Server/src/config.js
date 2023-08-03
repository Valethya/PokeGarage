import * as dotenv from "dotenv";

dotenv.config({ path: `.env` });

export const passMongo = process.env.PASS_MONGO;
