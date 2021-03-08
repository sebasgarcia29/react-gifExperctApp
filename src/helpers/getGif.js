

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=YuoBBzdt6J9HyHigt0h9kPuBVLIStVdE`;
  const answer = await fetch(url);
  const { data } = await answer.json();
  const gifs = data.map((a) => {
    return {
      id: a.id,
      title: a.title,
      image: a.images.downsized_medium,
      url: a.images.downsized_medium.url
    }
  });

  return gifs;
}

