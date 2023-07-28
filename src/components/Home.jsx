import React, { useState } from "react";
import "./home.css";
import Building1 from "../assets/Component 38.png";
import { PlayCircleFilled } from "@mui/icons-material";
import { styled } from "@mui/system";
import Modal from "react-modal";

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
      <div className="home-container">
        <div className="home-left-container">
          <h1>Best Place in The World To Build Your Startup</h1>
          <div className="home-right-content1">
          <img src={Building1} alt="" onClick={openVideoModal} />
        </div>
          <p>
            Co Create Labs is a game-changer in the startup ecosystem. It
            enables access to a global platform that brings together the best
            and brightest entrepreneurs, investors, mentors, and philanthropic
            organizations in an integrated ecosystem.
          </p>
          <div className="left-btn-conatainer">
            {/* <button className="bg-blue-500 text-white rounded-full p-3">
              Start Growing
            </button> */}
            <button
              type="button"
              class="btn btn-primary text-dark rounded-pill w-36 p-3"
            >
              Start Growing
            </button>

            {/* <button
              className="lfbtn text-white rounded-full p-3"
              onClick={openVideoModal}
            >
              {" "}
              
              Who Are We
            </button> */}
            <button
              type="button"
              class="btn btn-primary text-dark rounded-pill w-36 p-3"
              onClick={openVideoModal}
            >
              Who Are We
            </button>

            {/* <PlayCircleFilled sx={{ width: 40, height: 30 }} /> */}
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
          </div>
        </div>
        <div className="home-right-content cursor-pointer">
          <img src={Building1} alt="" onClick={openVideoModal} />
        </div>
      </div>
    </>
  );
};

export default Home;
