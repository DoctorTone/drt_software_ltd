import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box, Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Img = styled("img")({
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  return (
    <Container>
      <Box component="div">
        <AppBar
          className="sticky"
          elevation={0}
          sx={{
            backgroundColor: "#252525",
            borderRadius: "10px",
            color: "#fff",
            width: { xs: "90%", sm: "70%", md: "90%", lg: "75%" },
            left: { xs: "5%", sm: "17.5%", md: "5%", lg: "12.5%" },
            marginTop: "10px",
          }}
        >
          <Toolbar>
            <Box component="div" sx={{ display: { xs: "flex", md: "none" } }}>
              <Img src="./images/drtLogo.png" />
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="warning"
                sx={{ ml: 1 }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                color="white"
              >
                <MenuItem
                  component="a"
                  href="#demos_page"
                  onClick={handleClose}
                >
                  Examples
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#services_page"
                  onClick={handleClose}
                >
                  Services
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#about_page"
                  onClick={handleClose}
                >
                  About
                </MenuItem>
                <MenuItem
                  component="a"
                  href="#contact_page"
                  onClick={handleClose}
                >
                  Contact
                </MenuItem>
                <MenuItem
                  component="a"
                  href="https://drt-software.com/Portfolio/"
                  target="_blank"
                  onClick={handleClose}
                >
                  Portfolio
                </MenuItem>
              </Menu>
            </Box>
            <Box
              component="div"
              sx={{
                paddingTop: "5px",
                paddingBottom: "5px",
                display: { xs: "none", md: "flex" },
                flexGrow: 1,
                alignItems: "center",
                gap: "50px",
              }}
            >
              <Img src="./images/drtLogo.png" />
              <Box
                component="div"
                sx={{
                  display: "flex",
                  gap: "50px",
                  flexGrow: 1,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="h6"
                  component="a"
                  href="#demos_page"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="#services_page"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  Services
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="#about_page"
                  sx={{ textDecoration: "none", color: "white" }}
                >
                  About
                </Typography>
                <Typography
                  variant="h6"
                  component="a"
                  href="#contact_page"
                  sx={{
                    textDecoration: "none",
                    color: "white",
                    border: "2px solid purple",
                    borderRadius: "10px",
                    padding: "5px 7px",
                  }}
                >
                  Work With Me
                </Typography>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </Container>
  );
};

export default NavBar;
