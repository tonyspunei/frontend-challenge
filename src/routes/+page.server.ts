import fetch from "node-fetch";

const fetchPricingData = async (interval) => {
  const response = await fetch("https://n8n.thearc.dev/webhook/pricing", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ interval }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${interval} pricing data: ${response.statusText}`);
  }

  return response;
}

export const load = async () => {
  // Fetch monthly pricing
  const monthlyResponse = await fetchPricingData('monthly');
  const monthlyData = await monthlyResponse.json();

  // Fetch yearly pricing
  const yearlyResponse = await fetchPricingData('yearly');
  const yearlyData = await yearlyResponse.json();

  return {
    monthlyPricing: monthlyData,
    yearlyPricing: yearlyData,
  };
};

