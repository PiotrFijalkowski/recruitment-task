import React from 'react'

const Pets = ({ items, isLoading}) => {
    const buy = () => {
        console.log('buy');
        
    }
    return isLoading ? (<h1>Loading...</h1>) : <section className="Pets">
        {items.map((item) => (
           <div >
               <h1>{item.name}</h1>
               <h2>{item.status}</h2>
               <h2>{item.id}</h2>
               <button onClick={buy}>buy</button>
                <hr></hr>
           </div>
        ))}
    </section>
}

export default Pets
