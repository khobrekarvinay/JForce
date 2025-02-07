import React from 'react';
import { Typography, Box, Stack, TextField, styled, ListItem, List, ListItemIcon, ListItemText, Button, Link, MenuItem, FormControl, Select, CardContent, TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';

function SecurityContent() {

  const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      height: '40px',
      fontSize: '0.875rem',
      fontFamily: '"Public Sans", sans-serif',
      backgroundColor: '#fff',
      '& input': {
        padding: '8px 14px',
        '&::placeholder': {
          fontSize: '0.875rem',
          opacity: 0.5,
          fontFamily: '"Public Sans", sans-serif',
        }
      },
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderWidth: '1px',
      },
      '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.87)',
        borderWidth: '1px',
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(115, 103, 240)',
        borderWidth: '2px',
      }
    }
  });

  const InputLabel = styled(Typography)({
    fontSize: '0.875rem',
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: '6px',
    fontFamily: '"Public Sans", sans-serif',
  });

  const StyledSelect = styled(Select)(({ theme }) => ({
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
      borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgba(0, 0, 0, 0.87)',
      borderWidth: '1px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(115, 103, 240)',
      borderWidth: '2px',
    },
  }));

  return (
    <>
      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>

        <Typography variant='h5' sx={{ color: '#444050', paddingBottom: '30px' }}>Change Password</Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ paddingBottom: '30px' }}>
          <Stack spacing={1} flex={1}>
            <InputLabel>Current Password</InputLabel>
            <StyledTextField fullWidth type='password' placeholder=".................." variant="outlined" />
          </Stack>
          <Stack spacing={1} flex={1}>
            {/* <InputLabel>Zip Code</InputLabel>
            <StyledTextField fullWidth placeholder="Enter zip code" variant="outlined" /> */}
          </Stack>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ paddingBottom: '20px' }}>
          <Stack spacing={1} flex={1}>
            <InputLabel>New Password</InputLabel>
            <StyledTextField fullWidth type='password' placeholder="................" variant="outlined" />
          </Stack>
          <Stack spacing={1} flex={1}>
            <InputLabel>Confirm New Password</InputLabel>
            <StyledTextField fullWidth type='password' placeholder="................" variant="outlined" />
          </Stack>
        </Stack>

        <Stack sx={{ color: '#6D6B77' }}>
          <List sx={{ fontSize: '17px', paddingLeft: '0' }}>
            <ListItem >Password Requirements:</ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: '0', paddingRight: '10px' }}>
                <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText primary="Minimum 8 characters long - the more, the better" sx={{ paddingLeft: '0px' }} />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: '0', paddingRight: '10px' }}>
                <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText primary="At least one lowercase character" sx={{ paddingLeft: '0px' }} />
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ minWidth: '0', paddingRight: '10px' }}>
                <FiberManualRecordIcon sx={{ fontSize: 8 }} />
              </ListItemIcon>
              <ListItemText primary="At least one number, symbol, or whitespace character" sx={{ paddingLeft: '0px' }} />
            </ListItem>
          </List>
        </Stack>

        <Stack direction="row" gap={2} >
          <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }}>Save changes</Button>
          <Button sx={{ textTransform: "none", backgroundColor: '#EBEBED', color: '#808390' }}>Cancel</Button>
        </Stack>

      </Box>

      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>

        <Typography variant='h6' sx={{ marginBottom: '24px', color: '#444050' }}>Two-steps verification</Typography>
        <Typography variant='h6' sx={{ marginBottom: '16px', color: '#6D6B77' }}>Two factor authentication is not enabled yet.</Typography>
        <Typography variant='body1' sx={{ color: '#6D6B77' }}>Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</Typography>
        <Typography sx={{ marginBottom: '24px' }}><Link href="#" sx={{ ml: 'auto', color: 'rgb(115, 103, 240)', textDecoration: 'none', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif' }} >
          Learn more.
        </Link></Typography>
        <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }}>Enable Two-Factor Authentication</Button>

      </Box>

      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>
        <Typography variant='h5' sx={{ color: '#444050', paddingBottom: '30px' }}>Create an API key</Typography>
        <Box display='flex' flexDirection={{ xs: "column", sm: "row" }} alignItems="center" justifyContent="space-between">
          <Box flex={1} sx={{ marginBottom: { xs: '20px', sm: 0 } }}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Stack spacing={1} flex={1}>
                <InputLabel>Choose the API key type you want to create</InputLabel>
                <FormControl fullWidth>
                  <StyledSelect
                    displayEmpty
                    sx={{
                      height: '40px',
                      fontSize: '0.875rem',
                      fontFamily: '"Public Sans", sans-serif',
                      width: { xs: '100%', sm: '40%' },
                      marginBottom: '20px'
                    }}
                  >
                    <MenuItem value="">Choose Key Type</MenuItem>
                  </StyledSelect>
                </FormControl>
              </Stack>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Stack spacing={1} flex={1}>
                <InputLabel>Name the API key</InputLabel>
                <StyledTextField
                  fullWidth
                  placeholder="Server Key 1"
                  variant="outlined"
                  sx={{
                    width: { xs: '100%', sm: '40%' }
                  }}
                />
              </Stack>
            </Stack>
            <Stack direction="row" sx={{ marginTop: '20px' }} >
              <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0', width: { xs: '100%', sm: '40%' } }}>Create Key</Button>
            </Stack>
          </Box>
          <Box
            component="img"
            sx={{
              mx: 'auto',
              height: { xs: 200, sm: 228 },
              width: { xs: 170, sm: 202 },
              maxHeight: { xs: 200, md: 228 },
              maxWidth: { xs: 170, md: 202 },
            }}
            alt="Girl with laptop."
            src="/girl.png"
          />
        </Box>
      </Box>

      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>

        <Typography variant='h5' sx={{ color: '#444050', paddingLeft:'15px' }}>Recent Devices</Typography>

        <TableContainer component='table'>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Browser</TableCell>
                <TableCell align="left">Device</TableCell>
                <TableCell align="left">Location</TableCell>
                <TableCell align="left">Recent Activities</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><WindowOutlinedIcon/>Chrome on Windows</TableCell>
                <TableCell align="left">HP Spectre 360</TableCell>
                <TableCell align="left">Switzerland</TableCell>
                <TableCell align="left">10, July 2021 20:07</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><PhoneIphoneOutlinedIcon />Chrome on iPhone</TableCell>
                <TableCell align="left">iPhone 12x</TableCell>
                <TableCell align="left">Australia</TableCell>
                <TableCell align="left">13, July 2021 10:10</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><AndroidOutlinedIcon />Chrome on Android</TableCell>
                <TableCell align="left">Oneplus 9 Pro</TableCell>
                <TableCell align="left">Dubai</TableCell>
                <TableCell align="left">14, July 2021 15:15</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><LaptopMacOutlinedIcon />Chrome on MacOS</TableCell>
                <TableCell align="left">Apple iMac</TableCell>
                <TableCell align="left">India</TableCell>
                <TableCell align="left">16, July 2021 16:17</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><WindowOutlinedIcon />Chrome on Windows</TableCell>
                <TableCell align="left">HP Spectre 360</TableCell>
                <TableCell align="left">Switzerland</TableCell>
                <TableCell align="left">20, July 2021 21:01</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><AndroidOutlinedIcon />Chrome on Android</TableCell>
                <TableCell align="left">Oneplus 9 Pro</TableCell>
                <TableCell align="left">Dubai</TableCell>
                <TableCell align="left">21, July 2021 12:22</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

      </Box>

    </>
  );
}

export default SecurityContent;