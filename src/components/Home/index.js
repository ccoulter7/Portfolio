import { Link } from "react-router-dom"
import './index.scss'
import myC from '/Users/cathalcoulter/Documents/portfolio/src/assets/images/cooltext451165751374388.png'
import AnimatedLetters from "../AnimatedLetters"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPython, faReact } from '@fortawesome/free-brands-svg-icons'



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'athal'.split('')
    const descArray = 'Data Analyst'.split('')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>
                        <span className={`${letterClass} _13`}>,</span>

                        <br />
                        <span className={`${letterClass} _14`}>I</span>
                        <span className={`${letterClass} _15`}>'</span>
                        <span className={`${letterClass} _16`}>m</span>


                        <img src={myC} alt="developer" className="myC" />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={nameArray}
                            idx={1} />
                        <br />
                        <AnimatedLetters letterClass={letterClass}
                            strArray={descArray}
                            idx={6} />
                    </h1>
                    <h2>I am currently working as a Data Analyst at See.Sense <br />
                        with  a strong interest in software development. </h2>
                    <Link to="/contact" className="flat-button"> CONTACT ME</Link>
                </div>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPython} />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Home