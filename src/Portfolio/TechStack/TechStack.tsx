import { Box, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import stackList from './TechList';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  tabIdx: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, tabIdx, index } = props;
  return (
    <Box
      sx={{
        display: `${tabIdx === index ? 'flex' : 'none'}`,
        width: '70%',
        textAlign: 'start',
        mx: 'auto',
        justifyContent: 'center',
      }}>
      {children}
    </Box>
  );
}

export default function Stack() {
  const [tabIdx, setTabIdx] = useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIdx(newValue);
  };

  return (
    <Box component="section" sx={{ textAlign: 'center' }}>
      <Typography component="h1" variant="h5">
        Stack
      </Typography>
      <Box
        sx={{ display: 'flex', alignItems: 'center', columnGap: '5%', justifyContent: 'center' }}>
        <Tabs value={tabIdx} onChange={handleChange}>
          {stackList.map((el) => (
            <Tab
              key={el.label}
              icon={el.icon}
              iconPosition="start"
              label={el.label}
              sx={{ textTransform: 'none', py: 0, minHeight: '60px' }}
            />
          ))}
        </Tabs>
      </Box>
      {stackList.map((el, idx) => (
        <TabPanel key={el.label} tabIdx={tabIdx} index={idx} aria-label={el.aria}>
          {el.text}
        </TabPanel>
      ))}
    </Box>
  );
}
