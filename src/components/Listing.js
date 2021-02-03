import React from 'react'

const Listing = ({listing}) => {
    return <div>{listing.id} - {listing.price}</div>
}

export default Listing