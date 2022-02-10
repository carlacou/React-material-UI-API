import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'


const DesktopCategories = () => {
  return (
    <Grid
      sx={{ border: '1px solid #e0e0e0', mt: 8, mb: 4 }}
      justify="space-between"
      alignItems="center"
      container
      spacing={2}
    >
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/babysitter.png' />
        <Typography>Babysitter</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/barley.png' />
        <Typography>barley</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/cinema.png' />
        <Typography>Movies</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/concert.png' />
        <Typography>Music</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/fitness.png' />
        <Typography>Sports</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/hanger.png' />
        <Typography>Clothings</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/nuclear.png' />
        <Typography>Power</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/observation.png' />
        <Typography>Travel</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/ship.png' />
        <Typography>ship</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/pets.png' />
        <Typography>pets</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/powerstation.png' />
        <Typography>Eletrical</Typography>
      </Grid>
      <Grid sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
        item md={1}
      >
        <Box
          sx={{ width: "25px" }}
          component='img'
          src='images/categories/restaraunt.png' />
        <Typography>Kitchen</Typography>
      </Grid>
    </Grid>
  )
}

export default DesktopCategories
