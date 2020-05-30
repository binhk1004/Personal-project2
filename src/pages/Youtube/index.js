import React, {useState, useEffect} from "react";
import styled from 'styled-components'
import {appActions} from "../../redux/actionCreators";
import {useSelector} from "react-redux";
import YoutubeVideo from "../../components/YoutubeVideo";
import Search from "../../components/Search";

function Youtube(props) {

  const {} = props;

  const state = useSelector(state => state);
  console.log('@@ state', state)

  useEffect(()=>{
      appActions.youtubeSearch({
          key:'AIzaSyDhkSzaIHhqyPv0cahVvb5WqqoPTHqaiaU',
          part:'id, snippet',
          type:'video',
          maxResults:50,
          q:'트와이스'
      })

  },[])
    if (!state.app.youtubeVideos){
        return 'loading....'
    }
    const videos = state.app.youtubeVideos.items

  return (
      <Container>
          <Search/>
          <div className="grid">
              <div className="grid-row">
                  {videos.map((video, i) => (
                          <div key={i} className='grid-col'>
                              <YoutubeVideo   video={video}/>
                          </div>
                      ))
                  }
              </div>
          </div>

      </Container>
  )

}

const Container = styled.div`
 
`;

export default Youtube;