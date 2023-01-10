import { useState } from "react"

export function GetScroll () {
    const [y, sety] = useState(0)
    window.addEventListener('scroll', () => {
        const h = document.documentElement.scrollTop
        sety(h)
    })
    return [y]
}