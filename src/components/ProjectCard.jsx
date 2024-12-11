import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, url }) => {
    return (
        <Col size={12} sm={6} md={4}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <div className="proj-imgbx">
                    <img src={imgUrl} className="project-image" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}

export default ProjectCard