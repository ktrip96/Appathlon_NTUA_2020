import React from 'react'
import {Link} from "react-router-dom"

export default function Landing() {
    return (
        <div>
            This is the Landing Page
            <Link to="/main">
                <button>Go to Main page</button>
            </Link>
        </div>
    )
}
