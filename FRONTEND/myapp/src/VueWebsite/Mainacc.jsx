import React from 'react';
import { Box, Tabs, Tab, Typography, styled } from '@mui/material'; // React and Material-UI components
import Account from './Account'; // Import the AccountContent
import SecurityContent from './Secuirty';
import BillingContent from './Billing&Plans';
import NotificationsContent from './Notifications';
import ConnectionsContent from './ConnectionsContent';
import Footer from './Footer';

const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: '14px',
  fontWeight: 600,
  textTransform: 'capitalize',
  color: theme.palette.text.primary,
  '&.Mui-selected': {
    color: theme.palette.primary.main,
  },
}));


function TabPanel(props) {  // Same as before
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function AccountPage() {
  const [tabValue, setTabValue] = React.useState(0); // Default to Account tab (index 0)

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="account tabs">
          <StyledTab label="Account" {...a11yProps(0)} />
          <StyledTab label="Security" {...a11yProps(1)} />
          <StyledTab label="Billing & Plans" {...a11yProps(2)} />
          <StyledTab label="Notifications" {...a11yProps(3)} />
          <StyledTab label="Connections" {...a11yProps(4)} />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Account/>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <SecurityContent />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <BillingContent />
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <NotificationsContent />
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        <ConnectionsContent />
      </TabPanel>
      <Footer />
    </Box>
  );
}

export default AccountPage;