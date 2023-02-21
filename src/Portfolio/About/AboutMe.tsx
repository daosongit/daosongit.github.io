import { Box, Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <Box id="About" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        sx={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundImage: 'url(images/avatar.png)',
          backgroundSize: 'cover',
          backgroundPositionY: '5px',
          backgroundPositionX: '6px',
          backgroundRepeat: 'no-repeat',
          border: '1px solid grey',
          display: 'flex',
        }}
      />
      <Typography sx={{ maxWidth: '300px' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam atque aut
        architecto, nemo culpa suscipit numquam, veniam, tempora minus sequi quis quia. Facilis ipsa
        officiis quam, minus molestiae sequi.
      </Typography>
    </Box>
  );
}
