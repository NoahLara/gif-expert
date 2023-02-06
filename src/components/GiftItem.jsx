
export const GiftItem = ({url, id, title}) => {
    return (

        <div className='card'>
            <img src={url} alt={`gif-${title+id}`} />
            <p>{title}</p>
        </div>

    )
}
