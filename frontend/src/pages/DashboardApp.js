import {faker} from '@faker-js/faker';

import { useTheme } from '@mui/material/styles';
// @mui
import { Container, Typography,Box } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// components
import Page from "../premade-components/Page";
import Iconify from '../premade-components/Iconify';
import { CategoryChart } from "./charts/category";

import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';
import { DataChart } from "./charts/data";
// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Data Visualization 
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <AppWidgetSummary title="Female : Male" total="130 : 72" icon={'bx:male-female'} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary title="Students : Faculty" total="175 : 22" color="info" icon={'ic:round-school'} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppWidgetSummary title="Employed : UnEmployed" total=" 93 : 12 " color="warning" icon={'fa6-solid:money-bill-1-wave'} />
          </Grid>
           <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Sector"
              chartLabels={[
                'Health',
                'Education',
                'Agriculture',
                'Energy',
                'Sanitation',
                'Infrastructure',
                'Finance',
                'Tourism',
                'Other'
              ]}
              chartData={[
                
                {
                  name: 'Student',
                  type: 'area',
                  fill: 'gradient',
                  data: [12, 10, 11, 15, 19, 25, 16, 13, 20],
                },
                {
                  name: 'Faculty',
                  type: 'line',
                  fill: 'solid',
                  data: [12, 15, 15, 10, 21, 23, 14, 10, 19],
                },
              ]}
            />
          </Grid> 
          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Categories"
              chartData={[
                { label: 'Sustainable Food & Agriculture', value: 40 },
                { label: 'Some other Sector', value: 34 },
                { label: 'Housing, Infra & Transport', value: 13 },
                { label: 'Culture, Arts & Tourism', value: 9 },
                { label: 'Health & Well-being', value: 5 },
                { label: 'Quality Education & Skilling', value: 2 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="States"
              chartData={[
                { label: 'Maharashtra', value: 20.6 },
                { label: 'Tamil Nadu', value: 68.4 },
                { label: 'Karnataka', value: 7.45 },
                { label: 'Others', value: 3.55},
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Branches"
              chartData={[
                { label: 'Civil', value: 8 },
                { label: 'Mechanical', value: 14 },
                { label: 'EXTC', value: 35 },
                { label: 'Electrical', value: 32 },
                { label: 'Computer', value: 9 },
                { label: 'MBA', value: 35 },
              ]}
            />
          </Grid>
          
        </Grid>
        <Box sx={{marginTop:5,backgroundColor:"white",borderRadius:"30px",padding:4}}>
        <Typography variant="h5">Categories (Female Vs Male)</Typography>
          <CategoryChart />
          </Box>
        <Box sx={{marginTop:5,backgroundColor:"white",borderRadius:"30px",padding:4}}>
        <Typography variant="h5">State (Female Vs Male)</Typography>
        <DataChart />
        </Box>
      </Container>
    </Page>
  );
}
