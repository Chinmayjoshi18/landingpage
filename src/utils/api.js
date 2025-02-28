const API_URL = process.env.AVS_API_URL;

export const fetchBenchmarkResults = async (prompt) => {
  try {
    console.log("🔍 Sending request to API:", API_URL);
    console.log("📤 Request Body:", JSON.stringify({ request: prompt }));

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ request: prompt }),
    });

    console.log("📥 API Response Status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ API Error Response:", errorText);
      throw new Error("Failed to fetch benchmark results");
    }

    const data = await response.json();
    console.log("✅ API Success Response:", data);

    return data;
  } catch (error) {
    console.error("❌ Error fetching benchmark data:", error);
    return { error: "Failed to fetch benchmark results" };
  }
};