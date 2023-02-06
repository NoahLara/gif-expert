import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        setInputValue(target.value);

    }

    const onSubmit = (e) => {
 

        e.preventDefault();
        
        const newValue = inputValue.trim();

        if(newValue.length <= 2) return; //Avoiding enter spaces as categoryes and sentences less than 2 character

        onNewCategory(newValue);

        resetInput();

    }

    const resetInput = () => {
        setInputValue('');
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                name="inputCategory"
                placeholder='Enter to add category...'
                value={inputValue}
                // this is the same like onChange={(e) => onInputChange(e)} />
                // This code below sends as parameter the input event
                onChange={onInputChange} />
        </form>

    )
}




// HOW TO RECEVIE A FUNCTION HERE AS CHILD COMPONENT AND USE THE SETSTATE
// import { useState } from 'react';

// export const AddCategory = ({ onAddCategory }) => {

//     const [inputValue, setInputValue] = useState('');

//     const onInputChange = ({ target }) => {

//         setInputValue(target.value);

//     }

//     const onSubmit = (e) => {


//         e.preventDefault();
        
//         if(inputValue.trim().length <= 2) return; //Avoiding enter spaces as categoryes and sentences less than 2 character

//         onAddCategory((categories) => [inputValue, ...categories]);
//         resetInput();

//     }

//     const resetInput = () => {
//         setInputValue('');
//     }

//     return (
//         <form onSubmit={(e) => onSubmit(e)}>
//             <input
//                 type="text"
//                 className='input-search'
//                 name="inputCategory"
//                 placeholder='Enter to add category...'
//                 value={inputValue}
//                 // this is the same like onChange={(e) => onInputChange(e)} />
//                 // This code below sends as parameter the input event
//                 onChange={onInputChange} />
//         </form>

//     )
// }