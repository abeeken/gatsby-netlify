import React from "react"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"
import "./styles/layout.scss"

export default ({ children }) => (
    <div id="site">
        <Header />
        <Nav />
        <div id="content">
            {children}
        </div>
        <Footer />
    </div>
)