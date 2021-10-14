import React from 'react'
import "./layout.css"
import { Button } from "react-bootstrap"

const BookDetailsCard = (props) => {
    return (
        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="BookContainer">
                <a href="#">
                    <img src={props.src} />
                    <h3>{props.title}</h3>
                </a>
                <h5>{props.author}</h5>
                <hr />
                <div className="priceContainer">
                    <p>{props.price}</p>
                    <Button>Add to Cart</Button>
                </div>
            </div>
        </div>
    )
}

export default BookDetailsCard
