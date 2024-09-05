import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p>
                                I am a passionate web developer with a strong foundation in React, Node.js, and JavaScript. I specialize in creating dynamic and responsive web applications, delivering efficient and scalable solutions for various projects. My skill set includes front-end development, back-end integration, and a keen eye for detail in UI/UX design.
                            </p>

                            <Carousel responsive={responsive} infinite={true} className='skill-slider' >
                                <div className="item">
                                    <img src={meter1} alt='' />
                                    <h5>React Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt='' />
                                    <h5>Node.js Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt='' />
                                    <h5>JavaScript Programming</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt='' />
                                    <h5>Python</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='' />
        </section>
    )
}

export default Skills;
