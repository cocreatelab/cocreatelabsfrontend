import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Typography, Grid } from "@mui/material";
import { PlayCircleFilled } from "@mui/icons-material";
import Building from "../assets/background1.png";
import Building1 from "../assets/Component 38.png";
import { styled } from "@mui/system";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";

const ParentContainerHome = styled("div")`
  background-image: url(${Building});
  background-size: cover;
  background-position: center;
`;

const HomeContainer = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 7.5em;
  overflow: hidden;
`;

const HomeLeftContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: left;
  padding: 4em;
`;

const HomePrimaryHeading = styled("h5")`
  font-family: "Anek Gujarati";
  font-style: normal;
  font-weight: 400;
  width: 90%;
  font-size: 64px;
  line-height: 75px;
  letter-spacing: -0.581818px;
  color: #111111;
  margin-bottom: 40px;
`;

const HomePrimaryText = styled("p")`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: #747474;
`;

const Wrapper = styled("div")`
  display: flex;
  margin-top: 5%;
  gap: 3rem;
  justify-content: flex-start;
  padding: 1%;
`;

const SecondaryButton1 = styled(Button)`
  justify-content: center;
  align-items: center;
  background-color: #0096f6;
  color: white;
  font-family: "DM Sans";
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  height: 60px;
  transition: all 0.3s ease;
`;

const SecondaryButton2 = styled(Button)`
  justify-content: center;
  align-items: center;
  background: rgba(17, 17, 17, 0.08);
  color: black;
  font-family: "DM Sans";
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 2rem;
  border: none;
  cursor: pointer;
  height: 60px;
  transition: all 0.3s ease;
`;

const BuildingImg = styled("img")`
  width: 2890px;
  height: auto;
  cursor: pointer;
`;

const ModalContent = styled("div")`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YouTubeEmbed = styled("iframe")``;

const Home = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  return (
    <>
      <ParentContainerHome>
        <HomeContainer>
          <Fade bottom distance="2%" delay={100} duration={1000}>
            <Grid container spacing={2}>
              <Grid item md={6}>
                <HomeLeftContent>
                  <HomePrimaryHeading>
                    Best Place In The World To Build Your Startup
                  </HomePrimaryHeading>
                  <HomePrimaryText>
                    Co Create Labs is a game-changer in the startup ecosystem.
                    It enables access to a global platform that brings together
                    the best and brightest entrepreneurs, investors, mentors,
                    and philanthropic organizations in an integrated ecosystem.
                  </HomePrimaryText>
                  <Wrapper>
                    <Link to="/">
                      <SecondaryButton1 variant="contained">
                        Start Growing
                      </SecondaryButton1>
                    </Link>
                    <SecondaryButton2
                      variant="contained"
                      onClick={openVideoModal}
                    >
                      <PlayCircleFilled sx={{ width: 50, height: 30 }} />
                      Who are we
                    </SecondaryButton2>
                  </Wrapper>
                </HomeLeftContent>
              </Grid>
              <Grid item md={6}>
                <BuildingImg src={Building1} alt="" onClick={openVideoModal} />
              </Grid>
            </Grid>
          </Fade>
        </HomeContainer>
      </ParentContainerHome>

      <Modal
        isOpen={videoModalOpen}
        onRequestClose={closeVideoModal}
        contentLabel="Video Modal"
        className="w-2/3 outline-none ml-60 bg-transparent align-center h-4/5 mt-40"
      >
        <ModalContent className="w-3/4 ml-40 h-3/4 justify-center">
          <YouTubeEmbed
            src="https://www.youtube.com/embed/raXLsIiOz1w"
            title="Google Drive video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            autoplay
            className="w-full h-full"
          />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
