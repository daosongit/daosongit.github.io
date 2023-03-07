import { Box, CircularProgress, List, ListItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import fetchGitHubUser from '../../api/github-api';
import { IFetchGitHubUserResponce } from '../../api/types';
import Contribution from './Components/Contribution';
import LanguagesList from './Components/LanguagesList';
import PinnedRepo from './Components/PinnedRepo';

export default function GitInfo() {
  const [gitData, setGitData] = useState<IFetchGitHubUserResponce | null>(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetchGitHubUser();
        setGitData(response);
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  return (
    <div>
      <Typography component="span" fontSize="1.2rem">
        Pinned
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
          border: '1px solid grey',
          minWidth: '50%',
          maxWidth: { lg: 'fit-content' },
          p: '10px 15px',
          borderRadius: '5px',
          mt: '10px',
        }}>
        {gitData ? (
          <PinnedRepo pinned={gitData.pinned} />
        ) : (
          <CircularProgress sx={{ alignSelf: 'center' }} />
        )}
      </Box>
      <Contribution contribution={gitData?.totalContribution} />
      <Typography sx={{ m: '20px 0 10px' }}>Languages usage for the whole time</Typography>
      <LanguagesList languages={gitData?.languagesUsage} />
      <List
        disablePadding
        sx={{ display: 'flex', width: '100%', height: '7px', borderRadius: '100px', mt: '10px' }}>
        {gitData?.languagesUsage.map((el) => (
          <ListItem
            key={el.name}
            disablePadding
            sx={{ width: `${el.usage}%`, bgcolor: el.color }}
          />
        ))}
      </List>
    </div>
  );
}
