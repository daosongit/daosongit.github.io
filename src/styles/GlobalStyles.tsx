import { GlobalStyles } from '@mui/material';

export default function GlobalCss() {
  return (
    <GlobalStyles
      styles={{
        '.MuiTypography-root.MuiTypography-inherit.MuiLink-root': {
          textDecoration: 'none',
        },
        '.MuiButtonBase-root.MuiButton-root': { textTransform: 'none' },
        '.MuiList-root.MuiList-padding, .MuiListItem-root.MuiListItem-gutters': {
          padding: 0,
        },
      }}
    />
  );
}
