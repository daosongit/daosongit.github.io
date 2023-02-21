import { Box, Tab, Tabs, Typography } from '@mui/material';
import {
  SiJavascript as IcoJS,
  SiReact as IcoReact,
  SiTypescript as IcoTypescript,
  SiGit as IcoGit,
  SiMaterialui as IcoMUI,
  SiRedux as IcoRedux,
  SiSass as IcoSass,
  SiHtml5 as IcoHTML,
} from 'react-icons/si';
import { useState } from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index } = props;
  return (
    <Box sx={{ display: `${value === index ? 'block' : 'none'}` }}>
      <Typography>{children}</Typography>
    </Box>
  );
}

export default function Stack() {
  const [value, setValue] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const stackList = [
    { label: 'JavaScript', icon: <IcoJS size={20} color="#efd81d" /> },
    { label: 'React', icon: <IcoReact size={20} color="#61dafb" /> },
    { label: 'Typescript', icon: <IcoTypescript size={20} color="#0076c6" /> },
    { label: 'Redux', icon: <IcoRedux size={20} color="#7248b6" /> },
    { label: 'MUI', icon: <IcoMUI size={20} color="#007bf7" /> },
    { label: 'Sass', icon: <IcoSass size={20} color="#c76395" /> },
    { label: 'HTML', icon: <IcoHTML size={20} color="#ec7531" /> },
    { label: 'Git', icon: <IcoGit size={20} color="#e84d31" /> },
  ];
  return (
    <Box component="section">
      <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '5%' }}>
        <Typography component="h1" variant="h5">
          Stack {'>'}
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          {stackList.map((el) => (
            <Tab
              icon={el.icon}
              iconPosition="start"
              label={el.label}
              sx={{ textTransform: 'none', py: 0, minHeight: '60px' }}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} aria-label="JS knowledges">
        Item One
      </TabPanel>
      <TabPanel value={value} index={1} aria-label="React knowledges">
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2} aria-label="Typescript knowledges">
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} aria-label="Redux knowledges">
        Item Three
      </TabPanel>
      <TabPanel value={value} index={4} aria-label="MUI knowledges">
        Item Three
      </TabPanel>
      <TabPanel value={value} index={5} aria-label="Sass knowledges">
        Item Three
      </TabPanel>
      <TabPanel value={value} index={6} aria-label="HTML knowledges">
        Item Three
      </TabPanel>
      <TabPanel value={value} index={7} aria-label="Git knowledges">
        Item Three
      </TabPanel>
    </Box>
  );
}
