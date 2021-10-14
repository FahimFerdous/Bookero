import React from 'react'
import BookDetailsCard from './BookDetailsCard'

import "./layout.css"

const BookPage = () => {
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
                        <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title="Harry Porter and the Chamber of Secrets" author="J.K. Rowling" price="$150" />
                        <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title="Harry Porter and the Chamber of Secrets" author="J.K. Rowling" price="$250" />
                        <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title="Harry Porter and the Chamber of Secrets" author="J.K. Rowling" price="$350" />
                        <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title="Harry Porter and the Chamber of Secrets" author="J.K. Rowling" price="$450" />
                        <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title="Harry Porter and the Chamber of Secrets" author="J.K. Rowling" price="$150" />
                        <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title="Harry Porter and the Chamber of Secrets" author="J.K. Rowling" price="$250" />
                        <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title="Harry Porter and the Chamber of Secrets" author="J.K. Rowling" price="$350" />
                        <BookDetailsCard src="https://vectorsjungle.com/cache/icon_700/icons/20-vectorsjungle/XuIYcq/preview.png" title="Harry Porter and the Chamber of Secrets" author="J.K. Rowling" price="$450" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default BookPage
