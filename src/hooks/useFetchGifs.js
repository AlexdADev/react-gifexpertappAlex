import React, { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //useEffect se deispara una sola vez
    useEffect(() => {
        getGif(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [category])

    return state; //{data:[], loading:true}
}
