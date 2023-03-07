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
        mx: 'auto',
        justifyContent: 'center',
        height: '420px',
        overflowY: 'auto',
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
    <>
      <Typography component="h1" variant="h5" sx={{ textAlign: 'center', mb: '20px' }}>
        Stack
      </Typography>
      <Box component="section" sx={{ display: 'flex', columnGap: '5%' }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
          <Tabs
            value={tabIdx}
            onChange={handleChange}
            orientation="vertical"
            textColor="secondary"
            indicatorColor="secondary"
            sx={{ display: 'flex' }}>
            {stackList.map((el) => (
              <Tab
                key={el.label}
                icon={el.icon}
                iconPosition="start"
                label={el.label}
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  py: 0,
                  minHeight: '60px',
                }}
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
    </>
  );
}
