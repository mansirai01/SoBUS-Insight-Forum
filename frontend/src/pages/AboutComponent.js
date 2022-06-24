import { Box, Grid } from "@material-ui/core";

const AboutComponent = () => {  
    return (
    <div >
    <Grid container spacing={2}>
    <Grid item xs={12} md={6}>
    <center>
       <Box m={2} pt={3}>
            <h1 className="text-center TopLine">What we do for you</h1>
       </Box>
       <Box m={2} pt={2}>
            <p className="">As a committed changemaker, you already have a passion for impact.</p>
        </Box>
        <Box m={2} pt={2}>
            <p>Now to take your social startup idea from zero to scale requires you to identify and engage effectively with the right technical experts and business mentors, impact investors and partners on the one hand, and with key stakeholders like the government, corporates, NGOs, academic institutions and civil society on the other.</p>
        </Box>
        <Box m={2} pt={2}>
            <p >Sobus Platform is your partner to build that ecosystem.</p>
        </Box>
        <h2>Faster. Better. Globally.</h2>
        <Box m={2} pt={1}>
            <p >You can further leverage our extended network for grassroots reach, robust infrastructure and critical market linkages.</p>
        </Box>
    </center>
</Grid>
<Grid item xs={12} md={6}>
<center>
    {/* <Box m={2} pt={2}>
<h2>We work across sectors.</h2>
</Box>
    <Box m={2} pt={2}>
<p>We take an integrated approach aligned with the UN SDGs.<br/>
And we enable it all with the most appropriate technology.</p>
</Box> */}
<Box m={2} pt={8}>
    <img src="https://sobusinsight.org/wp-content/themes/sobus/images/diagram.png" alt="About SoBUS" />
</Box>
</center>
</Grid>
</Grid>
</div>
        )
  }
  
  export default AboutComponent;