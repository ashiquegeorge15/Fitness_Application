import React from 'react';
import { Stack } from '@mui/material';
import '../App.css';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <div className="spinner"></div>
  </Stack>
);

export default Loader;
