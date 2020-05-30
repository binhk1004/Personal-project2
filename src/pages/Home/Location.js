import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {ShadowLine, TitleArea} from "../../components/layout/Layout.Styled";
import MapContent from "./Map";
import{FaMapMarkedAlt} from "react-icons/fa";
import {FaMobileAlt} from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";

function Location(props) {

  const {} = props;

  return (
      <Container>
          <TitleArea>
              <p>SAY HELLO</p>
              <h2>
                  CONTACT
                  <ShadowLine mt={30}/>
              </h2>
          </TitleArea>
          <ContactContainer>
              {/*<div>*/}
              {/*    <div className="title">*/}
              {/*        <h5>My Location</h5>*/}
              {/*    </div>*/}
              {/*    <div id="Mymap">*/}
              {/*        <MapContent/>*/}
              {/*    </div>*/}
              {/*</div>*/}
              <div className="contact">
                  <div className="title">
                      <h5>Get in Touch</h5>
                  </div>
                  <div className="contact-box">
                      <div className="outline">
                      <div className="boxs">
                          <div className="links">
                          <a href="">
                            <FaMapMarkedAlt/>
                          </a>
                          </div>
                          <h4>경기도 용인시 기흥구 구갈동</h4>
                          <h3>Address</h3>
                      </div>
                      </div>
                      <div className="outline">
                      <div className="boxs">
                          <div className="links">
                          <a href="">
                            <FaMobileAlt/>
                          </a>
                          </div>
                          <h4>010-7310-8057</h4>
                          <h3>Call Us</h3>
                      </div>
                      </div>
                      <div className="outline">
                      <div className="boxs">
                          <div className="links">
                          <a href="">
                            <FaEnvelope/>
                          </a>
                          </div>
                          <h4>binhk1004@gmail.com</h4>
                          <h3>Email Us</h3>
                      </div>
                      </div>
                  </div>
              </div>
          </ContactContainer>
      </Container>
  )

}
const ContactContainer = styled.div`
  display: flex;
  justify-content: center;

    
 .contact{
    
    
      h5{
      margin: 0 0 24px;
      padding: 48px 0 0;
      font-size: 20px;
      }
        .contact-box{
          display: flex;
          width: 100%;
          
          
         .outline{
          padding: 0 15px;
          display: flex;
         
         .boxs{
            text-align: center;
            background:#ffffff;
            padding: 24px;
            overflow: hidden;
            transition: 0.4s;
            &:hover{
              box-shadow:  1px 2px 30px rgba(0,0,0,0.2);
                  }
            .links{
              font-size: 35px;
              margin: 0 0 24px;
              }
            h4{
            font-size: 18px;
            }
            h3{
            font-size: 14px;
            font-weight: bold;
            margin: 4px 0 0;
        }
}
}
}
}

`;
const Container = styled.div`





`;



export default Location;