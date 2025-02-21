import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const Latest = () => {
  return (
    <Container className="plus-jakarta-sans-main" sx={{ mt: 1, mb: 1 }}>
      <Typography variant="h3" sx={{ mt: 3, color: "orange" }}>
        Latest News!
      </Typography>
      <Typography variant="h6" sx={{ mt: 3 }}>
        Have you ever struggled with your mental health or know someone who has?
      </Typography>
      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        Then please consider giving to my GoFundMe campaign, it may just help
        someone who is suffering, or make you think about your mental health or
        mindset -{" "}
        <a
          href="https://www.gofundme.com/f/think-mental-building-a-lifeline-for-mental-health-support?lid=6gj43dtwzt8n&utm_source=product&utm_medium=email&utm_campaign=TXN_donation_alert&utm_content=internal"
          target="_blank"
        >
          GoFundMe
        </a>{" "}
        - Thanks!
      </Typography>
      <Divider sx={{ backgroundColor: "orange", mt: 3 }} />
    </Container>
  );
};

export default Latest;
