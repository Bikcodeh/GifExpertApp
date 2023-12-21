import { GifInfo } from './../interfaces/index';

import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category: string) => {
    const [gifs, setGifs] = useState<GifInfo[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false);
    };
    useEffect(() => {
        getImages();
    }, []);
    return {
        isLoading,
        gifs
    };
}
