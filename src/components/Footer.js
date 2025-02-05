import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" py="24px">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px">
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} My Company. All rights reserved.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Link href="#" color="inherit" underline="hover">
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Terms of Service
        </Link>
        <Link href="#" color="inherit" underline="hover">
          Contact Us
        </Link>
      </Stack>
    </Stack>
  </Box>
);

export default Footer;