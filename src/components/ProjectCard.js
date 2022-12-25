import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gotoUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />

        <div className="proj-txtx">
          {/* <h4 >{title}</h4> */}
          <h4>
            <a href={gotoUrl}>{title}</a>
          </h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}