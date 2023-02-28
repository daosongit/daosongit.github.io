import { Button, styled, SxProps, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

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
  return (
    <AppButton sx={{ ...sx }}>
      <NavLink to={link}>
        {children}
        <Typography component="span" variant="body1" noWrap>
          {title}
        </Typography>
      </NavLink>
    </AppButton>
  );
}
