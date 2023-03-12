import { Box, CssBaseline, Typography } from '@mui/material';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
  const error = useRouteError();
  let errMsg;
  if (isRouteErrorResponse(error)) {
    errMsg = error.error?.message;
    if (error.status === 404 && errMsg) {
      errMsg = `Sorry, but I didn't create page ${errMsg?.slice(errMsg?.search('"'))}.`;
    }
  }
  return (
    <CssBaseline>
      <Box
        sx={{
          height: 'calc(100vh - 40px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          m: '20px',
          rowGap: '20px',
        }}>
        <Typography component="h1" variant="h1" sx={{ fontSize: { xs: '20px', md: '40px' } }}>
          {errMsg || 'I did not foresee this error :('}
        </Typography>
        <picture>
          <source media="(max-width:900px)" srcSet="images/error-mobile.gif" />
          <img src="images/error.gif" alt="Flowers" />
        </picture>
      </Box>
    </CssBaseline>
  );
}
