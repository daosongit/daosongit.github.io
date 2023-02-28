import { Box, Link, List, ListItem, Typography } from '@mui/material';
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
      <List disablePadding sx={{ display: 'flex', columnGap: '20px' }}>
        {languages?.map((el) => (
          <ListItem key={el.name} disablePadding sx={{ width: 'auto' }}>
            <IcoCircle size={10} color={el.color} />
            <Typography sx={{ ml: '5px' }}>{el.name}</Typography>
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
    <>
      <Typography component="span" fontSize="1.2rem">
        Pinned
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
          border: '1px solid grey',
          width: '50%',
          p: '10px 15px',
          borderRadius: '5px',
          mt: '10px',
        }}>
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
      </Box>
      <Box sx={{ m: '20px 0 10px' }}>
        {gitData?.totalContribution} contributions in the last year
      </Box>
      <Box
        component="img"
        src="https://ghchart.rshah.org/daosongit"
        alt="Github charts"
        sx={{ border: '1px solid grey', p: '10px 15px', borderRadius: '5px' }}
      />
      <Typography sx={{ m: '20px 0 10px' }}>Languages usage for the all time</Typography>
      <LanguagesList languages={gitData?.languagesUsage} />
      <List
        disablePadding
        sx={{ display: 'flex', width: '100%', height: '7px', borderRadius: '100px' }}>
        {gitData?.languagesUsage.map((el) => (
          <ListItem
            key={el.name}
            disablePadding
            sx={{ width: `${el.usage}%`, bgcolor: el.color }}
          />
        ))}
      </List>
    </>
  );
}
