import React, { useState } from 'react'

const Filter = ({ getQuery }) => {
const [selected, setSelected] = useState('available')

const onSelect = (q) => {
    setSelected(q)
    getQuery(q)
}

    return (
        <select  onChange={(e) => onSelect(e.target.value)}>
            <option value="available">available</option>
            <option value="pending">pending</option>
            <option value="sold">sold</option>
        </select>
    )

}

export default Filter
