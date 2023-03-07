import { Box, Link } from '@mui/material';
import { BiBookBookmark as IcoPinned } from 'react-icons/bi';
import { IPinned } from '../../../api/types';
import LanguagesList from './LanguagesList';

export default function PinnedRepo({ pinned }: { pinned: IPinned }) {
  const { name, url, languages } = pinned;
  return (
    <>
      <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'center' }}>
        <IcoPinned />
        <Link href={url} target="_blank">
          {name}
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
      <LanguagesList languages={languages} isCaption />
    </>
  );
}
