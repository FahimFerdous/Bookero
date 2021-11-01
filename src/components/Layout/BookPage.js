import React, { useState } from 'react'
import BookDetailsCard from './BookDetailsCard'
import JSONDATA from "../UserManagement/DemoData.json"

import "./layout.css"

const BookPage = () => {

    const [filter, setfilter] = useState("")

    const setsearchText = (e) => {
        setfilter(e.target.value)
    }

    let searchData = JSONDATA.filter(item => {
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    })

    return (
        <div className="container">
            <div className='row'>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="sideBarContainer">
                        <h2>Categories</h2>
                        <hr />
                        <ul>
                            <li>
                                <a href="#">Best Sellers</a>
                            </li>
                            <li>
                                <a href="#">New Releases</a>
                            </li>
                            <li>
                                <a href="#">E-Books</a>
                            </li>
                            <li>
                                <a href="#">Fictions</a>
                            </li>
                            <li>
                                <a href="#">Non - Fictions</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12" >
                    <div className="row">
                        <input className="searchBox" type="text" placeholder="Search Here" value={filter} onChange={setsearchText.bind(this)} />
                        <hr className="searchDivider" />
                    </div>
                    <div className="row">
                        {
                            searchData.map((val, key) => {
                                return <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title={val.Title} author={val.Author} price={val.Price} />
                            })
                        }


                    </div>

                </div>
            </div>

        </div>
    )
}

export default BookPage
