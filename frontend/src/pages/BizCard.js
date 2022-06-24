import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Chip, Stack, Button } from "@mui/material";

const images = [
  "https://images.unsplash.com/photo-1595351298020-038700609878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1444858291040-58f756a3bdd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80",
  "https://images.unsplash.com/photo-1571204829887-3b8d69e4094d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "https://images.unsplash.com/photo-1608363907208-cb00a6577e61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
];

const BizCard = ({ biz }) => {
  const final = images[Math.floor(Math.random() * images.length)];

  console.log(biz.tags.split(","));

  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{`${biz.name} - by ${biz.owner}`}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="row" spacing={2}>
            {biz.tags?.split(",").map((x) => {
              return <Chip color="primary" label={x} />;
            })}
          </Stack>

          <br />
          <Typography>{biz.description}</Typography>
          <Stack direction="row" spacing={2}>
            <Button href={biz.socialProfile} variant="outlined" fullWidth>
              Visit Socials!
            </Button>
            <Button href={biz.contact} variant="outlined" fullWidth>
              Contact Them!
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button
              href={biz.locationUrl}
              variant="outlined"
              color="secondary"
              fullWidth
            >
              See on Map
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BizCard;
