import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import BenchmarkForm from "../components/BenchmarkForm";
import BenchmarkResults from "../components/BenchmarkResults";
import { fetchBenchmarkResults } from "../utils/api";

export default function Home() {
  const [wallet, setWallet] = useState(null);
  const [results, setResults] = useState(null);

  const handleBenchmark = async (prompt) => {
    const response = await fetchBenchmarkResults(prompt);
    setResults(response);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <Head>
        <title>Semantix AVS Benchmarking</title>
      </Head>

      <Header onConnect={setWallet} />
      <main className="w-full max-w-3xl mt-8 flex flex-col items-center">
        <BenchmarkForm onSubmit={handleBenchmark} />
        <BenchmarkResults results={results} />
      </main>
    </div>
  );
}