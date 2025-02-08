import { Box, Button, Link, Stack, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box sx={{ width: '100%', bgcolor: "white", pt: 4, pb: 4 }}>
      <Box display='flex' sx={{ textAlign: "center", mt: 1, justifyContent: 'space-between', mx: 'auto', maxWidth: 1200 }}>
        <Stack direction='column'>
          <Typography variant="body1"> © 2025, made with ❤️ &nbsp;
            <Link href="#" sx={{ color: 'rgb(115, 103, 240)', textDecoration: 'none', fontSize: '1rem', fontFamily: '"Public Sans", sans-serif' }} >
              Pixinvent
            </Link>
          </Typography>
        </Stack>
        <Box display='flex'>
          <Link href="#" sx={{ ml: 'auto', color: 'rgb(115, 103, 240)', textDecoration: 'none', fontSize: '1rem', fontFamily: '"Public Sans", sans-serif' }} >
            License &nbsp;&nbsp;
          </Link>
          <Link href="#" sx={{ ml: 'auto', color: 'rgb(115, 103, 240)', textDecoration: 'none', fontSize: '1rem', fontFamily: '"Public Sans", sans-serif' }} >
            MoreThemes &nbsp;&nbsp;
          </Link>
          <Link href="#" sx={{ ml: 'auto', color: 'rgb(115, 103, 240)', textDecoration: 'none', fontSize: '1rem', fontFamily: '"Public Sans", sans-serif' }} >
            Documentation &nbsp;&nbsp;
          </Link>
          <Link href="#" sx={{ ml: 'auto', color: 'rgb(115, 103, 240)', textDecoration: 'none', fontSize: '1rem', fontFamily: '"Public Sans", sans-serif' }} >
            Support
          </Link>
        </Box>
      </Box>
      <Button variant="contained" color="error" sx={{ position: "fixed", bottom: 48, right: 25, boxShadow: '0 1px 20px 1px #ff4c51 !important', backgroundColor: "#FF4C51", color:'white', textTransform:'none' }} >
        Buy Now
      </Button>
    </Box>
  );
}