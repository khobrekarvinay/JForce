//SearchNotify.jsx
import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider, Button } from '@mui/material';

const Notification = ({ avatar, title, description, time }) => {
    return (
        <ListItem sx={{ padding: '15px', '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.05)' } }}>
            <ListItemAvatar sx={{ minWidth: '40px', margin: '0 5px 0 5px' }}>
                <Avatar src={avatar} />
            </ListItemAvatar>
            <ListItemText primary={title} secondary={
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 0' }}>
                    <Typography variant="body2">{description}</Typography>
                    <Typography variant="body2" color="text.secondary">
                        {time}
                    </Typography>
                </Box>
            } sx={{ margin: '0', marginLeft: '16px' }} />
        </ListItem>
    );
};

const NotificationsPage = () => {
    const notifications = [
        {
            id: 1,
            type: 'New for you',
            message: 'You have new notifications.',
            time: '10 minutes ago',
            avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png'
        },
        {
            id: 2,
            type: 'Account activity',
            message: 'Your account has been accessed from a new device.',
            time: '1 hour ago',
            avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/2.png'
        },
        {
            id: 3,
            type: 'A new browser used to sign in',
            message: 'You have signed in from a new browser.',
            time: '2 hours ago',
            avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/3.png'
        },
        {
            id: 4,
            type: 'A new device is linked',
            message: 'A new device has been linked to your account.',
            time: '3 hours ago',
            avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png'
        },
        {
            id: 5,
            type: 'New message from Jane Doe',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '4 hours ago',
            avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/4.png'
        },
        {
            id: 6,
            type: 'CPU utilization is too high',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '5 hours ago',
            avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/5.png'
        },
        {
            id: 7,
            type: 'New connection request from John Doe',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '6 hours ago',
            avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/2.png'
        },
        {
            id: 8,
            type: 'Disk space is running low',
            message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            time: '7 hours ago',
            avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/3.png'
        }
    ];

    return (
        <Box sx={{ maxHeight: 300, overflowY: 'auto', padding: '0' }}>

            <List sx={{ padding: '0' }}>
                {notifications.map((notification, index) => (
                    <React.Fragment key={notification.id}>
                        <Notification avatar={notification.avatar} title={notification.type} description={notification.message} time={notification.time} />
                        {index < notifications.length - 1 && <Divider sx={{ margin: '0' }} />}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
};

export default NotificationsPage;