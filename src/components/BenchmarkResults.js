export default function BenchmarkResults({ results }) {
    if (!results) return null;
  
    return (
      <div className="mt-6 p-4 bg-gray-800 rounded w-full text-center">
        <h3 className="text-xl font-semibold">Benchmark Results</h3>
        <p><strong>Response:</strong> {results.response}</p>
        <p><strong>Confidence Score:</strong> {results.confidence}</p>
        <p><strong>Agent ID:</strong> {results.agent_id}</p>
      </div>
    );
  }