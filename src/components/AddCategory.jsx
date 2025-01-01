import {useState} from "react";
import PropTypes from "prop-types";

export const AddCategory = (
    { onNewCategory }
) => {
    const [inputValue, setInputValue] = useState('')

    const onAddCategory = (e) => {
        e.preventDefault()
        const value = inputValue.trim()
        if (value.length < 2) return
        onNewCategory(value)
        setInputValue('')
    }

    return (
        <form onSubmit={(e) =>
            onAddCategory(e)}
        >
            <input
                type={'text'}
                placeholder={'Buscar gift'}
                value={inputValue}
                onChange={(e) =>
                    setInputValue(e.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}