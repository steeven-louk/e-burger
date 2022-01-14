import React from 'react'
import './styles/Second.css'
import b1 from './assets/b1.jpg'
import b2 from './assets/b2.jpg'

function Second() {
    return (
        <section className='second-section'>
            <div className='second-container'>

                <div className='card'>
                    <img src={b1} alt='' />
                    <p>Big Boy Spicy</p>
                    <button>Order</button>
                </div>
                <div className='card'>
                    <img src={b2} alt='' />
                    <p>Big Boy Spicy</p>
                    <button>Order</button>
                </div>
                <div className='card'>
                    <img src={b1} alt='' />
                    <p>Big Boy Spicy</p>
                    <button>Order</button>
                </div>
                <div className='card'>
                    <img src={b2} alt='' />
                    <p>Big Boy Spicy</p>
                    <button>Order</button>
                </div>
                <div className='card'>
                    <img src={b1} alt='' />
                    <p>Big Boy Spicy</p>
                    <button>Order</button>
                </div>
                <div className='card'>
                    <img src={b2} alt='' />
                    <p>Big Boy Spicy</p>
                    <button>Order</button>
                </div>
            </div>
        </section>
    )
}

export default Second
