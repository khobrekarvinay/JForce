import React from 'react';
import { Box, Tabs, Tab, Typography, styled, useMediaQuery, useTheme, InputBase, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Account from './Account';
import SecurityContent from './Secuirty';
import BillingContent from './Billing&Plans';
import NotificationsContent from './Notifications';
import ConnectionsContent from './ConnectionsContent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';

// Styled search container
const SearchContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(3),
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));

// Styled search input
const Search = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
    },
}));

// Styled tab component
const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize: '14px',
    fontWeight: 600, // Make the text bold
    textTransform: 'capitalize',
    color: theme.palette.text.primary,
    minHeight: 48,
    padding: '0 16px',
    borderRadius: '8px 8px 0 0',
    display: 'flex', // Add this line to make the icon and text inline
    alignItems: 'center', // Add this line to center the icon and text vertically
    '&.Mui-selected': {
        color: '#fff',
        backgroundColor: '#7367f0',
        '&:hover': {
            backgroundColor: '#7367f0',
            color: '#fff',
        },
    },
    '&:hover': {
        backgroundColor: 'rgba(115, 103, 240, 0.08)',
        color: '#7367f0',
    },
    '&:not(:last-child)': {
        marginRight: '16px',
    },
}));

// Styled tabs container
const StyledTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#7367f0',
    },
    borderBottom: 'none',
    marginBottom: '24px',
});

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
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: '#f8f7fa'  }}>
            {/* Quick Access Bar */}
            {!isSidebarHidden && (
                <Box
                    sx={{
                        width: 220,
                        backgroundColor: '#2f3349',
                        height: '100vh',
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: 1,
                        padding: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <img
                            src="https://cdn.pixinvent.com/pi-assets/vuexy/admin-template/logo/logo.svg"
                            alt="Logo"
                            style={{ width: 40, height: 30 }}
                        />
                        <Typography
                            sx={{
                                ml: 1,
                                fontSize: '1.25rem',
                                fontWeight: 600,
                                color: '#fff',
                                fontFamily: '"Public Sans", sans-serif',
                            }}
                        >
                            Vuexy
                        </Typography>
                    </Box>
                </Box>
            )}
            {/* Main Content ------------------------*/}
            <Box
                sx={{
                    width: '100%',
                    marginLeft: isSidebarHidden ? 0 : '280px',
                    padding: '24px',
                    flexGrow: 1,
                }}
            >
                {/*Search Bar */}
                <SearchContainer>
                    <IconButton sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Search placeholder="Search (Ctrl+/)" inputProps={{ 'aria-label': 'search' }} />
                </SearchContainer>

                {/* Tabs Section ------------------------------- */}
                <Box sx={{ width: '100%' }}>
                    <StyledTabs value={tabValue} onChange={handleChange} aria-label="account tabs">
                        <StyledTab label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <AccountCircleOutlinedIcon sx={{ marginRight: '8px' }} />
                                Account
                            </Box>
                        } {...a11yProps(0)} />
                        <StyledTab label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <LockOutlinedIcon sx={{ marginRight: '8px' }} />
                                Security
                            </Box>
                        } {...a11yProps(1)} />
                        <StyledTab label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <MonetizationOnOutlinedIcon sx={{ marginRight: '8px' }} />
                                Billing & Plans
                            </Box>
                        } {...a11yProps(2)} />
                        <StyledTab label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <NotificationsOutlinedIcon sx={{ marginRight: '8px' }} />
                                Notifications
                            </Box>
                        } {...a11yProps(3)} />
                        <StyledTab label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <PeopleOutlinedIcon sx={{ marginRight: '8px' }} />
                                Connections
                            </Box>
                        } {...a11yProps(4)} />
                    </StyledTabs>
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
        </Box >

    );
}

export default AccountPage;