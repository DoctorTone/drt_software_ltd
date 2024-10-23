import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Testimonials = () => {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 5, mb: 5, color: "#386fc7" }}>
        Testimonials
      </Typography>
      <Grid container>
        <Grid size={2}>
          <ArrowBackIosIcon />
        </Grid>
        <Grid size={8} sx={{ textAlign: "center" }}>
          <Typography variant="h5">Tony was great to work with!</Typography>
        </Grid>
        <Grid size={2}>
          <ArrowForwardIosIcon />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
