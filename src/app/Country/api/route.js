import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const year = searchParams.get("year");
  // const year = "1997";

  try {
    const data = await pool.query(
      `
        SELECT *
        FROM country
        WHERE
            year = $1
            And countryname not like '%Asia%'
            And countryname not like '%World%'
            And countryname not like '%developed%'
            And countryname not like '%countries%'
            And countryname not like '%(UN)%'
        ORDER BY population desc
        limit 12
      `,
      [year]
    );
    return NextResponse.json({ data: data.rows, message: "Here your data!" });
  } catch (error) {
    console.log("Start Error");
    return NextResponse.error("error pow:", error.message, 500);
  }
}
