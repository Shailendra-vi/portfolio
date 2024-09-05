import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImage from '../assets/img/header-img.svg'
import { useEffect, useState } from "react"
import TrackVisibility from "react-on-screen"
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
} from "react-router-dom";



const Banner = () => {
    const toRotate = ["React Developer", "Web Developer", "Node.js Developer"]

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const period = 2000

    const [delta, setDelta] = useState(300 - Math.random() * 100)

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => { clearInterval(ticker) }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <span className="tagline">Welcome to my Portfolio</span>
                                        <h1>{`Hi! I'm Shailendra`} <span className="txt-rotate" dataperiod="1000" data-rotate='[ "React Developer", "Web Developer", "Node.js Developer" ]'><span className="wrap">{text}</span></span></h1>

                                        <p>Experienced in building dynamic and responsive web applications using React, Node.js, and JavaScript. Successfully delivered several live projects in previous roles, showcasing a strong ability to create scalable solutions. Passionate about coding and problem-solving, I'm now seeking a remote role as a React or Web Developer to bring my expertise to a new team.</p>
                                        <HashLink to='#connect'>
                                            <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                                        </HashLink>
                                    </div>}
                            </TrackVisibility>
                        </Col>

                        <Col xs={12} md={6} xl={7}>
                            <img src={headerImage} alt="Header Img" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    )
}

export default Banner