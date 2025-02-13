import React, { useCallback, useRef, useState } from 'react';
import { Typography, Box, Stack, TextField, styled, ListItem, List, ListItemIcon, ListItemText, Button, Link, MenuItem, FormControl, Select, InputAdornment, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Paper } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import AndroidOutlinedIcon from '@mui/icons-material/AndroidOutlined';
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';




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
      },
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
    },
  },
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

function SecurityContent() {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const currentPasswordInputRef = useRef(null);
  const newPasswordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const handleChangeCurrentPassword = useCallback((e) => {
    setCurrentPassword(e.target.value);
  }, []);

  const handleChangeNewPassword = useCallback((e) => {
    setNewPassword(e.target.value);
  }, []);

  const handleChangeConfirmPassword = useCallback((e) => {
    setConfirmPassword(e.target.value);
  }, []);

  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
    currentPasswordInputRef.current.type = showCurrentPassword ? 'password' : 'text';
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
    newPasswordInputRef.current.type = showNewPassword ? 'password' : 'text';
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
    confirmPasswordInputRef.current.type = showConfirmPassword ? 'password' : 'text';
  };


  return (
    <>
      {/* change password section */}
      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>
        <Typography variant='h5' sx={{ color: '#444050', paddingBottom: '30px' }}>Change Password</Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ paddingBottom: '30px' }}>
          <Stack spacing={1} flex={1}>
            <InputLabel>Current Password</InputLabel>
            <Stack direction="row" sx={{ position: 'relative' }}>
              <StyledTextField
                key="current-password"
                fullWidth
                type={showCurrentPassword ? 'text' : 'password'}
                placeholder=".................."
                variant="outlined"
                value={currentPassword}
                ref={currentPasswordInputRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleCurrentPasswordVisibility}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showCurrentPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChangeCurrentPassword}
              />
            </Stack>
          </Stack>
          <Stack spacing={1} flex={1}>
            {/* <InputLabel>Zip Code</InputLabel> <StyledTextField fullWidth placeholder="Enter zip code" variant="outlined" /> */}
          </Stack>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ paddingBottom: '20px' }}>
          <Stack spacing={1} flex={1}>
            <InputLabel>New Password</InputLabel>
            <Stack direction="row" sx={{ position: 'relative' }}>
              <StyledTextField
                key="new-password"
                fullWidth
                type={showNewPassword ? 'text' : 'password'}
                placeholder=".................."
                variant="outlined"
                value={newPassword}
                ref={newPasswordInputRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleNewPasswordVisibility}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showNewPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChangeNewPassword}
              />

            </Stack>
          </Stack>
          <Stack spacing={1} flex={1}>
            <InputLabel>Confirm New Password</InputLabel>
            <Stack direction="row" sx={{ position: 'relative' }}>
              <StyledTextField
                key="confirm-password"
                fullWidth
                type={showConfirmPassword ? 'text' : 'password'}
                placeholder=".................."
                variant="outlined"
                value={confirmPassword}
                ref={confirmPasswordInputRef}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={toggleConfirmPasswordVisibility}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onChange={handleChangeConfirmPassword}
              />
            </Stack>
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
      
      {/* verification section */}
      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>

        <Typography variant='h6' sx={{ marginBottom: '24px', color: '#444050' }}>Two-steps verification</Typography>
        <Typography variant='h6' sx={{ marginBottom: '16px', color: '#6D6B77' }}>Two factor authentication is not enabled yet.</Typography>
        <Typography variant='body1' sx={{ color: '#6D6B77' }}>Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</Typography>
        <Typography sx={{ marginBottom: '24px' }}><Link href="#" sx={{ ml: 'auto', color: 'rgb(115, 103, 240)', textDecoration: 'none', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif' }} >
          Learn more.
        </Link></Typography>
        <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }}>Enable Two-Factor Authentication</Button>

      </Box>

      {/* API key Section */}
      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>

        <Typography variant='h5' sx={{ color: '#444050', paddingBottom: '40px' }}>Create an API key</Typography>

        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px", }} >

          <Box sx={{ flex: { md: "0 0 60%", xs: "100%" }, display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px", order: { xs: 1, md: 2 }, }} >
            <Box component="img" sx={{ mx: 'auto', height: { xs: 200, sm: 228 }, width: { xs: 170, sm: 202 }, maxHeight: { xs: 200, md: 228 }, maxWidth: { xs: 170, md: 202 }, }}
              alt="Girl with laptop." src="/girl.png" />
          </Box>

          <Box sx={{ flex: { md: "0 0 40%", xs: "100%" }, display: "flex", flexDirection: "column", gap: "15px", order: { xs: 2, md: 1 }, }} >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Stack spacing={1} flex={1}>
                <InputLabel>Choose the API key type you want to create</InputLabel>
                <FormControl fullWidth>
                  <StyledSelect displayEmpty sx={{ height: '40px', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', marginBottom: '8px' }} >
                    <MenuItem>Choose Key Type</MenuItem>
                  </StyledSelect>
                </FormControl>
              </Stack>
            </Stack>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Stack spacing={1} flex={1}>
                <InputLabel>Name the API key</InputLabel>
                <StyledTextField fullWidth placeholder="Server Key 1" variant="outlined" />
              </Stack>
            </Stack>
            <Stack direction="row" sx={{ marginTop: '8px' }} >
              <Button fullWidth variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }}>Create Key</Button>
            </Stack>
          </Box>

        </Box>

      </Box>

      {/* API key list & access */}
      <Box sx={{ p: 3, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>

        <Typography variant='h5' sx={{ color: '#444050', paddingBottom: '20px' }}>API Key List & Access</Typography>
        <Typography variant='body1' sx={{ color: '#6D6B77', paddingBottom: '20px' }}>
          An API key is a simple encrypted string that identifies an application without any principal. They are useful for accessing public data anonymously, and are used to associate API requests with your project for quota and billing.
        </Typography>

        <Box sx={{ p: 2, mx: "auto", bgcolor: "#F3F2F3", borderRadius: 2, marginBottom: '20px' }}>
          <Box display='flex'>
            <Typography variant='h6' sx={{ color: '#444050' }} >Server Key 1 </Typography>
            <Typography variant='body2' color='primary' sx={{ color: '#7367FO', backgroundColor: '#E9E7FD', borderRadius: '4px', marginLeft: '7px', padding: '6px 6px 0 6px' }} > Full Access</Typography>
          </Box>
          <Typography sx={{ padding: '5px 0px', color: '#6D6B77' }}>
            23eaf7f0-f4f7-495e-8b86-fad3261282ac <ContentCopyOutlinedIcon />
          </Typography>
          <Typography sx={{ color: '#ACAAB1' }}>Created on 28 Apr 2021, 18:20 GTM+4:10</Typography>
        </Box>

        <Box sx={{ p: 2, mx: "auto", bgcolor: "#F3F2F3", borderRadius: 2, marginBottom: '20px' }}>
          <Box display='flex'>
            <Typography variant='h6' sx={{ color: '#444050' }} >Server Key 2 </Typography>
            <Typography variant='body2' color='primary' sx={{ color: '#7367FO', backgroundColor: '#E9E7FD', borderRadius: '4px', marginLeft: '7px', padding: '6px 6px 0 6px' }} > Full Access</Typography>
          </Box>
          <Typography sx={{ padding: '5px 0px', color: '#6D6B77' }}>
            bb98e571-a2e2-4de8-90a9-2e231b5e99 <ContentCopyOutlinedIcon />
          </Typography>
          <Typography sx={{ color: '#ACAAB1' }}>Created on 12 Feb 2021, 10:30 GTM+2:30</Typography>
        </Box>

        <Box sx={{ p: 2, mx: "auto", bgcolor: "#F3F2F3", borderRadius: 2 }}>
          <Box display='flex'>
            <Typography variant='h6' sx={{ color: '#444050' }} >Server Key 3 </Typography>
            <Typography variant='body2' color='primary' sx={{ color: '#7367FO', backgroundColor: '#E9E7FD', borderRadius: '4px', marginLeft: '7px', padding: '6px 6px 0 6px' }} > Full Access</Typography>
          </Box>
          <Typography sx={{ padding: '5px 0px', color: '#6D6B77' }}>
            2e915e59-3105-47f2-8838-6e46bf83b711 <ContentCopyOutlinedIcon />
          </Typography>
          <Typography sx={{ color: '#ACAAB1' }}>Created on 28 Dec 2020, 12:21 GTM+4:10</Typography>
        </Box>
      </Box>

      {/* Recent Devices Section */}
      <Box sx={{ maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>

        <Typography variant='h5' sx={{ color: '#444050', padding: '15px 0px 5px 15px' }}>Recent Devices</Typography>

        <TableContainer component={Paper}>
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
                <TableCell component="th" scope="row"><WindowOutlinedIcon color='primary' />Chrome on Windows</TableCell>
                <TableCell align="left">HP Spectre 360</TableCell>
                <TableCell align="left">Switzerland</TableCell>
                <TableCell align="left">10, July 2021 20:07</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><PhoneIphoneOutlinedIcon color='error' />Chrome on iPhone</TableCell>
                <TableCell align="left">iPhone 12x</TableCell>
                <TableCell align="left">Australia</TableCell>
                <TableCell align="left">13, July 2021 10:10</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><AndroidOutlinedIcon color='success' />Chrome on Android</TableCell>
                <TableCell align="left">Oneplus 9 Pro</TableCell>
                <TableCell align="left">Dubai</TableCell>
                <TableCell align="left">14, July 2021 15:15</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><LaptopMacOutlinedIcon color='secondary' />Chrome on MacOS</TableCell>
                <TableCell align="left">Apple iMac</TableCell>
                <TableCell align="left">India</TableCell>
                <TableCell align="left">16, July 2021 16:17</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><WindowOutlinedIcon color='warning' />Chrome on Windows</TableCell>
                <TableCell align="left">HP Spectre 360</TableCell>
                <TableCell align="left">Switzerland</TableCell>
                <TableCell align="left">20, July 2021 21:01</TableCell>
              </TableRow>
              <TableRow key='' sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                <TableCell component="th" scope="row"><AndroidOutlinedIcon color='success' />Chrome on Android</TableCell>
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