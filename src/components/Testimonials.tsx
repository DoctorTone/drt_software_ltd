import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import testimonials from "../data/testimonials";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const fadeOutNextTestimonial = () => {
    const elem = document.getElementById("testimonial-text");
    elem!.classList.add("fade");
    const reviewer = document.getElementById("testimonial-reviewer");
    reviewer!.classList.add("fade");
    setTimeout(() => {
      elem!.classList.remove("fade");
      reviewer!.classList.remove("fade");
      if (currentTestimonial === testimonials.length - 1) {
        setCurrentTestimonial(0);
      } else {
        setCurrentTestimonial(currentTestimonial + 1);
      }
    }, 1200);
  };

  const fadeOutPreviousTestimonial = () => {
    const elem = document.getElementById("testimonial-text");
    elem!.classList.add("fade");
    const reviewer = document.getElementById("testimonial-reviewer");
    reviewer!.classList.add("fade");
    setTimeout(() => {
      elem!.classList.remove("fade");
      reviewer!.classList.remove("fade");
      if (currentTestimonial === 0) {
        setCurrentTestimonial(testimonials.length - 1);
      } else {
        setCurrentTestimonial(currentTestimonial - 1);
      }
    }, 1200);
  };

  const previousTestimonial = () => {
    fadeOutPreviousTestimonial();
  };

  const nextTestimonial = () => {
    fadeOutNextTestimonial();
  };

  return (
    <Container
      className="testimonialsHeight"
      sx={{ mt: 15, mb: 15 }}
      id="section3"
    >
      <Grid container>
        <Grid size={1} sx={{ textAlign: "center" }}>
          <ArrowBackIosIcon onClick={previousTestimonial} />
        </Grid>
        <Grid size={10} sx={{ textAlign: "center" }}>
          <Typography variant="h5" color="#386fc7" sx={{ mb: 3 }}>
            Testimonials
          </Typography>
          <Typography variant="h5" id="testimonial-text" sx={{ mb: 2 }}>
            {testimonials[currentTestimonial].text}
          </Typography>
          <Typography variant="h5" color="orange" id="testimonial-reviewer">
            {testimonials[currentTestimonial].reviewer}
          </Typography>
        </Grid>
        <Grid size={1} sx={{ textAlign: "center" }}>
          <ArrowForwardIosIcon onClick={nextTestimonial} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
