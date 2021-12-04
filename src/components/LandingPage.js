import React, { useEffect } from 'react'
import styled from 'styled-components'
import 'aos/dist/aos.css'
import Aos from 'aos'

const LandingPage = () => {
    useEffect(() => {
        Aos.init({ duration: 700 })
    })
    return (
        <>
        <Container >
              <Iframe src="Video/tmnconcert.mp4?autoplay=1"> </Iframe>
              <Div></Div>
          </Container>
        </>
    )
}


const Container = styled.div`
height: 100vh;
/* background:; */
background-repeat: no-repeat;
object-fit:cover;
width: 100%;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
video {height:100%; width:100%}
`
const Img = styled.img`
height: 45vh ;
width: 38vw;
position: relative;
`
const Iframe = styled.iframe`
position: absolute;
height: 100%;
width: 100%;
border: none;
`
const Div = styled.div`
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index:111;
    background-color:rgba(0,0,0,0.7) ;
    }

`

export default LandingPage
