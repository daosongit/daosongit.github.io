import { Button, ButtonProps, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

interface AppButtonProps extends ButtonProps {
  title: string;
  link: string;
}
export default function AppButton({ link, title, onClick, sx, children }: AppButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        ...sx,
        width: '90px',
        textTransform: 'none',
        display: 'block',
        color: '#e2e0e0',
        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}>
      <NavLink to={link}>
        {children}
        <Typography component="span" noWrap>
          {title}
        </Typography>
      </NavLink>
    </Button>
  );
}
