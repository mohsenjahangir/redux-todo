import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ProductList } from './ProductList';
import { ProductAdd } from './ProductAdd';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Main() {
  return (
    <Box sx={{ flexGrow: 1 }} marginTop='12px'>
      <Grid container spacing={1} columns={16}>
        <Grid item xs={8}>
          <Item><ProductAdd/></Item>
        </Grid>
        <Grid item xs={8}>
          <Item><ProductList/></Item>
        </Grid>
      </Grid>
    </Box>
  );
}