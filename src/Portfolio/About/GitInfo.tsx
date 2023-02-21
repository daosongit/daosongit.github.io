import { Box, Chip, Link, List, ListItem, Typography } from '@mui/material';
import { BsFillCircleFill as IcoCircle } from 'react-icons/bs';
import { BiBookBookmark as IcoPinned } from 'react-icons/bi';

export default function GitInfo() {
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
          <Link> daosongit.github.io</Link>
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
        <List disablePadding sx={{ display: 'flex' }}>
          <ListItem disablePadding sx={{ mr: '10px', width: 'auto' }}>
            <IcoCircle size={10} color="#3178c6" />
            <Typography sx={{ ml: '5px' }}>typescript</Typography>
          </ListItem>
        </List>
      </Box>
      <Box sx={{ m: '20px 0 10px' }}>157 contributions in the last year</Box>
      <Box
        component="img"
        src="https://ghchart.rshah.org/daosongit"
        alt="Github chart"
        sx={{ border: '1px solid grey', p: '10px 15px', borderRadius: '5px' }}
      />
    </>
  );
}
