import React from 'react'
import IngredientsList from './IngredientsList'
import Instructions from './Instructions'

const Recipe = ({ name, ingredients, steps }) => {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking instructions" steps={steps} />
        </section>
        // <section id='baked-salmon'>
        //     <h1>{name}</h1>
        //     <ul className='ingredients'>
        //         {
        //             ingredients.map((ingredient, i) => (
        //                 <li key={i}>{ingredient.name}</li>
        //             ))
        //         }
        //     </ul>
        //     <section className='instructions'>
        //         <h2>Cooking instructions</h2>
        //         {
        //             steps.map((step, i) => (
        //                 <p key={i}>{step}</p>
        //             ))
        //         }
        //     </section>
        // </section>
    )
}

export default Recipe