// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters'
import Timelime from '../Timeline'
import './index.scss'
import { useState, useEffect } from 'react'
// import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'



const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container about-page'>


                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']} idx={15} />
                    </h1>
                    <p>I currently work as a Data Analyst at See.Sense. I am very <br></br> interested in software developement and have completed <br></br>various projects in this field.
                    </p>
                    <p></p>
                    <p>You can download my CV&nbsp;
                        <a href="https://docs.google.com/document/d/11Ht9bLwZ3pCBWT5l-gBAm1JMjjnCZ4jym_YsgyqRE6k/edit" download style={{ textDecoration: 'none' }}>here.</a></p>
                </div>
                <Timelime />
            </div >
            <Loader type="pacman" />
        </>
    )
}

export default About