const API_URL = process.env.NEXT_PUBLIC_AVS_API_URL;

export const fetchBenchmarkResults = async (prompt) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request: prompt }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch benchmark results");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching benchmark data:", error);
    return null;
  }
};