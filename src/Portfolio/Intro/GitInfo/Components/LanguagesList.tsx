import { List, ListItem, Typography } from '@mui/material';
import { BsFillCircleFill as IcoCircle } from 'react-icons/bs';
import { ILanguagesUsage } from '../../../api/types';

interface LanguagesListProps {
  languages: ILanguagesUsage[] | undefined;
  isCaption?: boolean;
}

export default function LanguagesList({ languages, isCaption }: LanguagesListProps) {
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
}
