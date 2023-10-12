export default async function getCountry(year) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/Country/api?year=${year}`,
    {
      next: { revalidate: 600 },
      // revalidate data every 10 min
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}
