import fetch from "node-fetch";

export const load = async () => {
  const requestBody = {
    interval: 'monthly'
  };

  const response = await fetch("https://n8n.thearc.dev/webhook/pricing", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch pricing data: ${response.statusText}`);
  }

  const data = await response.json();
  return { pricing: data };
};