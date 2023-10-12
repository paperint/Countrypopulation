export default async function getAllCountry(year) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/AllCountry/api?year=${year}`,
    {
      cache: "force-cache",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
