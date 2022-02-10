import React from 'react';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';



const footer = () => {
  return (
    <footer>
      <Grid sx={{ mb: 5, mt: 5, ml: 2, background: 'lightgray' }} container spacing={2}>
        <Grid sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
          item md={3}>
          <Box sx={{ width: '30%' }} component='img'
            src='images/payment/paypal.png'
          />
        </Grid>
        <Grid sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
          item md={3}>
          <Box sx={{ width: '30%' }} component='img'
            src='images/payment/paykeeper.png'
          />
        </Grid>
        <Grid sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
          item md={3}>
          <Box sx={{ width: '30%' }} component='img'
            src='images/payment/visa.png'
          />
        </Grid>
        <Grid sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
          item md={3}>
          <Box sx={{ width: '30%' }} component='img'
            src='images/payment/googlePay.png'
          />
        </Grid>
        <Grid sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
          item md={3}>
          <Box sx={{ width: '30%' }} component='img'
            src='images/payment/yandex.png'
          />
        </Grid>
        <Grid sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
          item md={3}>
          <Box sx={{ width: '30%' }} component='img'
            src='images/payment/maestro.png'
          />
        </Grid>
        <Grid sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
          item md={3}>
          <Box sx={{ width: '30%' }} component='img'
            src='images/payment/ruble.png'
          />
        </Grid>
        <Grid sx={{
          display: 'flex',
          flexDirection: {
            xs: 'column',
            lg: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}
          item md={3}>
          <Box sx={{ width: '30%' }} component='img'
            src='images/payment/wester union.png'
          />
        </Grid>
      </Grid>

    </footer>
  )
}

export default footer
