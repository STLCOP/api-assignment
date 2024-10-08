// api/apiClient.ts
export const fetchData = async () => {
  try {
    const randomId = Math.floor(Math.random() * 1000); // Get a random ID between 0 and 1000
    const response = await fetch(`https://picsum.photos/id/${randomId}/info`);
    if (!response.ok) {
      throw new Error(`Failed to fetch image info: ${response.statusText}`);
    }
    console.log(response)
    return await response.json();
  } catch (error) {
    console.error("Error fetching image info:", error);
    return null;
  }
};
