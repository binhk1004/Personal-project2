import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ShadowLine, TitleArea} from "../../components/layout/Layout.Styled";
import ProgressBar from "react-bootstrap/ProgressBar";




function Resume(props) {

  const {} = props;

  return (
      <Container>
          <TitleArea>
              <p>MY RESUME</p>
              <h2>
                  MY EXPERTISES
                  <ShadowLine mt={30}/>
              </h2>
          </TitleArea>
          <ResumeContainer>
              <div>
                  <div className="experience">
                      <div className="title">
                          <h3>My Experience</h3>
                      </div>
                      <div className="card">
                          <h5>Senior Architect</h5>
                          <h6>2015 - Present | Google</h6>
                          <p>Collaborate with creative and development teams on the execution of ideas.</p>
                      </div>
                      <div className="card">
                          <h5>Senior Architect</h5>
                          <h6>2015 - Present | Google</h6>
                          <p>Collaborate with creative and development teams on the execution of ideas.</p>
                      </div>
                  </div>
                  <div className="education">
                      <div className="title">
                          <h3>My Education</h3>
                      </div>
                      <div className="card">
                          <h5>Senior Architect</h5>
                          <h6>2015 - Present | Google</h6>
                          <p>Collaborate with creative and development teams on the execution of ideas.</p>
                      </div>
                      <div className="card">
                          <h5>Senior Architect</h5>
                          <h6>2015 - Present | Google</h6>
                          <p>Collaborate with creative and development teams on the execution of ideas.</p>
                      </div>
                  </div>
                  <div className="codingskills">
                      <div className="title">
                          <h3>Coding Skills</h3>
                      </div>
                      <div className="skills">
                          <div className="skill">
                              <h6>HTML</h6>
                              <div className="progress-bar">
                                  <ProgressBar animated now={60} label={`${60}%`}></ProgressBar>
                              </div>
                          </div>
                          <div className="skill">
                              <h6>SCSS</h6>
                              <div className="progress-bar">
                                  <ProgressBar animated now={40} label={`${40}%`}></ProgressBar>
                              </div>
                          </div>
                          <div className="skill">
                              <h6>Javascript</h6>
                              <div className="progress-bar">
                                  <ProgressBar animated now={60} label={`${60}%`}></ProgressBar>
                              </div>
                          </div>
                          <div className="skill">
                              <h6>React</h6>
                              <div className="progress-bar">
                                  <ProgressBar animated now={30} label={`${30}%`}></ProgressBar>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </ResumeContainer>

      </Container>
  )

}

const Container = styled.div`

`;

const ResumeContainer = styled.div`
  display: flex;
  justify-content: center;
  .title{
    font-size: 20px;
    margin: 16px 0 20px; 
  }
  .experience{
    float: left;
    padding: 0 15px;
  }
  .education{
  display: inline-block;
  padding: 0 15px;
  }
  .card{
    align-items: flex-start;
    background:#ffffff;
    height: 177px;
    width: 100%;
    margin: 24px 0 0;
    padding: 24px;
    overflow: hidden;
    transition: 0.4s;
    &:hover{
      box-shadow:  1px 2px 30px rgba(0,0,0,0.2);
   }
   }
   .skills{
    background:#ffffff;
    height: 310px;
    width: 100%;
    margin-top: 24px;
    margin-bottom: 80px; 
    padding: 24px;
    overflow: hidden;
    transition: 0.4s;
    &:hover{
      box-shadow:  1px 2px 30px rgba(0,0,0,0.2);
   }
   .skill{
      .progress-bar{
        width: 100%;
        height: 15px;
        text-align: center;
        //background:#fd735a;;
       }
      }
   }
    h5{
    font-size: 18px;
    }
    h6{
      //width: 30%;
      font-size: 12px;
      margin: 16px 0;
      padding: 3px 4.8px;
      background:#fd735a!important;
      display: inline-block!important;
      border-radius: 5px;
      //text-align: center;
    }
    p{
      font-size: 16px;
    }
  }
  
  
`;


export default Resume;