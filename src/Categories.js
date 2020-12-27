import React from 'react';

function Categories({category, filterCategories}) {
    return (
        <div  >
            <button onClick={()=>filterCategories(category)} className='filter-btn'>{category}</button>
        </div>
    )
}

export default Categories
