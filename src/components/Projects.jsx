import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// import projImg1 from "../assets/img/project-img1.png";
import projImg1 from "../assets/img/aadwan-p.png";
import projImg2 from "../assets/img/mapillary-p.png";
import projImg3 from "../assets/img/user-management.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Aadwan.in",
            description: "A complete website solution for Aadwan Foundation, developed using React and Node.js, featuring dynamic content management and seamless integration with PhonePe for donations.",
            imgUrl: projImg1,
            url: "https://aadwan.in/"
        },
        {
            title: "Code Nexus",
            description: "A Backend system that compiles code across multiple languages by processing base64-encoded code strings. The platform leverages Docker to create isolated environments for each language, ensuring secure and efficient code execution. Future enhancements include integrating Kubernetes for container orchestration, Redis for caching, and NGINX for load balancing.",
            imgUrl: projImg2,
            url: ""
        },
        {
            title: "Users Management",
            description: "A React web applications that fetches user's list from api and list in table, and can sort filter search and also can open profile to see full details",
            imgUrl: projImg3,
            url: "https://shailendra-vi.github.io/users/"
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
