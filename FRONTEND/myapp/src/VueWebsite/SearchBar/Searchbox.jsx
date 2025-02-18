import React, { useState } from 'react';
import {
    Box,
    IconButton,
    InputBase,
    Paper,
    Popover,
    Button,
    ClickAwayListener,
    Typography,
    Avatar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsPage from './SearchNotify';
import ProfilePopper from './SearchAccount';

const HeaderSearch = () => {
    const [notificationAnchor, setNotificationAnchor] = useState(null);
    const [profileAnchor, setProfileAnchor] = useState(null);

    const handleNotificationClick = (event) => {
        setNotificationAnchor(event.currentTarget);
    };

    const handleProfileClick = (event) => {
        setProfileAnchor(event.currentTarget);
    };

    const handleClose = () => {
        setNotificationAnchor(null);
        setProfileAnchor(null);
    };

    return (
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, maxWidth: 1400, mx: "auto", mt: 2 }}>
=======
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, maxWidth: 1300, mx: "auto" }}>
>>>>>>> Stashed changes
=======
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, maxWidth: 1300, mx: "auto" }}>
>>>>>>> Stashed changes
=======
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, maxWidth: 1300, mx: "auto" }}>
>>>>>>> Stashed changes
=======
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, maxWidth: 1300, mx: "auto" }}>
>>>>>>> Stashed changes
            <Paper sx={{
                padding: '4px 12px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                position: 'relative'
            }}>
                <IconButton sx={{ p: '10px' }}>
                    <SearchIcon />
                </IconButton>

                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search (Ctrl+/)"
                />

                <Box sx={{ display: 'flex', alignItems: 'center', marginLeft: 'auto' }}>
                    <IconButton sx={{ p: '10px', mr: 1 }}>
                        <LanguageIcon />
                    </IconButton>

                    <IconButton sx={{ p: '10px', mr: 1 }}>
                        <LightModeIcon />
                    </IconButton>

                    <IconButton sx={{ p: '10px', mr: 1 }}>
                        <KeyboardIcon />
                    </IconButton>

                    {/* Notifications Button */}
                    <Box sx={{ position: 'relative' }}>
                        <IconButton
                            aria-label="notifications"
                            onClick={(event) => handleNotificationClick(event)}
                        >
                            <NotificationsIcon />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '8px',
                                    right: '8px',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: 'red',
                                }}
                            />
                        </IconButton>
                        <Popover
                            open={Boolean(notificationAnchor)}
                            anchorEl={notificationAnchor}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{
                                mt: 2.5,
                                '& .MuiPopover-paper': {
                                    width: 350,
                                    maxHeight: 580,
                                },
                            }}
                        >
                            <Box sx={{ borderBottom: '1px solid #ddd' }}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        padding: '16px',
                                        fontSize: '18px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Notifications
                                </Typography>
                            </Box>
                            <NotificationsPage />
                            <Box sx={{ p: 2, borderTop: '1px solid #ddd' }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#7367f0',
                                        '&:hover': { backgroundColor: '#5e50e9' },
                                    }}
                                >
                                    View all notifications
                                </Button>
                            </Box>
                        </Popover>
                    </Box>

                    {/* Profile Button */}
                    <Box sx={{ position: 'relative' }}>
                        <IconButton
                            sx={{ p: '10px' }}
                            onClick={handleProfileClick}
                        >
                            <Avatar src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png" ></Avatar>
                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: '8px',
                                    right: '8px',
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: 'green'
                                }}
                            />
                        </IconButton>

                        <Popover
                            open={Boolean(profileAnchor)}
                            anchorEl={profileAnchor}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            sx={{
                                mt: 2.5,
                                '& .MuiPopover-paper': {
                                    width: 260
                                }
                            }}
                        >
                            <ProfilePopper />
                        </Popover>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default HeaderSearch;