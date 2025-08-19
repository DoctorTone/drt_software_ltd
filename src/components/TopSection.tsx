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
        I'm passionate about all things 3D. I help businesses unlock the full
        potential of their data through 3D visualisations.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Instead of flat spreadsheets and dashboards, I create interactive 3D
        experiences that make complex information easy to understand, explore,
        and act on.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>
        Whether you need to reveal hidden insights, engage your audience, or
        communicate performance in real time, I can make your data impossible to
        ignore.
      </Typography>
      <Typography variant="h6" sx={{ mt: 2, fontStyle: "italic" }}>
        Data doesn’t have to be flat — let's make it 3D.
      </Typography>
    </Container>
  );
};
export default TopSection;
