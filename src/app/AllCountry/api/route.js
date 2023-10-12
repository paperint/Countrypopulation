import { NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function POST(request) {
  const url = new URL(request.url);
  const year = url.searchParams.get("year");
  try {
    const data = await pool.query(
      `select
        *
       from
        country
       where
        year = $1
        and countryname = 'World'
      `,
      [year]
    );
    return NextResponse.json({
      data: data.rows[0],
      message: "Here your data!",
    });
  } catch (error) {
    console.log("Start Error");
    return NextResponse.error("error pow:", error.message, 500);
  }
}
