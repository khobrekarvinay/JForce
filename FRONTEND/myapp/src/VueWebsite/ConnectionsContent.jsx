import React from 'react';
import { Box, Typography, Card, CardContent, Switch, IconButton, Grid, Divider } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import DeleteIcon from '@mui/icons-material/Delete';

const ConnectedAccounts = [
    {
        name: 'Google',
        icon: 'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png',
        description: 'Calendar and contacts',
        connected: true
    },
    {
        name: 'Slack',
        icon: 'https://cdn-icons-png.flaticon.com/512/732/732245.png',
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
        icon: 'https://static-00.iconduck.com/assets.00/mailchimp-icon-2048x2048-isefig92.png',
        description: 'Email marketing service',
        connected: true
    },
    {
        name: 'Asana',
        icon: 'https://w7.pngwing.com/pngs/309/436/png-transparent-asana-circle-round-icon-popular-services-brands-vol-2-icon.png',
        description: 'Communication',
        connected: false
    }
];

const SocialAccounts = [
    {
        name: 'Facebook',
        icon: 'https://cdn.creazilla.com/icons/7911211/facebook-icon-lg.png',
        status: 'Not Connected',
        connected: false
    },
    {
        name: 'Twitter',
        icon: 'https://cdn2.iconfinder.com/data/icons/minimalism/512/twitter.png',
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
        icon: 'https://static-00.iconduck.com/assets.00/dribbble-icon-2048x2048-biywjvn7.png',
        status: 'Not Connected',
        connected: false
    },
    {
        name: 'Behance',
        icon: 'https://static-00.iconduck.com/assets.00/behance-icon-2048x1289-drdjdiyf.png',
        status: 'Not Connected',
        connected: false
    }
];

function ConnectionsContent() {
    return (
        <Box justifyContent='space-around' display='flex' sx={{ p: 3, flexDirection: { xs: "column", md: "row" }, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3, marginBottom: '30px' }}>
            
            <Box sx={{  }}>
                {/* <CardContent> */}
                    <Typography variant="h6" sx={{ color: '#444050' }}>
                        Connected Accounts
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: '#8D8A94' }}>
                        Display content from your connected accounts on your site
                    </Typography>

                    {ConnectedAccounts.map((account, index) => (
                        <Box key={account.name}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box component="img" src={account.icon} sx={{ width: 30, height: 30, mr: 2 }} alt={account.name} />
                                    <Box>
                                        <Typography variant="subtitle2"> {account.name} </Typography>
                                        <Typography variant="body2" color="text.secondary"> {account.description} </Typography>
                                    </Box>
                                </Box>
                                <Switch />
                            </Box>
                            {index < ConnectedAccounts.length - 1 && <Divider />}
                        </Box>
                    ))}
                {/* </CardContent> */}
            </Box>

            <Box sx={{  }}>
                {/* <CardContent> */}
                    <Typography variant="h6" sx={{ color: '#444050' }}>
                        Social Accounts
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 3, color: '#8D8A94' }}>
                        Display content from social accounts on your site
                    </Typography>

                    {SocialAccounts.map((account, index) => (
                        <Box key={account.name}>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 2 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Box component="img" src={account.icon} sx={{ width: 30, height: 30, mr: 2 }} alt={account.name} />
                                    <Box>
                                        <Typography variant="subtitle2"> {account.name} </Typography>
                                        <Typography variant="body2" color="text.secondary"> {account.status} </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    {account.connected ? (
                                        <IconButton size="small" sx={{ bgcolor: 'error.lighter', color: 'error.main', mr: 1, '&:hover': { bgcolor: 'error.light' } }} >
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    ) : (
                                        <IconButton size="small" sx={{ bgcolor: 'grey.100', color: 'grey.600', mr: 1, '&:hover': { bgcolor: 'grey.200' } }} >
                                            <LinkIcon fontSize="small" />
                                        </IconButton>
                                    )}
                                </Box>
                            </Box>
                            {index < SocialAccounts.length - 1 && <Divider />}
                        </Box>
                    ))}
                {/* </CardContent> */}
            </Box>

        </Box>
    );
}

export default ConnectionsContent;