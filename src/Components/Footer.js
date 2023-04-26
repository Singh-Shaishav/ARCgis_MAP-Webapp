import React from 'react'


export default function Footer() {
    let footer = {
        textAlign: "center",
       bottom: "0",
        backgroundColor: 'transparent',
        width: "100%",
        color:"black",
        padding:"5px"
    }

    return (
        <div style={footer}>
            <p className="text-center">
                Copyright &copy; Maps.com
            </p>
        </div>
    )
}
