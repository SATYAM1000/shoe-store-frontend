import { API_URL, STRAPI_API_TOKEN } from "./utils";
export const fetchDataFromApi = async (endpoint) => {
  if (!endpoint) {
    throw new Error("Endpoint is required");
  }

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
    },
  };

  try {
    const res = await fetch(`${API_URL}${endpoint}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

export const makePaymentRequest=async(endpoint, payload)=>{
  const res=await fetch(`${API_URL}${endpoint}`,{
    method: "POST",
    headers: {
      Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      "Content-Type":"application/json"
    },
    body:JSON.stringify(payload)
  })
  const data=await res.json();
  return data;
}
