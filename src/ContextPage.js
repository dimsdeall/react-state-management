import React, { useContext } from 'react'
import './App.css'
import AppContext from './AppContext'

const {
    LangContext,
    LangProvider,
    ThemeContext,
    ThemeProvider
} = AppContext



function ContextPage() {


    return (
        <LangProvider >
            <ThemeProvider>
                <Header />
                <Content />
                <Footer />
            </ThemeProvider>
        </LangProvider>
    )
}

function Header() {
    return (
        <div>
            <i>-- Header --</i>
            <Menu />
        </div>
    )
}

function Menu() {
    const consumerlang = useContext(LangContext)
    const consumertheme = useContext(ThemeContext)
    return (
        <div>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>
                    Languange
                    <select value={consumerlang.lang} onChange={consumerlang.changeLang}>
                        <option value="🇬🇧"> 🇬🇧 English </option>
                        <option value="🇮🇩"> 🇮🇩 Indonesia </option>
                    </select>
                </li>
                <li>
                    Theme
                    <select value={consumertheme.theme} onChange={consumertheme.changeTheme}>
                        <option value="light"> light </option>
                        <option value="dark"> dark </option>
                    </select>
                </li>
            </ul>
        </div>
    )
}

function Content() {
    return (
        <div>
            <i>-- Content --</i>
            <h3> 🤙 Hello React Context </h3>
        </div>
    )
}

function Footer() {
    const consumerlang = useContext(LangContext)
    const consumertheme = useContext(ThemeContext)
    return (
        <div>
            <i>-- Footer --</i>
            <p>Languange : {consumerlang.lang}</p>
            <p>Theme : {consumertheme.theme}</p>
        </div>
    )
}

export default ContextPage
