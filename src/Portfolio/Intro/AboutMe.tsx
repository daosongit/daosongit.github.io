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
          mb: '20px',
        }}
      />
      <Typography sx={{ maxWidth: '300px' }}>
        Hi, I'm Ivan Kulai - React developer. I'm a self-motivated person who is always eager to
        learn new things and take on new challenges. With my passion for programming, I am
        constantly striving to improve my skills and develop innovative solutions. I am adaptable,
        quick to learn and always looking for opportunities to grow as a developer.
      </Typography>
    </Box>
  );
}
