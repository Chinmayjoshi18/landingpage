export const fetchAIResponse = async (input: string) => {
  const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ request: input })
  });
  return response.json();
};
