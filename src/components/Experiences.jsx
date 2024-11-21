import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp from "../assets/img/color-sharp.png";

const Experiences = () => {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const experiences = [
        {
            role: "React & Node Intern",
            period: "Oct’ 2024 – Present",
            company: "Meta Orange Digital",
            responsibilities: [
                "Developed scalable & reusable React functional components, optimizing performance and enhancing user experience.",
                "Refined and debugged Node.js APIs, ensuring proper functionality and reliability.",
                "Implemented Swagger for API documentation, improving clarity and developer collaboration."
            ]
        },
        {
            role: "Software Developer",
            period: "Jan’ 2024 – Aug’ 2024",
            company: "E-Connect Solutions (GJ - Map Solutions)",
            responsibilities: [
                "Developed React-based web applications across diverse domains, seamlessly integrating ArcGIS JS API for advanced geospatial mapping functionalities.",
                "Enhanced application performance by leveraging React Hooks (useState, useRef, useEffect, useMemo) for efficient state management, lifecycle handling, and memoization.",
                "Designed intuitive UI components using Calcite Design System, aligning visuals with ArcGIS standards for a cohesive user experience.",
                "Implemented Redux for robust state management, enabling efficient data sharing across components.",
                "Built a Node.js backend to process Mapillary datasets, delivering dynamic JSON responses and image rendering within Web Mercator maps."
            ]
        }
    ];

    return (
        <section className='experience' id='experiences'>
            <Container>
                <Row>
                    <Col>
                        <div className='experience-bx'>
                            <h2>Experiences</h2>
                            <p>Below are some of the professional experiences that have shaped my career as a developer. Each role has allowed me to grow and contribute significantly to impactful projects.</p>
                            <Carousel responsive={responsive} infinite={true} className='experience-slider'>
                                {experiences.map((exp, index) => (
                                    <div className="item" key={index}>
                                        <h5>{exp.role}</h5>
                                        <p><strong>{exp.period}</strong></p>
                                        <p><strong>{exp.company}</strong></p>
                                        <ul>
                                            {exp.responsibilities.map((task, idx) => (
                                                <li key={idx}>{task}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} alt='' />
        </section>
    );
}

export default Experiences;
