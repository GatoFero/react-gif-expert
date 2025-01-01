import {useEffect, useState} from "react";
import {getGifts} from "./apiGift.js";

export const useFetchGifts = (category) => {
    const [giftItems, setGiftItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (giftItems.length === 0) {
            getGifts(category)
                .then(gifts => {
                    setGiftItems(gifts);
                    setIsLoading(false)
                });
        }
    },[category, giftItems.length])

    return {
        giftItems,
        isLoading
    }
}