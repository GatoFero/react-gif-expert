export const getGifts = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=KNuWYJcS7TVygQen8fKOyIuh5uQg0xKQ&q=${category}&limit=10`;
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifts = data.map((gift) => ({
        id: gift.id,
        title: gift.title,
        url: gift.images.downsized_medium.url,
    }))
    console.log(gifts)
    return gifts
}