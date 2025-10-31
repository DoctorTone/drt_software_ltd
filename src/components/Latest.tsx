import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Latest = () => {
  return (
    <Container className="plus-jakarta-sans-main" sx={{ mt: 1, mb: 1 }}>
      <Typography variant="h4" sx={{ mt: 3, color: "orange" }}>
        Happy Halloween!
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Check out the latest Halloween demo below.
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Don't get too scared...🎃
      </Typography>
      <Divider sx={{ backgroundColor: "orange", mt: 3 }} />
    </Container>
  );
};

export default Latest;
