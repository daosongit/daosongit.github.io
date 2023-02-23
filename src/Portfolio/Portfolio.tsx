import { Box, Container, Divider, Typography } from '@mui/material';
import AboutMe from './About/AboutMe';
import Header from './About/Header';
import GitInfo from './About/GitInfo';
import Stack from './Stack/Stack';
import { TASKBAR_HEIGHT } from '../Root/TaskBar';
import FirstSteps from './FirstSteps/FirstSteps';
import { AiFillGithub as IcoGitHub } from 'react-icons/ai';

export default function Portfolio() {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: '20px', color: '#e2e0e0', minHeight: `calc(100vh - ${TASKBAR_HEIGHT})` }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', columnGap: '5px' }}>
        <IcoGitHub size={17} />
        <Typography component="span" variant="body2">
          Powered by GitHub Api
        </Typography>
      </Box>
      <Box component="section" sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <AboutMe />
        <div>
          <Header />
          <Divider sx={{ mb: '30px' }} />
          <GitInfo />
        </div>
      </Box>
      <Divider sx={{ my: '30px' }} />
      <Stack />
      <Divider sx={{ my: '30px' }} />
      <FirstSteps />
    </Container>
  );
}
