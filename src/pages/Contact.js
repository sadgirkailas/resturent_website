import React from "react";
import Layout from "../components/Layout/Layout";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import {
  Box,
  Typography,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 10, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod
          voluptates eaque natus dolorum! Quibusdam provident repudiand. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quasi quo
          voluptates eaque dolorum! Nostrum iure natus atque rep. You can contact
          us via phone or email. We are open for any questions and suggestions
          you may have about our restaurant. Feel free to send a message using
          the form below.
        </p>
      </Box>
      <Box sx={{ m:3, width:"600px", ml:10, "@media (max-width:600px)":{
        width:"300px",
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact-table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white", bgcolor: "black" }} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000 (Toll Free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <EmailIcon sx={{ color: "skyblue", pt: 1 }} /> Kailassadgir950@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <PhoneInTalkIcon sx={{ color: "skyblue", pt: 1 }} /> 8010391367
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
