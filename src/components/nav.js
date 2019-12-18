import React from "react"
import "./styles/nav.scss"

export default ({ children }) => (
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </nav>
)