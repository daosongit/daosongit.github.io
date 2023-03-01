import { Box, Container, Divider, Typography } from '@mui/material';
import AboutMe from './Intro/AboutMe';
import Header from './Header';
import GitInfo from './Intro/GitInfo';
import Stack from './TechStack/TechStack';
import { TASKBAR_HEIGHT } from '../Root/TaskBar/TaskBar';
import FirstSteps from './FirstSteps/FirstSteps';

export default function Portfolio() {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: '20px', color: '#e2e0e0', minHeight: `calc(100vh - ${TASKBAR_HEIGHT})` }}>
      <Header />
      {/* <Divider sx={{ mb: '30px' }} /> */}
      <Box component="section" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <AboutMe />
        <GitInfo />
      </Box>
      <Divider sx={{ my: '30px' }} />
      <Stack />
      <Divider sx={{ my: '30px' }} />
      <FirstSteps />
    </Container>
  );
}
