import PropTypes from "prop-types";
import {GiftItem} from "./GiftItem.jsx";
import {useFetchGifts} from "../hooks/useFetchGift.js";

export const GifGrid = ({ category }) => {
    const { giftItems, isLoading} = useFetchGifts(category);

    return (
        <>
            <h3>{category}</h3>
            {isLoading && (
                <h2>Cargando...</h2>
            )}
            <div className="card-grid">
                {giftItems.map(({id, title, url}) => (
                    <GiftItem key={id} url={url} title={title}/>
                ))}
            </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string,
}