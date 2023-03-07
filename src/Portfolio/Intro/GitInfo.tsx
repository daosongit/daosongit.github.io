import { Box, CircularProgress, Link, List, ListItem, Skeleton, Typography } from '@mui/material';
import { BsFillCircleFill as IcoCircle } from 'react-icons/bs';
import { BiBookBookmark as IcoPinned } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import fetchGitHubUser from '../api/github-api';
import { IFetchGitHubUserResponce, ILanguagesUsage } from '../api/types';

interface LanguagesListProps {
  languages: ILanguagesUsage[] | undefined;
  isCaption?: boolean;
}

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
  const LanguagesList = ({ languages, isCaption }: LanguagesListProps) => {
    return (
      <List disablePadding sx={{ display: 'flex', columnGap: '20px', flexWrap: 'wrap' }}>
        {languages?.map((el) => (
          <ListItem key={el.name} disablePadding sx={{ width: { sm: 'auto' } }}>
            <IcoCircle size={10} color={el.color} />
            <Typography component="span" sx={{ ml: '5px' }}>
              {el.name}
            </Typography>
            <Typography
              component="span"
              variant={isCaption ? 'caption' : 'body2'}
              sx={{
                px: '5px',
                color: '#afaeae',
              }}>
              {el.usage.toFixed(1) + '%'}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

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
          <>
            <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
              <IcoPinned />
              <Link href={gitData?.pinned.url} target="_blank">
                {gitData?.pinned.name}
              </Link>
              <Box
                component="span"
                sx={{
                  borderRadius: '14px',
                  px: '5px',
                  fontSize: '13px',
                  border: '1px solid #3f3f3f',
                  color: '#838383',
                }}>
                Public
              </Box>
            </Box>
            <LanguagesList languages={gitData?.pinned.languages} isCaption />
          </>
        ) : (
          <CircularProgress sx={{ alignSelf: 'center' }} />
        )}
      </Box>
      <Box sx={{ m: '20px 0 10px' }}>
        {gitData?.totalContribution || '...'}
        {' contributions in the last year'}
      </Box>
      <Box
        component="img"
        src="https://ghchart.rshah.org/daosongit"
        alt="Github charts"
        sx={{
          width: '100%',
          border: '1px solid grey',
          p: '10px 15px',
          borderRadius: '5px',
        }}
      />
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
