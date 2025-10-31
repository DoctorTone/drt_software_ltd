import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import useStore from "../state/store";

const TopSection = () => {
  gsap.registerPlugin(ScrollToPlugin);
  const setShowContactModal = useStore((state) => state.setShowContactModal);
  const linkStyle = {
    color: "orange",
    cursor: "pointer",
  };

  const openContactModal = () => {
    setShowContactModal(true);
  };

  const animate = () => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: "#section4", offsetY: 100 },
    });
  };

  return (
    <Container className="plus-jakarta-sans-main" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h5" sx={{ mt: 3, color: "orange" }}>
        Would you like to see your data in a whole new dimension?
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        I'm passionate about 3D and how it can transform your data.
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        3D can make complex data simple, the extra dimension can show much more
        information, revealing trends and insights that otherwise wouldn't be
        seen.
      </Typography>
      <Typography variant="h6" sx={{ mt: 1 }}>
        We live in a three-dimensional world, flat reports aren't enough
        anymore. You need to get a deeper understanding.
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Need more convincing? Check out the{" "}
        <span style={linkStyle} onClick={animate}>
          FAQ
        </span>{" "}
        or feel free to get in touch 👉{" "}
        <Button onClick={openContactModal} variant="contained">
          Contact
        </Button>{" "}
        👉{" "}
        <Button
          href="https://calendly.com/tony-mdjh/30min"
          target="_blank"
          rel="noreferrer noopener"
          variant="contained"
        >
          Book a call
        </Button>
      </Typography>
    </Container>
  );
};
export default TopSection;
