import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const FAQ = () => {
  return (
    <div id="faqs" className="py-[20vh] px-[10vw]  text-4xl bg-white">
      <h3 className="py-5 font-Coiny">FAQ</h3>
      <div>
        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
              }}
            >
              What skills and knowledge will I gain from the graphic design and
              web development training courses?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              With our two-month graphic design and four-month web development
              programs, you'll acquire a comprehensive skill set tailored to
              each discipline. Our personalized training focuses on your
              individual strengths and areas for improvement.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Are the courses suitable for beginners, or is prior experience
              required?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              Whether you're a beginner or have some experience, our courses
              cater to all levels. The duration is structured to cover
              foundational concepts and advanced topics, ensuring a well-rounded
              understanding within the specified timeframe.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              How long does it typically take to complete the graphic design or
              web development training programs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              The graphic design training spans two months, while the web
              development program extends to four months. The onsite and online
              training formats allow flexibility, accommodating your schedule
              and learning pace.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              What software and tools will I need to participate in the courses?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              We'll guide you through the necessary software and tools during
              the respective training periods, ensuring you have the right
              resources for effective learning.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Where is your office located, and can I enroll online?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              We are located at No 13 Ibom Layout, Off Okoragbor Street along
              Marian Road, Calabar. Those outside Calabar can also enroll or
              learn online if they are comfortable doing so. We will assign you
              a mentor who will guide you through the process.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Are there any prerequisites for enrolling in the graphic design
              and web development courses?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              No, there are no specific prerequisites for enrolling in our
              personalized two-month graphic design and four-month web
              development training. However, it is recommended that students
              registering for online courses have access to a laptop or computer
              and a stable internet connection to facilitate a seamless and
              productive learning experience.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Is there any one-on-one mentorship available after completing the
              program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              Yes, we offer one-on-one mentorship sessions post-completion to
              provide guidance as you transition into applying your skills
              professionally.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Do I receive a certification upon completing the graphic design
              and web development training programs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              Yes, upon successful completion of the programs, you will be
              awarded a certification to validate your skills and knowledge in
              graphic design or web development, enhancing your professional
              portfolio.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          sx={{
            marginBottom: "20px",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              borderBottom: "1px solid black",
            }}
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              What are your payment structures?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              The payment structure is installment-based, 70% up front, and 30%
              after a month.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
