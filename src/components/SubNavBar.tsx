import AppBar from "@mui/material/AppBar";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const SubNavBar = () => {
  return (
    <Container>
      <Box component="div">
        <AppBar
          className="sticky"
          elevation={0}
          sx={{
            padding: "5px",
            backgroundColor: "#2b2b2b",
            borderRadius: "10px",
            color: "#fff",
            width: { xs: "90%", sm: "70%", md: "90%", lg: "75%" },
            left: { xs: "5%", sm: "17.5%", md: "5%", lg: "12.5%" },
          }}
        >
          <Toolbar>
            <Box
              component="div"
              sx={{
                paddingTop: "5px",
                paddingBottom: "5px",
                display: { xs: "flex", md: "flex" },
                alignItems: "center",
                gap: "30px",
              }}
            >
              <Img src="./images/drtLogo.png" />
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="a"
                  href="/#"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </Typography>
              </Box>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="a"
                  href="mailto:enquiries@drt-software.com"
                  sx={{ textDecoration: "none", color: "orange" }}
                >
                  enquiries@drt-software.com
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default SubNavBar;
