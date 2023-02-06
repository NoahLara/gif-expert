import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftItem, LoadingSpinner } from './';

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <div className='card-grid'>

                <LoadingSpinner isLoading={isLoading} />

                {

                    gifs.map((gif) => (

                        <GiftItem key={gif.id} {...gif} />
                        // <GiftItem key={id} id={id} title={title} url={url} />

                    ))

                }

            </div>

        </>
    )

}
