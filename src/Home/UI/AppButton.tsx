import { Box, Button, styled, SxProps, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAppDispatch } from '../../redux/store';
import { addTab } from '../../redux/tabSlice';

export const AppButton = styled(Button)({
  width: '90px',
  textTransform: 'none',
  display: 'block',
  color: '#e2e0e0',
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
});

interface AppButtonLinkProps {
  title: string;
  link: string;
  sx?: SxProps;
  children?: React.ReactNode;
}
export default function AppButtonLink({ link, title, children, sx }: AppButtonLinkProps) {
  const dispatch = useAppDispatch();
  return (
    <Box component={NavLink} to={link} sx={{ textDecoration: 'none' }}>
      <AppButton sx={{ ...sx }} onClick={() => dispatch(addTab(title))}>
        {children}
        <Typography component="span" variant="body1" noWrap>
          {title}
        </Typography>
      </AppButton>
    </Box>
  );
}
