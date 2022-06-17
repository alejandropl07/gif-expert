export const getGifs = async (category, apiKey) => {
  const response = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${encodeURI(
      category
    )}&limit=10&api_key=${apiKey}`
  );
  const { data } = await response.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifs;
};
