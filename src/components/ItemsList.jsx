import React from 'react'

function ItemsList({children}) {
    return (
        <ul className="p-6 m-4 text-left">{children}</ul>
    )
};

export default ItemsList;