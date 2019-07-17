import React from 'react'
import store from '../store/store.js'

const Reviews = (props) => {
    return (
        <p>Reviews: {props.meta.product_id}</p>
    )
}

export default Reviews