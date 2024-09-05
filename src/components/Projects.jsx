import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import projImg1 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/aadwan-p.png";
import projImg2 from "../assets/img/mapillary-p.png";
import projImg3 from "../assets/img/secureshare-p.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Aadwan.in",
            description: "A complete website solution for Aadwan Foundation, developed using React and Node.js, featuring dynamic content management and seamless integration with PhonePe for donations.",
            imgUrl: projImg1
        },
        {
            title: "Mapillary",
            description: "A Node.js backend for GJ Map Solutions, enabling efficient data processing and management for geospatial data, built to handle large-scale datasets with high performance.",
            imgUrl: projImg2
        },
        {
            title: "SecureShare",
            description: "A secure file encryption platform designed to safeguard sensitive information. Built with a focus on encryption protocols and user-friendly file sharing.",
            imgUrl: projImg3
        }
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>

                                    <p>Here are some of the projects I've worked on, ranging from full-stack web development to backend solutions and secure file-sharing platforms. Each project showcases my ability to deliver high-quality, scalable, and secure applications.</p>

                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    );
};
