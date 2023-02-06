import { useState } from 'react';
import { AddCategory, ErrorAlert, GifGrid } from './components';

export const GifExpertApp = () => {

    const [_categoryExists, setCategoryExists] = useState(false);

    const [categories, setCategories] = useState([]);

    // const handleAddCategory = (newCategory) => {

    //     // When we inside a set of useState we make a callback the parameter is the current value of the useState
    //     // setCategories((cat) => console.log(cat));

    //     setCategories([...categories, newCategory]);

    // }
    const onAddCategory = (newCategory) => {

        if (categoryExists(newCategory)) {
            setCategoryExists(true);

            setTimeout(() => {
                setCategoryExists(false);
            }, 1200);

            return;
        }

        setCategoryExists(false);

        setCategories([newCategory.trim(), ...categories]);

    }

    const categoryExists = (newCategory) => (categories.includes(newCategory));


    return (
        <>
            {/* Error Alert */}
            <ErrorAlert message='Category already exists!' show={_categoryExists} />

            {/* title */}
            <h3>GifExpertApp</h3>

            {/* input for search */}
            <AddCategory onNewCategory={(newCategory) => onAddCategory(newCategory)} />

            {/* list */}
            {
                categories.map((category) => (

                    <div key={category}>
                        <h3>{category}</h3>
                        <GifGrid category={category} />
                    </div>

                ))
            }


        </>
    );

}