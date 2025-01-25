import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Memes']);
    //agregar elementos a la lista
    // const handleAdd = () => {
    //     //setCategories([...categories,'Hulk']);

    //     setCategories(cats => [...cats, 'Hulk'])
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <br />
            <AddCategory setCategories={setCategories} />
            <hr />
            <br />

            <ol>
                {
                    categories.map((category) =>
                        <GifGrid
                            key={category}
                            category={category} />
                    )
                }
            </ol>
        </>
    )
}
