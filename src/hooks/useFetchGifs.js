import { useState, useEffect } from "react";
import { getGiphs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {


    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGiphsCategory = async () => {

        try {
            const gifs = await getGiphs(category);
            setGifs(gifs);
            setIsLoading(false);

        } catch (error) {
            console.log(err);
        }

    }

    useEffect(() => {

        getGiphsCategory();

    }, []);

    return ({
        gifs,
        isLoading
    });

}