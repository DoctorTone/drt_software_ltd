import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const WorkIntro = () => {
  return (
    <Container>
      <Divider sx={{ backgroundColor: "orange" }} variant="middle" />
      <Typography variant="h6" sx={{ mt: 3 }} id="projects_page">
        Don't just take my word for it, here are some examples of 3D
        transformations.
      </Typography>
    </Container>
  );
};

export default WorkIntro;
