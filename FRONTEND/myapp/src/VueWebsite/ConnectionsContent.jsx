import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Switch,
    IconButton,
    Grid,
    Divider
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import DeleteIcon from '@mui/icons-material/Delete';

const ConnectedAccounts = [
    {
        name: 'Google',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
        description: 'Calendar and contacts',
        connected: true
    },
    {
        name: 'Slack',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg',
        description: 'Communication',
        connected: false
    },
    {
        name: 'Github',
        icon: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
        description: 'Manage your Git repositories',
        connected: true
    },
    {
        name: 'Mailchimp',
        icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968879.png',
        description: 'Email marketing service',
        connected: true
    },
    {
        name: 'Asana',
        icon: 'https://cdn.worldvectorlogo.com/logos/asana-1.svg',
        description: 'Communication',
        connected: false
    }
];

const SocialAccounts = [
    {
        name: 'Facebook',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
        status: 'Not Connected',
        connected: false
    },
    {
        name: 'Twitter',
        icon: 'https://about.twitter.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.1920.png',
        status: '@Pixinvent',
        connected: true
    },
    {
        name: 'Instagram',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg',
        status: '@Pixinvent',
        connected: true
    },
    {
        name: 'Dribbble',
        icon: 'https://cdn.worldvectorlogo.com/logos/dribbble-icon-1.svg',
        status: 'Not Connected',
        connected: false
    },
    {
        name: 'Behance',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1024px-Behance_logo.svg.png',
        status: 'Not Connected',
        connected: false
    }
];

function ConnectionsContent() {
    return (
        <Box sx={{ p: 3 }}>
            <Card sx={{ mb: 4 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Connected Accounts
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Display content from your connected accounts on your site
                    </Typography>

                    {ConnectedAccounts.map((account, index) => (
                        <Box key={account.name}>
                            <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                py: 2 
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        component="img"
                                        src={account.icon}
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            mr: 2
                                        }}
                                        alt={account.name}
                                    />
                                    <Box>
                                        <Typography variant="subtitle2">
                                            {account.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {account.description}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Switch checked={account.connected} />
                            </Box>
                            {index < ConnectedAccounts.length - 1 && <Divider />}
                        </Box>
                    ))}
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Social Accounts
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Display content from social accounts on your site
                    </Typography>

                    {SocialAccounts.map((account, index) => (
                        <Box key={account.name}>
                            <Box sx={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'space-between',
                                py: 2 
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        component="img"
                                        src={account.icon}
                                        sx={{
                                            width: 30,
                                            height: 30,
                                            mr: 2
                                        }}
                                        alt={account.name}
                                    />
                                    <Box>
                                        <Typography variant="subtitle2">
                                            {account.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {account.status}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    {account.connected ? (
                                        <IconButton 
                                            size="small" 
                                            sx={{ 
                                                bgcolor: 'error.lighter',
                                                color: 'error.main',
                                                mr: 1,
                                                '&:hover': {
                                                    bgcolor: 'error.light'
                                                }
                                            }}
                                        >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    ) : (
                                        <IconButton 
                                            size="small" 
                                            sx={{ 
                                                bgcolor: 'grey.100',
                                                color: 'grey.600',
                                                mr: 1,
                                                '&:hover': {
                                                    bgcolor: 'grey.200'
                                                }
                                            }}
                                        >
                                            <LinkIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                </Box>
                            </Box>
                            {index < SocialAccounts.length - 1 && <Divider />}
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Box>
    );
}

export default ConnectionsContent;