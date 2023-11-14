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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              What skills and knowledge will I gain from the graphic design and
              web development training courses?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              In our intensive two-month graphic design training and four-month
              web development program, you'll acquire a comprehensive skill set
              tailored to each discipline. The personalized nature of our
              training ensures focused learning on your individual strengths and
              areas of improvement.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
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
        <Accordion variant="subtitle1 ">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              What is the structure of the courses? Are they self-paced, or do
              they follow a fixed schedule?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              The courses maintain a suggested schedule, but the one-on-one
              nature allows for flexibility, adapting to your availability.
              Online sessions facilitate dynamic learning, ensuring you receive
              personalized attention throughout the specified durations.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              What software and tools will I need to participate in the courses?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              We'll guide you through the necessary software and tools during
              the respective training periods, ensuring you have the right
              resources for effective learning within the specified timeframes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Is there any one-on-one mentorship available after completing the
              program?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Yes, we offer one-on-one mentorship sessions post-completion to
              provide guidance as you transition into applying your skills
              professionally.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              How are assessments conducted, and what is the grading or
              certification process?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              Assessments in the two-month graphic design and four-month web
              development training may include personalized projects and
              practical exercises. Certification is awarded upon successful
              completion of the tailored curriculum within the specified
              durations.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Is there any specific hardware or technical requirements for
              enrolling in the training programs?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">
              Basic hardware requirements and technical considerations for
              online training will be discussed at the beginning of each
              program, ensuring a smooth learning experience.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
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
              productive learning experience
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
