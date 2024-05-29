import { Grid, Paper } from '@mui/material';
import React from 'react';
import { FormContainer, SelectElement } from 'react-hook-form-mui';
import { Toaster } from 'react-hot-toast';
import { Typography, CssBaseline, Divider, Stack } from '@mui/material'
import { TextFieldElement } from 'react-hook-form-mui';
import Button from '@mui/material/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Classes(props) {
  return (
    <FormContainer
      defaultValues={{ year: '' }}
      onSuccess={data => props.postRequest('/Year', data)}
    >
      <CssBaseline />
      <Grid container
        sx={{
          margin: '0%  20%',
          boxShadow: 5,
          width: '60%',
          height: '80vh',
          borderRadius: 3,
          background: 'var(--bg-color)',
          padding: 4,
          color: 'var(--color)'
          // '&:hover': {
          //   bgcolor: 'primary.dark',
          // },
        }}
      >


        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
          <Typography style={{ color: 'var(--desc-color)', widht: '100%', margin: '0% 10%', }} variant="h5" noWrap>
            Please insert the records for the Classes Resource.
          </Typography>

        </Grid>
        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
          <TextFieldElement
            sx={{
              margin: '0% 15%',
              width: '70%',
              border: '1px solid var(--desc-color)',
              borderRadius: '5px',
              input: {
                color: 'var(--desc-color)',
                "&::placeholder": {
                  color: 'var(--desc-color)',  // <----- Add this.
                  opacity: 1,
                },
                '&:active': {
                  color: 'var(--desc-color)',
                },
              },
              label: { color: 'var(--desc-color)' },
            }}
            name="Class" label="Please Enter Your Name in here"
            required
          />
        </Grid>
        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
          {/* <Stack sx={{ margin: '3% 35%' , width:'10%'}} /> */}
          <SelectElement
            sx={{
              margin: '0% 15%',
              width: '70%',
              border: '1px solid var(--desc-color)',
              borderRadius: '5px',
              input: {
                color: 'var(--desc-color)',
                "&::placeholder": {
                  color: 'var(--desc-color)',  // <----- Add this.
                  opacity: 1,
                },
                '&:active': {
                  color: 'var(--desc-color)',
                },
              },
              label: { color: 'var(--desc-color)' },
            }}
            label="Teacher"
            name="teacher-id"
            //  id="wgtmsr" style="width: 150px;"
            options={[
              {
                id: '1',
                label: ''
              },
              {
                id: '2',
                label: ''
              }
            ]}
            required
          //   margin='10% 3%'
          //   padding='10% 3%'
          />
        </Grid>
        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>



          <Stack  />
          <SelectElement
            label="Batch"
            name="batch-id"
            sx={{
              margin: '0% 15%',
              width: '70%',
              border: '1px solid var(--desc-color)',
              borderRadius: '5px',
              input: {
                color: 'var(--desc-color)',
                "&::placeholder": {
                  color: 'var(--desc-color)',  // <----- Add this.
                  opacity: 1,
                },
                '&:active': {
                  color: 'var(--desc-color)',
                },
              },
              label: { color: 'var(--desc-color)' },
            }}
            options={[
              {
                id: '1',
                label: ''
              },
              {
                id: '2',
                label: ''
              }

            ]}
            required
          // fullWidth
          // margin='10% 3%'
          />


        </Grid>

        <Grid item lg={12} xl={12} xs={12} sm={12} md={12}>
          <Stack sx={{ margin: '3% 35%', width: '30%' }} direction="row" spacing={2}>
            <Button type="submit" variant="outlined" sx={{ fontSize: '22px' }} color="success">
              <AddCircleOutlineIcon sx={{ marginRight: '2%' }} />
              Add
            </Button>
            <Button variant="outlined" color="error">
              <CancelIcon sx={{ marginRight: '2%' }} />
              Cancel
            </Button>
          </Stack>
        </Grid>

      </Grid>
      <Toaster />

    </FormContainer>
  )

}
export default Classes;
