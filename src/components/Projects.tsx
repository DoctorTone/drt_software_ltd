import Container from "@mui/material/Container";
import { VIDEOS } from "../state/Config";
import VideoDemo from "./VideoDemo";

const Projects = () => {
  return (
    <Container id="section1">
      {VIDEOS.map((video) => (
        <VideoDemo vidRecord={video} />
      ))}
    </Container>
  );
};

export default Projects;
