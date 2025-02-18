import React, { useEffect, useState } from 'react';
<<<<<<< Updated upstream
import { Navigate, useHistory, useNavigate } from 'react-router-dom';
=======
>>>>>>> Stashed changes
import {
    Box, Tabs, Tab, Typography, styled, useMediaQuery, useTheme, InputBase, IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Collapse,
    Checkbox
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Paper from '@mui/material/Paper';
import { ClickAwayListener } from '@mui/material';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { Popover } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import ShortcutIcon from '@mui/icons-material/Keyboard';
import NotificationsPage from './SearchBar/SearchNotify';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DescriptionOutlinedIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
<<<<<<< Updated upstream
import Account from './Pages/Account';
import SecurityContent from './Pages/Secuirty';
import SecurityIcon from '@mui/icons-material/Security';
import BillingContent from './Pages/Billing&Plans';
import NotificationsContent from './Pages/Notifications';
import ConnectionsContent from './Pages/ConnectionsContent';
=======
import Account from './Account';
import SecurityContent from './Secuirty';
import SecurityIcon from '@mui/icons-material/Security';
import BillingContent from './Billing&Plans';
import NotificationsContent from './Notifications';
import ConnectionsContent from './ConnectionsContent';
>>>>>>> Stashed changes
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
import Popper from '@mui/material/Popper';
<<<<<<< Updated upstream
import Footer from './Pages/Footer';
import ProfilePopper from './SearchBar/SearchAccount';
import HeaderSearch from './SearchBar/Searchbox';
import EmailDashboard from './Email/emaildash';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AppCalendar from './Calendar/AppCalender';
import Pricing from './Pages/Pricing';
=======
import Footer from './Footer';
import ProfilePopper from './SearchBar/SearchAccount';
import HeaderSearch from './SearchBar/Searchbox';
import EmailDashboard from './EmaiLL/emaildash';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
>>>>>>> Stashed changes


const SearchContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    marginBottom: theme.spacing(3),
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto 24px auto',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
    },
}));
const SidebarContainer = styled(Box)(({ theme, isMinimized }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isMinimized ? 50 : 230,
    backgroundColor: '#2f3349',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2),
    transition: 'width 0.7s ease',
    overflow: 'hidden',
    '&:hover': {
        width: isMinimized ? 230 : 230,
    }
}));

const MainContentWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
    padding: '0 24px',
    [theme.breakpoints.down('sm')]: {
        padding: '0 16px',
    },
}));

const TabsWrapper = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundColor: '#f8f7fa',
    borderRadius: '8px',
    marginBottom: '24px',
    boxShadow: '0px 2px 10px rgba(76, 78, 100, 0.22)',
}));

const ContentPanel = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '0px',
    boxShadow: '0px 2px 10px rgba(76, 78, 100, 0.22)',
    width: '100%',
}));


const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
});

const SidebarContainer = styled(Box)(({ theme, isMinimized }) => ({
    display: 'flex',
    flexDirection: 'column',
    width: isMinimized ? 50 : 230,
    backgroundColor: '#2f3349',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2),
    transition: 'width 0.7s ease',
    overflow: 'hidden',
    '&:hover': {
        width: isMinimized ? 230 : 230,
    }
}));

const LogoContainer = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '20px',
});

const Search = styled(InputBase)(({ theme }) => ({
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
    },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize: '14px',
    fontWeight: 600,
    textTransform: 'none',
    color: theme.palette.text.primary,
    minHeight: 48,
    padding: '12px 24px',
    borderRadius: '8px 8px 0 0',
    '&.Mui-selected': {
        color: '#7367f0',
        backgroundColor: 'rgba(115, 103, 240, 0.08)',
    },
    '&:hover': {
        backgroundColor: 'rgba(115, 103, 240, 0.08)',
        color: '#7367f0',
    },
}));

const StyledTabs = styled(Tabs)({
    '& .MuiTabs-indicator': {
        backgroundColor: '#7367f0',
        height: '3px',
    },
<<<<<<< Updated upstream
    padding: '0 16px',
    borderBottom: '1px solid rgba(76, 78, 100, 0.12)',
=======
    borderBottom: 'none',
    marginBottom: '24px',

>>>>>>> Stashed changes
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

function AccountPage() {
    const [selected, setSelected] = React.useState('2.2.1');
    const [tabValue, setTabValue] = React.useState(0);
    const theme = useTheme();
    const isSidebarHidden = useMediaQuery(theme.breakpoints.down('lg'));
    const [open, setOpen] = React.useState(false);
    const [collapsed, setCollapsed] = React.useState({});
    const [showNotifications, setShowNotifications] = useState(false);
    const [anchorElNotification, setAnchorElNotification] = useState(null);
    const [anchorElAccount, setAnchorElAccount] = useState(null);
    const [showAccount, setShowAccount] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleNotificationClick = (e) => {
        setAnchorElNotification(e.currentTarget);
        setShowNotifications(true);
    };

    const handleAccountClick = (e) => {
        setAnchorElAccount(e.currentTarget);
        setShowAccount(true);
    };
    const getContentMargin = () => {
        if (isSidebarHidden) return 0;
        if (isMinimized && !isHovered) return 5;
        return 20;
    };
    const handleClose = () => {
        setShowNotifications(false);
        setShowAccount(false);
    };
    const handleListItemClick = (event, index) => {
        setSelected(index);
        if (index.startsWith('2.2')) {
            setCollapsed((prevCollapsed) => ({ ...prevCollapsed, '2.2': true, '2': true }));
        }
    };
<<<<<<< Updated upstream
    const [value, setValue] = useState(0); // initialize with a default value
=======
>>>>>>> Stashed changes


    const handleToggle = () => {
        setOpen(!open);
    };
    const handleChange = (event, newValue) => {
        setTabValue(newValue);
<<<<<<< Updated upstream
        if (newValue === 0) {
            handleListItemClick(event, '2.2.1');
          } else if (newValue === 1) {
            handleListItemClick(event, '2.2.2');
          } else if (newValue === 2) {
            handleListItemClick(event, '2.2.3');
          } else if (newValue === 3) {
            handleListItemClick(event, '2.2.4');
          } else if (newValue === 4) {
            handleListItemClick(event, '2.2.5');
          }
        else if (newValue === 5) {
=======
        if (newValue === 5) {
>>>>>>> Stashed changes
            handleListItemClick(event, '1.1');
        } else if (newValue === 6) {
            handleListItemClick(event, '2.3');
        } else if (newValue === 7) {
            handleListItemClick(event, '2.4');
        } else {
            handleListItemClick(event, `2.${newValue + 1}`);
        }
    };


    const handleCollapse = (id) => {
        setCollapsed((prevCollapsed) => ({ ...prevCollapsed, [id]: !prevCollapsed[id] }));
        if (id === '2.2') {
            setSelected('');
        }
    };


<<<<<<< Updated upstream
    const navigate = useNavigate();

    const handlePricingClick = () => {
        navigate('/price');
    };
=======
>>>>>>> Stashed changes
    return (
        <Box sx={{ display: 'flex', width: '100%', minHeight: '100vh', backgroundColor: '#f8f7fa' }}>
            {/* Quick Access Bar -----------------------------------*/}
            {!isSidebarHidden && (
                <SidebarContainer
                    isMinimized={isMinimized}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <LogoContainer>
                        <Box sx={{ display: 'flex', alignItems: 'center', minWidth: isMinimized ? '40px' : 'auto' }}>
                            <img
                                src="https://cdn.pixinvent.com/pi-assets/vuexy/admin-template/logo/logo.svg"
                                alt="Logo"
                                style={{
                                    width: 55,
                                    height: 45,
                                    marginRight: isMinimized && !isHovered ? 0 : '8px'
                                }}
                            />
                            {(!isMinimized || isHovered) && (
                                <Typography sx={{
                                    fontSize: '1.25rem',
                                    fontWeight: 600,
                                    color: '#fff',
                                    fontFamily: '"Public Sans", sans-serif',
                                }}>
                                    Vuexy
                                </Typography>
                            )}
<<<<<<< Updated upstream
=======
                        </Box>
                        <Checkbox
                            checked={isMinimized}
                            onChange={() => setIsMinimized(!isMinimized)}
                            sx={{
                                color: '#fff',
                                '&.Mui-checked': {
                                    color: '#7367f0',
                                },
                                display: isHovered || !isMinimized ? 'block' : 'none'
                            }}
                        />
                    </LogoContainer>






                    {/* The options part */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px 0', color: '#FFFFFF', width: '100%', whiteSpace: 'nowrap' }}>
                        <List sx={{ width: '100%' }}>
                            <ListItem
                                button
                                selected={selected === '0'}
                                onClick={(event) => handleListItemClick(event, '0')}
                                sx={{
                                    ':hover': { backgroundColor: '#5c5f77' },
                                    padding: '8px 16px',
                                    width: '100%',
                                    borderRadius: '8px',
                                    backgroundColor: selected === '0' ? '#7c3aed' : 'transparent',
                                    color: '#FFFFFF',
                                    marginBottom: '4px',
                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                }}
                            >
                                <ListItemIcon sx={{ color: '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <AccountCircle />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Users" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>

                            <ListItem
                                button
                                selected={selected === '1'}
                                onClick={(event) => handleListItemClick(event, '1')}
                                sx={{
                                    ':hover': { backgroundColor: '#5c5f77' }, padding: '8px 16px', width: '100%',
                                    borderRadius: '8px',
                                    backgroundColor: selected === '1' ? '#7367f0' : 'transparent',
                                    color: '#FFFFFF',
                                    marginBottom: '4px',
                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                }}
                            >
                                <ListItemIcon sx={{ color: '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <ShoppingBasketIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Ecommerce" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>

                            <ListItem button selected={selected === '1.1'} onClick={(event) => handleListItemClick(event, '1.1')}
                                sx={{
                                    ':hover': { backgroundColor: selected === '1.1' ? '#7367f0' : '#5c5f77' },
                                    backgroundColor: selected === '1.1' ? '#7367f0' : 'transparent', color: '#FFFFFF',
                                    padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                }} >

                                <ListItemIcon sx={{
                                    color: selected === '1.1' ? '#FFFFFF' : '#FFFFFF',
                                    minWidth: isMinimized && !isHovered ? 'auto' : '40px'
                                }}>
                                    <EmailIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Email" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>

                            <ListItem button selected={selected === '1.2'} onClick={(event) => handleListItemClick(event, '1.2')} sx={{ ':hover': { backgroundColor: selected === '1.2' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '1.2' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                <ListItemIcon sx={{ color: selected === '1.2' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <CalendarTodayIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Calendar" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>


                            <ListItem
                                button
                                onClick={() => handleCollapse('2')}
                                sx={{
                                    ':hover': { backgroundColor: '#5c5f77' },
                                    padding: '8px 16px',
                                    width: '100%',
                                    borderRadius: '8px',
                                    backgroundColor: collapsed['2'] ? '#5c5f77' : 'transparent',
                                    color: '#FFFFFF',
                                    marginBottom: '4px',
                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                }}
                            >
                                <ListItemIcon sx={{ color: '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <DescriptionOutlinedIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Pages" sx={{ color: '#FFFFFF' }} />
                                )}
                                {(!isMinimized || isHovered) && (collapsed['2'] ? <ExpandLess /> : <ExpandMore />)}
                            </ListItem>

                            <Collapse in={collapsed['2']} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding sx={{ width: '100%' }}>
                                    <ListItem
                                        button
                                        onClick={() => handleCollapse('2.2')}
                                        sx={{
                                            ':hover': { backgroundColor: '#5c5f77' },
                                            padding: '8px 16px',
                                            width: '100%',
                                            borderRadius: '8px',
                                            backgroundColor: collapsed['2.2'] ? '#5c5f77' : 'transparent',
                                            color: '#FFFFFF',
                                            marginBottom: '4px',
                                            justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        {(!isMinimized || isHovered) && (
                                            <ListItemText primary="Account Settings" sx={{ color: '#FFFFFF' }} />
                                        )}
                                        {(!isMinimized || isHovered) && (collapsed['2.2'] ? <ExpandLess /> : <ExpandMore />)}
                                    </ListItem>

                                    <Collapse in={collapsed['2.2']} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding sx={{ width: '100%' }}>
                                            <ListItem
                                                button
                                                selected={selected === '2.2.1'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.1');
                                                    setTabValue(0);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.1' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.1' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.1' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <AccountCircleOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Account" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                            <ListItem
                                                button
                                                selected={selected === '2.2.2'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.2');
                                                    setTabValue(1);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.2' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.2' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.2' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <LockOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Security" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                            <ListItem
                                                button
                                                selected={selected === '2.2.3'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.3');
                                                    setTabValue(2);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.3' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.3' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.3' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <MonetizationOnOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Billing & Plans" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                            <ListItem
                                                button
                                                selected={selected === '2.2.4'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.4');
                                                    setTabValue(3);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.4' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.4' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.4' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <NotificationsOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Notifications" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                            <ListItem
                                                button
                                                selected={selected === '2.2.5'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.5');
                                                    setTabValue(4);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.5' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.5' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.5' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <PeopleOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Connections" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                        </List>
                                    </Collapse>

                                    <ListItem button selected={selected === '2.3'} onClick={(event) => handleListItemClick(event, '2.3')} sx={{ ':hover': { backgroundColor: selected === '2.3' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '2.3' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                        <ListItemIcon sx={{ color: selected === '2.3' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                            <DescriptionOutlinedIcon />
                                        </ListItemIcon>
                                        {(!isMinimized || isHovered) && (
                                            <ListItemText primary="FAQ" sx={{ color: '#FFFFFF' }} />
                                        )}
                                    </ListItem>


                                    <ListItem button selected={selected === '2.4'} onClick={(event) => handleListItemClick(event, '2.4')} sx={{ ':hover': { backgroundColor: selected === '2.4' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '2.4' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                        <ListItemIcon sx={{ color: selected === '2.4' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                            <DescriptionOutlinedIcon />
                                        </ListItemIcon>
                                        {(!isMinimized || isHovered) && (
                                            <ListItemText primary="Pricing" sx={{ color: '#FFFFFF' }} />
                                        )}
                                    </ListItem>

                                    <ListItem button selected={selected === '2.5'} onClick={(event) => handleListItemClick(event, '2.5')} sx={{ ':hover': { backgroundColor: selected === '2.5' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '2.5' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                        <ListItemIcon sx={{ color: selected === '2.5' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                            <DescriptionOutlinedIcon />
                                        </ListItemIcon>
                                        {(!isMinimized || isHovered) && (
                                            <ListItemText primary="Misc" sx={{ color: '#FFFFFF' }} />
                                        )}
                                    </ListItem>






                                </List>
                            </Collapse>

                            <ListItem button selected={selected === '2.1'} onClick={(event) => handleListItemClick(event, '2.1')} sx={{ ':hover': { backgroundColor: selected === '2.1' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '2.1' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                <ListItemIcon sx={{ color: selected === '2.1' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <DescriptionOutlinedIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="User Profile" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>
                        </List>
                    </Box>
                </SidebarContainer>
            )}

            {/* Main Content ------------------------*/}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                marginLeft: getContentMargin(),
                transition: 'margin-left 0.3s ease'
            }}>

                {/* Main Content Container ------------------------*/}
                <Box sx={{ padding: '24px', flexGrow: 1 }}>
                    {/*Search Bar */}
                    <HeaderSearch />


                    {/* Tabs Section --------------------------------------------------------- */}
                    <Box sx={{ mb: 4, maxWidth: 1200, mx: "auto", bgcolor: "#f8f7fa", borderRadius: 2 }}>
                        {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                            <StyledTabs value={tabValue} onChange={handleChange} aria-label="account tabs">
                                <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <AccountCircleOutlinedIcon sx={{ marginRight: '8px' }} /> Account
                                </Box>} />
                                <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <LockOutlinedIcon sx={{ marginRight: '8px' }} /> Security
                                </Box>} />
                                <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <MonetizationOnOutlinedIcon sx={{ marginRight: '8px' }} /> Billing & Plans
                                </Box>} />
                                <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <NotificationsOutlinedIcon sx={{ marginRight: '8px' }} /> Notifications
                                </Box>} />
                                <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PeopleOutlinedIcon sx={{ marginRight: '8px' }} /> Connections
                                </Box>} />
                            </StyledTabs>
                        )}
                        <Box sx={{ flexGrow: 1 }}>
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={0}>
                                    <Account />
                                </TabPanel>
                            )}
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={1}>
                                    <SecurityContent />
                                </TabPanel>
                            )}
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={2}>
                                    <BillingContent />
                                </TabPanel>
                            )}
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={3}>
                                    <NotificationsContent />
                                </TabPanel>
                            )}
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={4}>
                                    <ConnectionsContent />
                                </TabPanel>
                            )}
                            {selected === '1.1' && (
                                <EmailDashboard />
                            )}
                            {selected === '1.2' && (
                                <EmailDashboard />
                            )}
                            {selected === '2.4' && (
                                <EmailDashboard />
                            )}


>>>>>>> Stashed changes
                        </Box>
                        <Checkbox
                            checked={isMinimized}
                            onChange={() => setIsMinimized(!isMinimized)}
                            sx={{
                                color: '#fff',
                                '&.Mui-checked': {
                                    color: '#7367f0',
                                },
                                display: isHovered || !isMinimized ? 'block' : 'none'
                            }}
                        />
                    </LogoContainer>






                    {/* The options part */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px 0', color: '#FFFFFF', width: '100%', whiteSpace: 'nowrap' }}>
                        <List sx={{ width: '100%' }}>
                            <ListItem
                                button
                                selected={selected === '0'}
                                onClick={(event) => handleListItemClick(event, '0')}
                                sx={{
                                    ':hover': { backgroundColor: '#5c5f77' },
                                    padding: '8px 16px',
                                    width: '100%',
                                    borderRadius: '8px',
                                    backgroundColor: selected === '0' ? '#7c3aed' : 'transparent',
                                    color: '#FFFFFF',
                                    marginBottom: '4px',
                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                }}
                            >
                                <ListItemIcon sx={{ color: '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <AccountCircle />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Users" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>

                            <ListItem
                                button
                                selected={selected === '1'}
                                onClick={(event) => handleListItemClick(event, '1')}
                                sx={{
                                    ':hover': { backgroundColor: '#5c5f77' }, padding: '8px 16px', width: '100%',
                                    borderRadius: '8px',
                                    backgroundColor: selected === '1' ? '#7367f0' : 'transparent',
                                    color: '#FFFFFF',
                                    marginBottom: '4px',
                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                }}
                            >
                                <ListItemIcon sx={{ color: '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <ShoppingBasketIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Ecommerce" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>

                            <ListItem button selected={selected === '1.1'} onClick={(event) => handleListItemClick(event, '1.1')}
                                sx={{
                                    ':hover': { backgroundColor: selected === '1.1' ? '#7367f0' : '#5c5f77' },
                                    backgroundColor: selected === '1.1' ? '#7367f0' : 'transparent', color: '#FFFFFF',
                                    padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                }} >

                                <ListItemIcon sx={{
                                    color: selected === '1.1' ? '#FFFFFF' : '#FFFFFF',
                                    minWidth: isMinimized && !isHovered ? 'auto' : '40px'
                                }}>
                                    <EmailIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Email" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>

                            <ListItem button selected={selected === '1.2'} onClick={(event) => handleListItemClick(event, '1.2')} sx={{ ':hover': { backgroundColor: selected === '1.2' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '1.2' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                <ListItemIcon sx={{ color: selected === '1.2' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <CalendarTodayIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Calendar" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>


                            <ListItem
                                button
                                onClick={() => handleCollapse('2')}
                                sx={{
                                    ':hover': { backgroundColor: '#5c5f77' },
                                    padding: '8px 16px',
                                    width: '100%',
                                    borderRadius: '8px',
                                    backgroundColor: collapsed['2'] ? '#5c5f77' : 'transparent',
                                    color: '#FFFFFF',
                                    marginBottom: '4px',
                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                }}
                            >
                                <ListItemIcon sx={{ color: '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <DescriptionOutlinedIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="Pages" sx={{ color: '#FFFFFF' }} />
                                )}
                                {(!isMinimized || isHovered) && (collapsed['2'] ? <ExpandLess /> : <ExpandMore />)}
                            </ListItem>

                            <Collapse in={collapsed['2']} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding sx={{ width: '100%' }}>
                                    <ListItem
                                        button
                                        onClick={() => handleCollapse('2.2')}
                                        sx={{
                                            ':hover': { backgroundColor: '#5c5f77' },
                                            padding: '8px 16px',
                                            width: '100%',
                                            borderRadius: '8px',
                                            backgroundColor: collapsed['2.2'] ? '#5c5f77' : 'transparent',
                                            color: '#FFFFFF',
                                            marginBottom: '4px',
                                            justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                        }}
                                    >
                                        <ListItemIcon sx={{ color: '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                            <PersonIcon />
                                        </ListItemIcon>
                                        {(!isMinimized || isHovered) && (
                                            <ListItemText primary="Account Settings" sx={{ color: '#FFFFFF' }} />
                                        )}
                                        {(!isMinimized || isHovered) && (collapsed['2.2'] ? <ExpandLess /> : <ExpandMore />)}
                                    </ListItem>

                                    <Collapse in={collapsed['2.2']} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding sx={{ width: '100%' }}>
                                            <ListItem
                                                button
                                                selected={selected === '2.2.1'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.1');
                                                    setTabValue(0);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.1' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.1' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.1' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <AccountCircleOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Account" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                            <ListItem
                                                button
                                                selected={selected === '2.2.2'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.2');
                                                    setTabValue(1);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.2' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.2' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.2' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <LockOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Security" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                            <ListItem
                                                button
                                                selected={selected === '2.2.3'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.3');
                                                    setTabValue(2);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.3' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.3' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.3' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <MonetizationOnOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Billing & Plans" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                            <ListItem
                                                button
                                                selected={selected === '2.2.4'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.4');
                                                    setTabValue(3);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.4' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.4' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.4' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <NotificationsOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Notifications" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                            <ListItem
                                                button
                                                selected={selected === '2.2.5'}
                                                onClick={(event) => {
                                                    handleListItemClick(event, '2.2.5');
                                                    setTabValue(4);
                                                }}
                                                sx={{
                                                    ':hover': { backgroundColor: selected === '2.2.5' ? '#7367f0' : '#5c5f77' },
                                                    backgroundColor: selected === '2.2.5' ? '#7367f0' : 'transparent',
                                                    color: '#FFFFFF',
                                                    padding: '8px 16px',
                                                    width: '100%',
                                                    borderRadius: '8px',
                                                    marginBottom: '4px',
                                                    justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start'
                                                }}
                                            >
                                                <ListItemIcon sx={{ color: selected === '2.2.5' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                                    <PeopleOutlinedIcon />
                                                </ListItemIcon>
                                                {(!isMinimized || isHovered) && (
                                                    <ListItemText primary="Connections" sx={{ color: '#FFFFFF' }} />
                                                )}
                                            </ListItem>

                                        </List>
                                    </Collapse>

                                    <ListItem button selected={selected === '2.3'} onClick={(event) => handleListItemClick(event, '2.3')} sx={{ ':hover': { backgroundColor: selected === '2.3' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '2.3' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                        <ListItemIcon sx={{ color: selected === '2.3' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                            <DescriptionOutlinedIcon />
                                        </ListItemIcon>
                                        {(!isMinimized || isHovered) && (
                                            <ListItemText primary="FAQ" sx={{ color: '#FFFFFF' }} />
                                        )}
                                    </ListItem>


                                    <ListItem button selected={selected === '2.4'} onClick={(event) => {
                                        handleListItemClick(event, '2.4');
                                        handlePricingClick();
                                    }} sx={{ ':hover': { backgroundColor: selected === '2.4' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '2.4' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                        <ListItemIcon sx={{ color: selected === '2.4' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                            <DescriptionOutlinedIcon />
                                        </ListItemIcon>
                                        {(!isMinimized || isHovered) && (
                                            <ListItemText primary="Pricing" sx={{ color: '#FFFFFF' }} />
                                        )}
                                    </ListItem>

                                    <ListItem button selected={selected === '2.5'} onClick={(event) => handleListItemClick(event, '2.5')} sx={{ ':hover': { backgroundColor: selected === '2.5' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '2.5' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                        <ListItemIcon sx={{ color: selected === '2.5' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                            <DescriptionOutlinedIcon />
                                        </ListItemIcon>
                                        {(!isMinimized || isHovered) && (
                                            <ListItemText primary="Misc" sx={{ color: '#FFFFFF' }} />
                                        )}
                                    </ListItem>






                                </List>
                            </Collapse>

                            <ListItem button selected={selected === '2.1'} onClick={(event) => handleListItemClick(event, '2.1')} sx={{ ':hover': { backgroundColor: selected === '2.1' ? '#7367f0' : '#5c5f77' }, backgroundColor: selected === '2.1' ? '#7367f0' : 'transparent', color: '#FFFFFF', padding: '8px 16px', width: '100%', borderRadius: '8px', marginBottom: '4px', justifyContent: isMinimized && !isHovered ? 'center' : 'flex-start' }} >
                                <ListItemIcon sx={{ color: selected === '2.1' ? '#FFFFFF' : '#FFFFFF', minWidth: isMinimized && !isHovered ? 'auto' : '40px' }}>
                                    <DescriptionOutlinedIcon />
                                </ListItemIcon>
                                {(!isMinimized || isHovered) && (
                                    <ListItemText primary="User Profile" sx={{ color: '#FFFFFF' }} />
                                )}
                            </ListItem>
                        </List>
                    </Box>
<<<<<<< Updated upstream
                </SidebarContainer>
            )}

            {/* Main Content ------------------------*/}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                marginLeft: getContentMargin(),
                transition: 'margin-left 0.3s ease',
                overflowX: 'hidden',
            }}>

                {/* Main Content Container ------------------------*/}
                <MainContentWrapper>
                    {/*Search Bar */}
                    <HeaderSearch sx={{ width: '100%' }} />


                    {/* Tabs Section --------------------------------------------------------- */}
                    <Box sx={{ mb: 4, width: '100%', mx: "auto", bgcolor: "#f8f7fa", borderRadius: 2 }}>


                        {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (

                            <TabsWrapper>
                                <StyledTabs value={tabValue} onChange={handleChange} aria-label="account tabs" variant="scrollable"
                                    scrollButtons="auto"
                                >
                                    <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <AccountCircleOutlinedIcon sx={{ fontSize: 20 }} /> Account
                                    </Box>} />
                                    <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <LockOutlinedIcon sx={{ fontSize: 20 }} /> Security
                                    </Box>} />
                                    <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <MonetizationOnOutlinedIcon sx={{ fontSize: 20 }} /> Billing & Plans
                                    </Box>} />
                                    <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <NotificationsOutlinedIcon sx={{ fontSize: 20 }} /> Notifications
                                    </Box>} />
                                    <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <PeopleOutlinedIcon sx={{ fontSize: 20 }} /> Connections
                                    </Box>} />
                                </StyledTabs>
                            </TabsWrapper>
                        )}

                        <ContentPanel>
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={0}>
                                    <Account />
                                </TabPanel>
                            )}
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={1}>
                                    <SecurityContent />
                                </TabPanel>
                            )}
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={2}>
                                    <BillingContent />
                                </TabPanel>
                            )}
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={3}>
                                    <NotificationsContent />
                                </TabPanel>
                            )}
                            {['2.2.1', '2.2.2', '2.2.3', '2.2.4', '2.2.5'].includes(selected) && (
                                <TabPanel value={tabValue} index={4}>
                                    <ConnectionsContent />
                                </TabPanel>
                            )}
                            {selected === '1.1' && (
                                <EmailDashboard />
                            )}
                            {selected === '1.2' && (
                                <AppCalendar />
                            )}

                        </ContentPanel>
                    </Box>

                </MainContentWrapper>
                <Footer />
            </Box >
        </Box >
=======

                </Box>
                <Footer />
            </Box>
        </Box>
>>>>>>> Stashed changes
    );
}

export default AccountPage;