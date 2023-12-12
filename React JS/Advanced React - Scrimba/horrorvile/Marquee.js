import React from "react"

export default function Marquee(props) {
    return (
        <div className="marquee">
            <h1>{props.text}</h1>
        </div>
    )
}