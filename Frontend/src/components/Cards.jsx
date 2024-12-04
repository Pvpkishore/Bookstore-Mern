import React from 'react'

const Cards = ({item}) => {
    return (
        <div>
            <div className="card md:w-80 w-auto shadow-xl mt-6 p-1 m-2 mb-8 hover:scale-105 duration-300 dark:bg-slate-900 dark:border-2">
                <figure>
                    <img
                        src={item.img}
                        alt="bookimg"/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-between">
                        <div className="rounded-full border-2 py-1 px-3 hover:bg-pink-500">${item.price}</div>
                        <div className="rounded-full border-2 py-1 px-3 hover:bg-pink-500">Buy Now</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards