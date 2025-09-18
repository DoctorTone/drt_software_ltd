import { Box, Container, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Button from "@mui/material/Button";
import useStore from "../state/store";

const FAQ = () => {
  const setShowContactModal = useStore((state) => state.setShowContactModal);

  const openContactModal = () => {
    setShowContactModal(true);
  };

  return (
    <Container id="section4">
      <Box
        sx={{
          mt: 5,
          background: "#404040",
          borderRadius: "20px",
          padding: "30px",
        }}
      >
        <Typography variant="h5" color="orange" textAlign="center">
          Frequently Asked Questions
        </Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <PlayArrowIcon color="warning" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                What are the benefits of 3D data visualisation?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cdcdcd" }}>
                Due to all the additional space, you can see the patterns and
                trends in the data more clearly and it's easier to explore and
                interact. For multi-dimensional data, or data with lots of
                attributes, this will be the most efficient way to see it. You
                also have the benefits of stunning 3D graphics to showcase your
                visualisations in a whole new light.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <PlayArrowIcon color="warning" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                What sort of data can I visualise?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cdcdcd" }}>
                Anything! 😊 I have visualised data from many different fields
                and sectors and have yet to see a dataset that I couldn't
                visualise!
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <PlayArrowIcon color="warning" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                Does the data have to be 3D or multi-dimensional?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cdcdcd" }}>
                Not at all. The data can be in many differing formats. You can
                extract the fields that you are interested in and visualise
                those, or make multiple visualisations from different subsets,
                or even visualise everything and filter out just what you want.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <PlayArrowIcon color="warning" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                Can I still visualise my 2D data?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cdcdcd" }}>
                Absolutely. 3D offers an alternative way to see any type of
                data. Traditional methods, such as bar charts, dashboards, etc.,
                are perfectly acceptable ways to view your data, however, 3D can
                display it in a different light, it may be more appealing for
                presentations or pitches.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <PlayArrowIcon color="warning" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                I always thought that gratuitous use of 3D was discouraged?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cdcdcd" }}>
                It used to be. For static images, showing data in 3D can make it
                difficult to see the relationships. This isn't the case in an
                interactive graphical app as you can fully explore the dataset
                and view it from all perspectives.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <PlayArrowIcon color="warning" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                Whay don't you just make an app that I can drop my data into?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cdcdcd" }}>
                I'm definitely working on that, but you may still need a custom
                data visualisation service that can display your data in exactly
                the way that you want to fit your particular context.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <PlayArrowIcon color="warning" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ fontStyle: "italic" }}>
                OK I'm convinced, what do I do now?
              </Typography>
              <Typography variant="body1" sx={{ color: "#cdcdcd" }}>
                Great! Get in touch and we can discuss your data and how you
                want to see it in glorious 3D!
              </Typography>
              <Typography variant="body1" sx={{ color: "#cdcdcd", mt: 1 }}>
                Either email, send me a message 👉{" "}
                <Button onClick={openContactModal} variant="contained">
                  Contact
                </Button>{" "}
                or call 👉{" "}
                <Button
                  href="https://calendly.com/tony-mdjh/30min"
                  target="_blank"
                  rel="noreferrer noopener"
                  variant="contained"
                >
                  Book a call
                </Button>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default FAQ;
