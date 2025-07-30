import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";

const TopSection = () => {
  return (
    <Container className="plus-jakarta-sans-main" sx={{ mt: 15, mb: 5 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 5, md: 12 }}>
          <img src="./images/tony.png" alt="profile" className="rounded" />
        </Grid>
        <Grid size={{ xs: 12, sm: 7, md: 12 }}>
          <Typography variant="h2" sx={{ mt: 3 }}>
            Hi, I'm Tony
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h6" sx={{ mt: 3 }}>
        I'm passionate about all things 3D, especially how 3D data visualisation
        can unlock new insights, engagement and value for your business. Data is
        everywhere, but too often we experience it in two dimensions -
        spreadsheets, dashboards, reports - yet we live in a three-dimensional
        world.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, fontStyle: "italic" }}>
        That's where I come in.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        I specialise in turning complex data into interactive 3D experiences
        that people understand. Whether it's scientific data, real-time
        performance metrics, or historical trends, I build highly interactive
        visual interfaces.
      </Typography>
    </Container>
  );
};
export default TopSection;
