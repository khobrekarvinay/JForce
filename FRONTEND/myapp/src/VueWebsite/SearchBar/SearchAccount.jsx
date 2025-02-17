// SearchAccount.jsx
import React from 'react';
import { Box, Typography, Avatar, Divider, Button, IconButton } from '@mui/material';
import { Logout, AccountCircleOutlined, SettingsOutlined, MonetizationOnOutlined, HelpOutlined } from '@mui/icons-material';

const ProfilePopper = () => {
  return (
    <Box sx={{ width: '245px', padding: '8px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 0px 10px rgba(0,0,0,0.1)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png" sx={{ width: 40, height: 40, border: '2px solid #fff', '&::after': { content: '""', position: 'absolute', bottom: 0, right: 0, width: 8, height: 8, borderRadius: '50%', backgroundColor: 'green', border: '1px solid #fff' } }} />
        <Box sx={{ marginLeft: '16px' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}> John Doe </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}> Admin </Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: '8px 0' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
        <Button startIcon={<AccountCircleOutlined sx={{ fontSize: 20 }} />} sx={{ textTransform: 'none', marginBottom: '4px', color: 'text.secondary', padding: 0, minHeight: 40, justifyContent: 'flex-start' }}>
          <Typography variant="body1" sx={{ fontSize: 16, marginLeft: '8px' }}> My Profile </Typography>
        </Button>
        <Button startIcon={<SettingsOutlined sx={{ fontSize: 20 }} />} sx={{ textTransform: 'none', marginBottom: '4px', color: 'text.secondary', padding: 0, minHeight: 40, justifyContent: 'flex-start' }}>
          <Typography variant="body1" sx={{ fontSize: 16, marginLeft: '8px' }}> Settings </Typography>
        </Button>
        <Button startIcon={<MonetizationOnOutlined sx={{ fontSize: 20 }} />} sx={{ textTransform: 'none', marginBottom: '8px', color: 'text.secondary', padding: 0, minHeight: 40, justifyContent: 'flex-start' }}>
          <Typography variant="body1" sx={{ fontSize: 16, marginLeft: '8px' }}> Billing </Typography>
        </Button>
      </Box>
      <Divider sx={{ margin: '8px 0' }} />
      <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 16px' }}>
        <Button startIcon={<HelpOutlined sx={{ fontSize: 20 }} />} sx={{ textTransform: 'none', marginBottom: '4px', color: 'text.secondary', padding: 0, minHeight: 40, justifyContent: 'flex-start' }}>
          <Typography variant="body1" sx={{ fontSize: 16, marginLeft: '8px' }}> Pricing </Typography>
        </Button>
        <Button startIcon={<HelpOutlined sx={{ fontSize: 20 }} />} sx={{ textTransform: 'none', marginBottom: '8px', color: 'text.secondary', padding: 0, minHeight: 40, justifyContent: 'flex-start' }}>
          <Typography variant="body1" sx={{ fontSize: 16, marginLeft: '8px' }}> FAQ </Typography>
        </Button>
      </Box>
      <Button startIcon={<Logout sx={{ fontSize: 20 }} />} variant="contained" color="error" sx={{ width: '100%', textTransform: 'none', marginTop: '8px' }} > Logout </Button>
    </Box>
  );
};

export default ProfilePopper;