import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FadeInSection from '../../util/FadeInSection';
import theme from '../../util/ResponsiveFont';
import IslandReservation from '../../imgs/IslandReservation.jpg';
import StockSplunk from '../../imgs/StockSplunk.jpg';
import MugtomeBazar from '../../imgs/MugtomeBazar.jpg';
import ChooseMyMeal from '../../imgs/ChooseMyMeal.jpg'
import HouseConnect from '../../imgs/HouseConnect.jpg'
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import LaunchIcon from '@material-ui/icons/Launch';
import GitHubIcon from '@material-ui/icons/GitHub';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { ProjectTabs } from '../ProjectTabs';
import { ThemeProvider } from '@mui/material/styles';

export default function ProjectBox() {
  return (
    <Paper elevation={0} square={true} sx={{ padding: 3, background: "#161b25", color: "white" }}>
      <hr />
      <FadeInSection>
        <ThemeProvider theme={theme}>
          <Typography variant="h4" component="div" mt={5} sx={{ fontFamily: ["Segoe UI", "Tahoma"], fontWeight: 'medium' }}>
            Projects
          </Typography>
          <hr style={{ marginBottom: "3rem", width: "10%", borderColor: "#27ae60" }} />

          <Card sx={{ background: "#21262d", maxWidth: 820, margin: 'auto', marginBottom: 5, border: '1px solid #30363d' }}>
            <CardMedia
              component="img"
              height={400}
              image={HouseConnect}
              alt="House Connect"
            />
            <Stack direction="row" alignItems="center" ml={3} mr={3} gap={0}>
              <CollectionsBookmarkIcon style={{ color: 'gray' }} />
              <Typography variant="h5" component="div" sx={{
                marginBlock: 3, color: 'white', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginRight: 'auto'
              }}>
                <span style={{ marginLeft: '1rem', marginRight: 'auto' }}>HouseConnect</span>
              </Typography>
              <IconButton href='https://github.com/Wilson2k/Property-Management-App' rel="noopener noreferrer" target="_blank" sx={{ color: 'gray', "&:hover": { color: "white" } }}>
                <GitHubIcon />
              </IconButton>
            </Stack>
            <ProjectTabs
              about={'A web app for property managers and owners. Helps manage properties, tenants, leases, and maintenance tickets. Currently under development.'}
              tools={'React, Bootstrap, Express, PostgreSQL, Redis, Prisma, Node, Docker'} />
            <Box sx={{ p: 2, background: '#161b25', color: 'gray', borderTop: '1px solid #30363d', display: 'flex' }}>
              <Chip icon={<span className="dot" style={{ backgroundColor: '#1B99D4' }} />} label="TypeScript" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'orange' }} />} label="HTML" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'purple' }} />} label="CSS" sx={{ color: 'gray' }} />
            </Box>
          </Card>

          <Card sx={{ background: "#21262d", maxWidth: 820, margin: 'auto', marginBottom: 5, border: '1px solid #30363d' }}>
            <CardMedia
              component="img"
              height={400}
              image={StockSplunk}
              alt="Stock Splunk"
            />
            <Stack direction="row" alignItems="center" ml={3} mr={3} gap={0}>
              <CollectionsBookmarkIcon style={{ color: 'gray' }} />
              <Typography variant="h5" component="div" sx={{
                marginBlock: 3, color: 'white', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginRight: 'auto'
              }}>
                <span style={{ marginLeft: '1rem', marginRight: 'auto' }}>StockSplunk</span>
              </Typography>
              <IconButton href='https://github.com/Wilson2k/stocksplunkpub' rel="noopener noreferrer" target="_blank" sx={{ color: 'gray', "&:hover": { color: "white" } }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href='https://stocksplunk.com/' rel="noopener noreferrer" target="_blank" sx={{ color: 'gray', "&:hover": { color: "white" } }}>
                <LaunchIcon />
              </IconButton>
            </Stack>
            <ProjectTabs
              about={'A website for simulating long term stock investments. Integrates AlphaVantage API for semi-live stock data.'}
              tools={'Angular, Express, MongoDB, Redis, Node, Bootstrap, Docker'} />
            <Box sx={{ p: 2, background: '#161b25', color: 'gray', borderTop: '1px solid #30363d', display: 'flex' }}>
              <Chip icon={<span className="dot" style={{ backgroundColor: 'yellow' }} />} label="JavaScript" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: '#1B99D4' }} />} label="TypeScript" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'orange' }} />} label="HTML" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'purple' }} />} label="CSS" sx={{ color: 'gray' }} />
            </Box>
          </Card>

          <Card sx={{ background: "#21262d", maxWidth: 820, margin: 'auto', marginBottom: 5, border: '1px solid #30363d' }}>
            <CardMedia
              component="img"
              height={400}
              image={ChooseMyMeal}
              alt="Choose My Meal"
            />
            <Stack direction="row" alignItems="center" ml={3} mr={3} gap={0}>
              <CollectionsBookmarkIcon style={{ color: 'gray' }} />
              <Typography variant="h5" component="div" sx={{
                marginBlock: 3, color: 'white', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginRight: 'auto'
              }}>
                <span style={{ marginLeft: '1rem', marginRight: 'auto' }}>Choose My Meal</span>
              </Typography>
              <IconButton href='https://github.com/Wilson2k/choosemymeal' rel="noopener noreferrer" target="_blank" sx={{ color: 'gray', "&:hover": { color: "white" } }}>
                <GitHubIcon />
              </IconButton>
              <IconButton href='https://foodapp-wilson2k.vercel.app' rel="noopener noreferrer" target="_blank" sx={{ color: 'gray', "&:hover": { color: "white" } }}>
                <LaunchIcon />
              </IconButton>
            </Stack>
            <ProjectTabs
              about={`A simple web app that helps randomly pick a place to eat by integrating Yelp's Fusion API. Great for when your friends are being indecisive on where to eat.`}
              tools={'React, NextJS, Material UI'} />
            <Box sx={{ p: 2, background: '#161b25', color: 'gray', borderTop: '1px solid #30363d', display: 'flex' }}>
              <Chip icon={<span className="dot" style={{ backgroundColor: 'yellow' }} />} label="JavaScript" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'orange' }} />} label="HTML" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'purple' }} />} label="CSS" sx={{ color: 'gray' }} />
            </Box>
          </Card>

          <Card sx={{ background: "#21262d", maxWidth: 820, margin: 'auto', marginBottom: 5, border: '1px solid #30363d' }}>
            <CardMedia
              component="img"
              height={400}
              image={IslandReservation}
              alt="Island Reservation"
            />
            <Stack direction="row" alignItems="center" ml={3} mr={3} gap={0}>
              <CollectionsBookmarkIcon style={{ color: 'gray' }} />
              <Typography variant="h5" component="div" sx={{
                marginBlock: 3, color: 'white', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginRight: 'auto'
              }}>
                <span style={{ marginLeft: '1rem', marginRight: 'auto' }}>Island Reservation</span>
              </Typography>
            </Stack>
            <ProjectTabs
              about={`A website for those looking to rent out their islands, and book other people's islands. Integrates Google Maps API to display locations of islands available for reservation.`}
              tools={'React, Express, MongoDB, Node, Bootstrap'} />
            <Box sx={{ p: 2, background: '#161b25', color: 'gray', borderTop: '1px solid #30363d', display: 'flex' }}>
              <Chip icon={<span className="dot" style={{ backgroundColor: 'yellow' }} />} label="JavaScript" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'orange' }} />} label="HTML" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'purple' }} />} label="CSS" sx={{ color: 'gray' }} />
            </Box>
          </Card>

          <Card sx={{ background: "#21262d", maxWidth: 820, margin: 'auto', marginBottom: 5, border: '1px solid #30363d' }}>
            <CardMedia
              component="img"
              height={400}
              image={MugtomeBazar}
              alt="Mugtome Bazaar"
            />
            <Stack direction="row" alignItems="center" ml={3} mr={3} gap={0}>
              <CollectionsBookmarkIcon style={{ color: 'gray' }} />
              <Typography variant="h5" component="div" sx={{
                marginBlock: 3, color: 'white', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginRight: 'auto'
              }}>
                <span style={{ marginLeft: '1rem', marginRight: 'auto' }}>Mugtome Bazaar</span>
              </Typography>
            </Stack>
            <ProjectTabs
              about={`A clone of Facebook marketplace with JWT token authentication.`}
              tools={'React, PostgreSQL, Express, Node, Docker'} />
            <Box sx={{ p: 2, background: '#161b25', color: 'gray', borderTop: '1px solid #30363d', display: 'flex' }}>
              <Chip icon={<span className="dot" style={{ backgroundColor: 'yellow' }} />} label="JavaScript" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'orange' }} />} label="HTML" sx={{ color: 'gray' }} />
              <Chip icon={<span className="dot" style={{ backgroundColor: 'purple' }} />} label="CSS" sx={{ color: 'gray' }} />
            </Box>
          </Card>

        </ThemeProvider>
      </FadeInSection>
    </Paper>
  );
}