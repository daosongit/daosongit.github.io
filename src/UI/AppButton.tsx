import { Button, ButtonProps, Typography } from '@mui/material';

interface AppButtonProps extends ButtonProps {
  title: string;
}
export default function AppButton({ title, onClick, sx, children }: AppButtonProps) {
  return (
    <Button
      onClick={onClick}
      sx={{
        ...sx,
        width: '90px',
        textTransform: 'none',
        display: 'block',
        color: '#e2e0e0',
      }}>
      {children}
      <Typography component="span" noWrap>
        {title}
      </Typography>
    </Button>
  );
}
