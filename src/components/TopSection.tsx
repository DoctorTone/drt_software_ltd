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
      <Typography variant="h5" sx={{ mt: 3, color: "orange" }}>
        Would you like to see your data in a whole new dimension?
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        I'm passionate about 3D and how it can transform your data.
      </Typography>
    </Container>
  );
};
export default TopSection;
