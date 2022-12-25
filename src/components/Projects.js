import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Website",
      description: "College Project",
      imgUrl: projImg2,
      gotoUrl:"https://www.linkedin.com/posts/sonal-singh-7899ab255_html-css-javascript-activity-7007994718009659392-qwIv?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Website",
      description: "Company Assignment",
      imgUrl: projImg3,
      gotoUrl:"https://patilkaki.sonalsingh14.repl.co/#home"
    },
    {
      title: "ToDo List",
      description: "React Project",
      imgUrl: projImg1,
      gotoUrl:"https://github.com/sonal4102/todos-list.git"
    },
   
  ];
  const projects2 = [
    {
      title: "Registration Form",
      description: "Using React",
      imgUrl: projImg4,
      gotoUrl:"https://github.com/sonal4102/registrationFormreact.git"
    },
    {
      title: "Day-Night Toggle",
      description: "Using Advanced CSS",
      imgUrl: projImg6,
      gotoUrl:"https://www.linkedin.com/posts/sonal-singh-7899ab255_html-css-javascript-activity-7008005352478687232-Po67?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Circular Bar",
      description: "Using HTML & CSS",
      imgUrl: projImg7,
      gotoUrl:"https://www.linkedin.com/posts/sonal-singh-7899ab255_html-css-javascript-activity-7008076824970764288-BVMO?utm_source=share&utm_medium=member_desktop"
    },
    
   
  ];
  const projects3 = [
    {
      title: "Registration Form",
      description: "Using HTML,CSS,JS",
      imgUrl: projImg5,
      gotoUrl:"https://www.linkedin.com/posts/sonal-singh-7899ab255_html-css-javascript-activity-7008002719370145792-KYgI?utm_source=share&utm_medium=member_desktop"
    },
    {
      title: "Calculator",
      description: "JS & CSS",
      imgUrl: projImg8,
      gotoUrl:"https://www.linkedin.com/posts/sonal-singh-7899ab255_project-html-css-activity-7002890405927145472-d5Pn?utm_source=share&utm_medium=member_desktop"
    },
   
    
   
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Projects I had worked on</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                                <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}