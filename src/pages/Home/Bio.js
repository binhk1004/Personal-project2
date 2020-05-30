import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {ContentContainer} from "../../components/layout/Layout.Styled";
import {FaFacebookSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

function Bio(props) {

    const {} = props;

    return (
        <Container>
            <ContentContainer>
                <BioContainer>
                    <div className="text">
                        <h2>About Me</h2>
                        <p>Passionate designer & developer who loves simplicity in things and crafts beautiful user interfaces with love.</p>
                        <div className="links">
                            <a href="">
                                <FaFacebookSquare/>
                            </a>
                            <a href="">
                                <FaLinkedin/>
                            </a>
                            <a href="">
                                <FaGithub/>
                            </a>
                        </div>
                    </div>
                    <div className="photo">
                        <img src="https://www.beingeorge.com/justin/assets/images/avatar.jpg" alt=""/>
                    </div>

                </BioContainer>
            </ContentContainer>
        </Container>
    )

}

const Container = styled.div`
  margin-top: -200px;
  position:relative;
`;

const BioContainer = styled.div`
  align-items: center;
  max-width: 950px;
  background: #ffffff;
  border-radius: 6px;
  padding: 50px;
  display: flex;
  margin: auto;
  .text{
  flex: 5;
      h2{
        font-size: 32px;
        color: #333333;
        font-weight: 500;
        margin-bottom: 30px;
        text-transform:capitalize;
      }
      p{
        font-size: 20px;
        color: #6666 ;
        line-height: 1.6;
        max-width: 90%;
        margin-bottom: 25px;
      }
      .links{
          a{
              margin-right: 15px;
              font-size: 20px;
          }
      }
  }
  .photo{
    flex: 4;
    text-align:center;
    img{
      width: 300px;
      height: 300px;
      border-radius: 50%;
    }
  }

`;

export default Bio;