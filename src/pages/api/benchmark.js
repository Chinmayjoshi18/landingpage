export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const API_URL = process.env.AVS_API_URL;

  try {
    console.log("🔍 Forwarding request to backend API:", API_URL);
    console.log("📤 Request Body:", req.body);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });

    console.log("📥 Backend API Response Status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Backend API Error:", errorText);
      return res.status(response.status).json({ error: errorText });
    }

    const data = await response.json();
    console.log("✅ Backend API Success:", data);

    return res.status(200).json(data);
  } catch (error) {
    console.error("❌ Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}