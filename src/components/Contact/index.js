import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { env } from '../../env'
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet'


const Contact = () => {


    const [letterClass, setLetterClass] = useState('text-animate')

    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm(env.service_id, env.template_key, refForm.current, env.public_key)
            .then(() => {
                alert('Message succesfully sent!')
                window.location.reload(false)
            }, () => {
                alert('Failed to send. Please try again.')
            })
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
                            idx={15} />
                    </h1>
                    <p>
                        If you wish to get in touch fill in the form down below.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text'
                                        name='from_name'
                                        placeholder='Name'></input>
                                </li>
                                <li className='half'>
                                    <input type='email'
                                        name='email'
                                        placeholder='Email'
                                        required></input>
                                </li>
                                <li>
                                    <input placeholder='Subject'
                                        type="text"
                                        name="subject"
                                        required />
                                </li>
                                <li>
                                    <textarea placeholder='Message'
                                        name='message'
                                        required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND'></input>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className='map-wrap'>
                    <MapContainer style={{ height: "80%", width: "80%", borderRadius: "20px", marginTop: "70px", marginLeft: "50px" }} center={[54.515, -5.88]} zoom={14}>
                        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                        <Circle center={[54.515, -5.88]} radius={500} color='#27b5db'>
                            <Popup>I live around here!</Popup>
                        </Circle>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />
        </>

    )
}

export default Contact