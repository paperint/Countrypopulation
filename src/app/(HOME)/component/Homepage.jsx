"use client";
import React, { useEffect, useState } from "react";
import GraphCountry from "./GraphCountry";
import { FaHandPointDown } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import getCountry from "@/app/lib/getCountry";

export default function Homepage() {
  const [loading, setLoading] = useState(false);

  const forceCache = async () => {
    try {
      setLoading(true);
      const year = 1995;
      for (let i = year; i < 2022; i++) {
        await getCountry(i);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    forceCache();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center w-full max-w-5xl min-h-screen gap-4 p-24 mx-auto">
      <article className="w-full">
        <h1 className="text-xl font-bold">
          Population growth per country, 1950 to 2021
        </h1>
        <p className="inline-flex items-center gap-2">
          Click on the legend below to filter by continent{" "}
          <span>
            <FaHandPointDown className="text-yellow-700" />
          </span>
        </p>
      </article>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <GraphCountry />
      )}
    </main>
  );
}
