import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';



const footer = () => {
  return (
    <footer>
      <Grid sx={{mb:5, mt:5, ml:2, background:'lightgray'}}  container spacing={2}>
      <Grid item md={3}>
        <Box sx={{ width: '30%' }} component='img'
          src='images/payment/paypal.png'
        />
        </Grid>
        <Grid item md={3}>
        <Box sx={{ width: '30%' }} component='img'
          src='images/payment/paykeeper.png'
        />
        </Grid>
        <Grid item md={3}>
        <Box sx={{ width: '30%' }} component='img'
          src='images/payment/visa.png'
        />
        </Grid>
        <Grid item md={3}>
        <Box sx={{ width: '30%' }} component='img'
          src='images/payment/googlePay.png'
        />
        </Grid>
        <Grid item md={3}>
        <Box sx={{ width: '30%' }} component='img'
          src='images/payment/yandex.png'
        />
        </Grid>
        <Grid item md={3}>
        <Box sx={{ width: '30%' }} component='img'
          src='images/payment/maestro.png'
        />
        </Grid>
        <Grid item md={3}>
        <Box sx={{ width: '30%' }} component='img'
          src='images/payment/ruble.png'
        />
        </Grid>
        <Grid item md={3}>
        <Box sx={{ width: '30%' }} component='img'
          src='images/payment/wester union.png'
        />
        </Grid>
        </Grid>
        
        </footer>
  )
}

export default footer
