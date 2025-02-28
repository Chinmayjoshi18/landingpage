export default function BenchmarkResults({ results }) {
  if (!results) return null;

  if (results.error) {
    return (
      <div className="mt-6 p-4 bg-red-600 rounded w-full text-center text-white">
        <h3 className="text-xl font-semibold">Error</h3>
        <p>{results.error}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-gray-800 rounded w-full text-center shadow-md">
      <h3 className="text-xl font-semibold text-blue-400">Benchmark Results</h3>
      <p className="mt-2"><strong className="text-gray-300">Response:</strong> {results.response}</p>
      <p><strong className="text-gray-300">Confidence Score:</strong> {results.confidence}</p>
      <p><strong className="text-gray-300">Agent ID:</strong> {results.agent_id}</p>
    </div>
  );
}