import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import BenchmarkForm from "../components/BenchmarkForm";
import BenchmarkResults from "../components/BenchmarkResults";
import { fetchBenchmarkResults } from "../utils/api";

export default function Home() {
  const [wallet, setWallet] = useState(null);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleBenchmark = async (prompt) => {
    setError(null); // Reset error before new request
    setResults(null); // Clear previous results
  
    try {
      console.log("📤 Sending request to: /api/benchmark");
  
      const response = await fetch("/api/benchmark", { // ✅ Fix: Remove extra `/api/benchmark`
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ request: prompt }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch benchmark results");
      }
  
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("❌ Frontend Error:", error);
      setError("Failed to fetch benchmark results. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <Head>
        <title>Semantix AVS Benchmarking</title>
      </Head>

      <Header onConnect={setWallet} />
      <main className="w-full max-w-3xl mt-8 flex flex-col items-center">
        <BenchmarkForm onSubmit={handleBenchmark} />
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {results && <BenchmarkResults results={results} />}
      </main>
    </div>
  );
}