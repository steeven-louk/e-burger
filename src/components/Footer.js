import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons'
import React from 'react'
import './styles/Footer.css'

function Footer() {
    return (
        <section className='footer'>
            <div className='footer-text'>
                <h1>Reach us on Social Media</h1>

                <div className='icons'>
                    <Facebook  className='icon'/>
                    <Instagram className='icon' />
                    <Twitter className='icon' />
                    <LinkedIn  className='icon'/>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum sem a ligula sollicitudin condimentum.</p>
            </div>
        </section>
    )
}

export default Footer
