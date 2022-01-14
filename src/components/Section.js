import { ArrowForward } from '@material-ui/icons'
import React from 'react'
import './styles/Section.css'

const Section =() => {
    return (
        <section className='section-1'>
            
            <div className='section-container'>
                <div className='texts'>
                    <h1>Day Starts with a piece of <span>Pizza</span></h1>
                    <h4>And Ends with two piece of Pizza</h4>
                    <button>Discover</button>
                    <button>Menu</button>
                </div>

                <div className='black-box'>
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum sem a ligula sollicitudin condimentum. Maecenas molestie tortor
                     sit amet nunc vestibulum, non euismod massa dapibus. Cras efficitur, odio sed venenatis sollicitudin, lacus metus malesuada diam, nec faucibus velit velit vitae odio. Mauris nec convallis turpis. Aenean lobortis lectus nunc, quis luctus dui venenatis ac. Vestibulum eget justo
                     </p>
                    <button>
                        <span>more</span>
                        <ArrowForward className='arrow-forward' />
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Section
