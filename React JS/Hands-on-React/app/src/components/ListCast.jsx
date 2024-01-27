import React, { useEffect, useState } from 'react'

const ListCast = () => {
    const [cast, setCast]  = useState([])
    
    async function fetchCast (){
        const response = await fetch('cast.json');
        setCast(await response.json())

    }

    useEffect(() =>{
        fetchCast()
    })


  return (
    <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }}>
        {
            cast.map((person, index) => {
                return (
                    <div key={index} style={{
                        display:"grid",
                        gridTemplateColumns: "1fr",
                        gap:`1rem`,
                        marginBottom:`1rem`
                    }}>
                        <img src={`${person.slug}_tn.svg`} alt={person.name} style={{
                            width: "100%",
                            borderRadius: "5px"
                        }}/>
                        <h3>{person.name}</h3>
                        <p>{person.role}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ListCast



