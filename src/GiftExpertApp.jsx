import {useState} from "react";
import {AddCategory} from "./components/AddCategory.jsx";
import {GifGrid} from "./components/GifGrid.jsx";

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([])

    const addCategory = (newCategory) => {
        if (categories.map(category => category.toLowerCase())
            .includes(newCategory.toLowerCase())
        ) {
            return
        }
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>Gift Expert App</h1>
            <AddCategory
                onNewCategory={(value) => addCategory(value)}
            />
            {categories.map(category=> (
                <GifGrid key={category} category={category} />
            ))}
        </>
    )
}