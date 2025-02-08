import React from 'react';
import { Box, Tabs, Tab, Typography, styled, useMediaQuery, useTheme } from '@mui/material';
import Account from './Account';
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

function TabPanel(props) {
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
    const [tabValue, setTabValue] = React.useState(0);
    const theme = useTheme();
    const isSidebarHidden = useMediaQuery(theme.breakpoints.down('lg'));

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh' }}>
            {/* Quick Access Bar --------------------------------*/}
            {!isSidebarHidden && (
                <Box sx={{ width: 220, backgroundColor: '#2f3349', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 1, padding: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="https://cdn.pixinvent.com/pi-assets/vuexy/admin-template/logo/logo.svg" alt="Logo" style={{ width: 40, height: 30 }} />
                        <Typography sx={{ ml: 1, fontSize: '1.25rem', fontWeight: 600, color: '#fff', fontFamily: '"Public Sans", sans-serif', }}>
                            Vuexy
                        </Typography>
                    </Box>
                </Box>
            )}
            {/* Main Content ----------------------------------*/}
            <Box sx={{ width: '100%', marginLeft: isSidebarHidden ? 0 : 40, padding: 2, flexGrow: 1 }}>
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
                        <Account />
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
                </Box>
            </Box>
            {/* <Footer /> */}
        </Box>
    );
}

export default AccountPage;