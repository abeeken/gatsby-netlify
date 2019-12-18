import React from "react"
import "./styles/nav.scss"

export default ({ children }) => (
    <nav>
        <ul>
            <li><a href="/">Nav 1</a></li>
            <li><a href="/about">Nav 2</a></li>
        </ul>
    </nav>
)