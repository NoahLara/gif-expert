export const getGiphs = async (category) => {

    const apiKey = 'J0vqarICdaKVQNeuwXI2yT8TKySUk6kj';

    const limitItems = 5;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${limitItems}`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map((img_items) => ({
        id: img_items.id,
        title: img_items.title,
        url: img_items.images.downsized_medium.url

    }));

    return gifs;

}