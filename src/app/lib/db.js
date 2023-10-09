import * as pg from "pg";
const { Pool } = pg.default;

const pool = new Pool({
  user: process.env.NEXT_PUBLIC_PGSQL_USER,
  password: process.env.NEXT_PUBLIC_PGSQL_PASSWORD,
  host: process.env.NEXT_PUBLIC_PGSQL_HOST,
  port: process.env.NEXT_PUBLIC_PGSQL_PORT,
  database: process.env.NEXT_PUBLIC_PGSQL_DATABASE,
});

export default pool;
