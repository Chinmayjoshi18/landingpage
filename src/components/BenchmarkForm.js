import { useState } from "react";

export default function BenchmarkForm({ onSubmit }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim() !== "") {
      onSubmit(prompt);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-3xl flex flex-col items-center">
      <input
        type="text"
        className="w-full p-3 bg-gray-800 rounded border border-gray-600 text-white"
        placeholder="Enter a prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button type="submit" className="mt-4 px-6 py-2 bg-green-500 rounded">
        Run Benchmark
      </button>
    </form>
  );
}