export const GiftItem = (
    { title, url }
) => {
    return (
        <div className={'card'}>
            <img src={url} alt="gift" />
            <p>{title}</p>
        </div>
    )
}