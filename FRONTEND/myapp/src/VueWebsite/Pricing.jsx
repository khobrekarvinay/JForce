import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import { Accordion, AccordionDetails, AccordionSummary, Link, List, ListItem, Paper, Stack, styled, Switch, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, TextField, useScrollTrigger } from '@mui/material';
import UTurnLeftOutlinedIcon from '@mui/icons-material/UTurnLeftOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';


const pages = ['Home', 'Features', 'Team', 'FAQ', 'Contact us', 'Pages', 'Admin'];
const settings = ['Light', 'Dark', 'Syatem'];

const faqData = [
    {
        question: "What counts towards the 100 responses limit?",
        answer:
            "We accept Visa®, MasterCard®, American Express®, and PayPal®. So you can be confident that your credit card information will be kept safe and secure.",
    },
    {
        question: "How do you process payments?",
        answer: "Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet."
    },
    {
        question: "Do you have a money-back guarantee?",
        answer: "We count all responses submitted through all your forms in a month. If you already received 100 responses this month, you won’t be able to receive any more of them until next month when the counter resets."
    },
    {
        question: "I have more questions. Where can I get help?",
        answer: "2Checkout accepts all types of credit and debit cards."
    },
];

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return children
        ? React.cloneElement(children, {
            elevation: trigger ? 4 : 0,
        })
        : null;
}

export default function Pricing(props) {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    function createData(features, starter, pro, enterprise) {
        return { features, starter, pro, enterprise };
    }

    const rows = [
        createData('14-days free trial', <CheckCircleOutlineRoundedIcon />, <CheckCircleOutlineRoundedIcon />, <CheckCircleOutlineRoundedIcon />),
        createData('No user limit', <CancelOutlinedIcon />, <CancelOutlinedIcon />, <CheckCircleOutlineRoundedIcon />),
        createData('Product Support', <CancelOutlinedIcon />, <CheckCircleOutlineRoundedIcon />, <CheckCircleOutlineRoundedIcon />),
        createData('Email Support', <CancelOutlinedIcon />, <Typography variant='body2' sx={{ color: '#7367f0 !important' }}>Add-On-Available</Typography>, <CheckCircleOutlineRoundedIcon />),
        createData('Integrations', <CancelOutlinedIcon />, <CheckCircleOutlineRoundedIcon />, <CheckCircleOutlineRoundedIcon />),
        createData('Removal of Front branding', <CancelOutlinedIcon />, <Typography variant='body2' sx={{ color: '#7367f0 !important' }}>Add-On-Available</Typography>, <CheckCircleOutlineRoundedIcon />),
        createData('Active maintenance & support', <CancelOutlinedIcon />, <CancelOutlinedIcon />, <CheckCircleOutlineRoundedIcon />),
        createData('Data storage for 365 days', <CancelOutlinedIcon />, <CancelOutlinedIcon />, <CheckCircleOutlineRoundedIcon />),
        createData('',
            <Button sx={{ textTransform: "none", backgroundColor: '#E9E7FD', color: '#7367FO' }} >
                Choose Plan
            </Button>,
            <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }} >
                Choose Plan
            </Button>,
            <Button sx={{ textTransform: "none", backgroundColor: '#E9E7FD', color: '#7367FO' }} >
                Choose Plan
            </Button>),
    ];

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>

            {/* Navigation Bar */}
            <Box sx={{}}>
                <ElevationScroll {...props}>
                    <AppBar position="fixed" color='inherit' sx={{ mt: 2, padding: { lg: '0px 80px', md: '0px 10px', sm: '0px 30px', xs: '0px 15px' } }}>
                        <Container maxWidth="xl" >
                            <Toolbar disableGutters>
                                {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                                <img src="https://cdn.pixinvent.com/pi-assets/vuexy/admin-template/logo/logo.svg" alt="Logo" style={{ width: 50, height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#444050', textDecoration: 'none', }} >
                                    Vuexy
                                </Typography>

                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="#444050" >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' } }} >
                                        {pages.map((page) => (
                                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                                <Typography sx={{ textAlign: 'center', color: '#444050' }}>{page}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                                {/* <img src="https://cdn.pixinvent.com/pi-assets/vuexy/admin-template/logo/logo.svg" alt="Logo" style={{ width: 40, height: 30, display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                                <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#444050', textDecoration: 'none', }} >
                                    Vuexy
                                </Typography>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page) => (
                                        <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: '#444050', display: 'block' }} >
                                            {page}
                                        </Button>
                                    ))}
                                </Box>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Light Mode">
                                        <IconButton sx={{ p: 0 }} >
                                            <LightModeOutlinedIcon onClick={handleOpenUserMenu} sx={{ marginRight: 3 }} />
                                            <Button variant="contained" sx={{ bgcolor: '#7367f0', textTransform: 'none', fontFamily: '"Public Sans", sans-serif', boxShadow: '0 .125rem .375rem 0 rgba(115, 103, 240, .3)' }} >
                                                <ExitToAppOutlinedIcon /> &nbsp; Login/Register
                                            </Button>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right', }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu} >
                                        {settings.map((setting) => (
                                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </Toolbar>
                        </Container>
                    </AppBar>
                </ElevationScroll>
            </Box>

            {/* Heading label and paragraph */}
            <Box sx={{ mt: { lg: 25, md: 15, sm: 15, xs: 15 } }} justifyContent='center'>
                <Typography variant='h3' textAlign='center' sx={{ color: '#444050', fontSize: '38px', paddingBottom: 2 }} >Pricing Plans</Typography>
                <Typography variant='body1' textAlign='center' sx={{ color: '#6D6B77', fontSize: '' }} >
                    All plans include 40+ advanced tools and features to boost your product.
                </Typography>
                <Typography variant='body1' textAlign='center' sx={{ color: '#6D6B77', fontSize: '' }} >
                    Choose the best plan to fit your needs.
                </Typography>
                <Box display='flex' justifyContent='center' mt={2}>
                    <Typography textAlign='center' sx={{ color: '#6D6B77', fontSize: '', marginTop: 3 }} >
                        Monthly <Switch defaultChecked /> Annually
                    </Typography>
                    <UTurnLeftOutlinedIcon />
                    <Typography style={{ backgroundColor: '', padding: '5px 8px', color: '#7367f0', borderRadius: 3, }}>
                        Save up to 10%</Typography>
                </Box>
            </Box>

            {/* Cards */}
            <Box sx={{ display: 'flex', gap: '25px', flexWrap: 'wrap', justifyContent: 'center', padding: '20px 0px', maxWidth: 1300, mx: "auto", bgcolor: "white", marginBottom: '30px' }} >
                {/* Basic Plan */}
                <Box sx={{ padding: '40px 20px 20px 20px', color: '#6D6B77', width: '100%', maxWidth: '375px', flexGrow: 1, borderRadius: 2, border: '1px solid #e6e6e8' }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
                        <Box component="img" sx={{ height: 120, width: 120 }} alt="Basic plan." src="/basic.png" />
                    </Box>
                    <Typography variant='h5' sx={{ color: '#444050', textAlign: 'center' }}>Basic</Typography>
                    <Typography variant='body1' sx={{ color: '#6D6B77', textAlign: 'center', mb: 2 }}>A simple start for everyone</Typography>
                    <Box display='flex' sx={{ justifyContent: 'center' }}>
                        <Typography>$</Typography>
                        <Typography variant='h3' sx={{ marginTop: 1, color: '#7367f0' }}>0</Typography>
                        <Typography sx={{ marginTop: 5 }}>/month</Typography>
                    </Box>
                    <List sx={{ marginTop: 2 }}>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> 100 responses a month</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Unlimited forms and surveys</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Unlimited fields</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Basic form creation tools</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Up to 2 subdomains</ListItem>
                    </List>
                    <Button fullWidth variant="contained" sx={{ color: '#28C76F', bgcolor: '#DDF6E8', textTransform: 'none' }}>
                        Your Current Plan
                    </Button>
                </Box>

                {/* Standard Plan */}
                <Box sx={{ padding: '40px 20px 20px 20px', color: '#6D6B77', width: '100%', maxWidth: '375px', flexGrow: 1, borderRadius: 2, border: '1px solid #e6e6e8' }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
                        <Box component="img" sx={{ height: 120, width: 120 }} alt="Standard plan." src="/standard.png" />
                    </Box>
                    <Typography variant='h5' sx={{ color: '#444050', textAlign: 'center' }}>Standard</Typography>
                    <Typography variant='body1' sx={{ color: '#6D6B77', textAlign: 'center', mb: 2 }}>For small to medium businesses</Typography>
                    <Box display='flex' sx={{ justifyContent: 'center' }}>
                        <Typography>$</Typography>
                        <Typography variant='h3' sx={{ marginTop: 1, color: '#7367f0' }}>7</Typography>
                        <Typography sx={{ marginTop: 5 }}>/month</Typography>
                    </Box>
                    <Typography sx={{ textAlign: 'center', color: '#ACAAB1', fontSize: '14px' }}>USD 480 / year</Typography>
                    <List>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Unlimited responses</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Unlimited forms and surveys</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Instagram profile page</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Google Docs integration</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Custom "Thank you" page</ListItem>
                    </List>
                    <Button fullWidth variant="contained" sx={{ bgcolor: '#7367f0', '&:hover': { bgcolor: '#6054e6' }, textTransform: 'none' }}>
                        Upgrade
                    </Button>
                </Box>

                {/* Enterprise Plan */}
                <Box sx={{ padding: '40px 20px 20px 20px', color: '#6D6B77', width: '100%', maxWidth: '375px', flexGrow: 1, borderRadius: 2, border: '1px solid #e6e6e8' }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "200px" }}>
                        <Box component="img" sx={{ height: 120, width: 120 }} alt="Enterprise plan." src="/enterprise.png" />
                    </Box>
                    <Typography variant='h5' sx={{ color: '#444050', textAlign: 'center' }}>Enterprise</Typography>
                    <Typography variant='body1' sx={{ color: '#6D6B77', textAlign: 'center', mb: 2 }}>Solution for big organizations</Typography>
                    <Box display='flex' sx={{ justifyContent: 'center' }}>
                        <Typography>$</Typography>
                        <Typography variant='h3' sx={{ marginTop: 1, color: '#7367f0' }}>16</Typography>
                        <Typography sx={{ marginTop: 5 }}>/month</Typography>
                    </Box>
                    <Typography sx={{ textAlign: 'center', color: '#ACAAB1', fontSize: '14px' }}>USD 960 / year</Typography>
                    <List>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> PayPal payments</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Logic Jumps</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> File upload with 5GB storage</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Custom domain support</ListItem>
                        <ListItem><FiberManualRecordIcon sx={{ fontSize: 8, mr: 2 }} /> Stripe integration</ListItem>
                    </List>
                    <Button fullWidth variant="contained" sx={{ color: '#7367f0', bgcolor: '#E9E7FD', textTransform: 'none' }}>
                        Your Current Plan
                    </Button>
                </Box>
            </Box>

            {/* image */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px 110px', bgcolor: "#E9E7FD", marginBottom: '30px' }} >

                <Box sx={{ flex: { md: "0 0 40%" }, display: "flex", justifyContent: "flex-end", alignItems: "flex-end", minHeight: "200px", order: { xs: 1, md: 2 }, }} >
                    <Box component="img" sx={{ height: { xs: 200, sm: 228 }, width: { xs: 170, sm: 202 }, maxHeight: { xs: 200, md: 228 }, maxWidth: { xs: 170, md: 202 }, }}
                        alt="Girl with laptop." src="/girl.png" />
                </Box>

                <Box sx={{ flex: { md: "0 0 60%" }, pt: 4, display: "flex", flexDirection: "column", order: { xs: 2, md: 1 }, }} >
                    <Typography variant='h5' sx={{ color: '#7367f0 !important', paddingBottom: '0px' }}>Still not convinced? Start with a 14-day FREE trial!</Typography>
                    <Typography sx={{ color: '#6d6b77 !important', padding: '10px 0px 40px 0px' }}>You will get full access to with all the features for 14 days.</Typography>
                    <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0', width: "auto", alignSelf: "flex-start" }} >
                        Start 14-day free trial
                    </Button>

                </Box>

            </Box>

            {/* Table */}
            <Box sx={{ flexWrap: 'wrap', justifyContent: 'center', padding: { lg: '80px 120px', md: '64px 60px', sm: '40px 30px', xs: '32px 15px' }, mb: 4 }}>
                <Typography variant='h4' sx={{ color: '#444050', textAlign: 'center' }}>Pick a plan that works best for you</Typography>
                <Typography variant='body1' sx={{ color: '#6D6B77', textAlign: 'center', mb: 3 }}>Stay cool, we have a 48-hour money back guarantee!</Typography>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography sx={{ color: '#444050', textTransform: 'uppercase' }}>Features</Typography>
                                    <Typography variant='body2' sx={{ color: '#6D6B77' }}>Native Front Feature</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ color: '#444050', textTransform: 'uppercase' }}>Starter</Typography>
                                    <Typography variant='body2' sx={{ color: '#6D6B77' }}>Free</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ color: '#444050', textTransform: 'uppercase' }}>Pro <StarsOutlinedIcon color='primary' /> </Typography>
                                    <Typography variant='body2' sx={{ color: '#6D6B77' }}>$7.5/Month</Typography>
                                </TableCell>
                                <TableCell align="center">
                                    <Typography sx={{ color: '#444050', textTransform: 'uppercase' }}>Enterprise</Typography>
                                    <Typography variant='body2' sx={{ color: '#6D6B77' }}>$16/Month</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <StyledTableCell component="th" scope="row">
                                        {row.features}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.starter}</StyledTableCell>
                                    <StyledTableCell align="center">{row.pro}</StyledTableCell>
                                    <StyledTableCell align="center">{row.enterprise}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box>

            {/* FAQs */}
            <Box sx={{ flexWrap: 'wrap', justifyContent: 'center', padding: { lg: '80px 120px', md: '64px 60px', sm: '40px 30px', xs: '32px 15px' }, bgcolor: "#F8F7FA" }}>
                <Typography variant='h5' sx={{ color: '#444050', textAlign: 'center', mb: 1 }}>FAQs</Typography>
                <Typography sx={{ color: '#6d6b77', textAlign: 'center' }}>Let us help answer the most common questions you might have.</Typography>
                <Box mt={3}>
                    {faqData.map((faq, index) => {
                        const panelId = `panel-${index}`;
                        return (
                            <Box sx={{ boxShadow: '0 .0625rem .375rem 0 rgba(47, 43, 61, .1)', borderRadius: 2, mb: 1 }}>
                                <Accordion key={index} expanded={expanded === panelId} onChange={handleChange(panelId)}>
                                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                        <Typography sx={{ color: '#444050' }}>{faq.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography sx={{ color: '#6d6b77' }}>{faq.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>
                        );
                    })}
                </Box>
            </Box>

            {/*  */}
            <Box sx={{ bgcolor: "#F8F7FA" }}>
                <Box
                    sx={{ backgroundImage: 'url("/footer.png")', backgroundSize: 'cover', backgroundPosition: 'center', borderTopRightRadius: { xs: 20, md: 60 }, borderTopLeftRadius: { xs: 20, md: 60 }, minHeight: 'auto', p: { xs: 2, md: 4 }, color: 'white', position: 'relative', '&::before': { content: '""', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderTopRightRadius: { xs: 20, md: 60 }, borderBottomRightRadius: { xs: 20, md: 60 }, zIndex: 0, } }} >
                    {/* <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }} > */}
                    <Box
                        sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr 1fr 1fr' }, gap: 4, py: 4 }} >
                        {/* vuexy Column */}
                        <Box sx={{ gridColumn: { xs: '1', md: '1 / span 1' }, padding: '0px 0px', marginLeft: { lg: '80px' } }}>
                            <Typography variant="h5" component="div" sx={{ mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <img src="https://cdn.pixinvent.com/pi-assets/vuexy/admin-template/logo/logo.svg" alt="Logo" style={{ width: 50, height: 40, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                Vuexy
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4 }}>
                                Most developer friendly & highly customisable Admin Dashboard Template.
                            </Typography>
                            <Box sx={{ maxWidth: 400 }}>
                                <Typography variant="body2">
                                    Subscribe to newsletter
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 0 }}>
                                    <TextField placeholder="Your email" variant="outlined" size="small" fullWidth sx={{ '& .MuiOutlinedInput-root': { color: 'white', '& fieldset': { borderColor: 'rgba(255, 255, 255, 0.3)', }, }, }} />
                                    <Button variant="contained" sx={{ backgroundColor: '#7c4dff', '&:hover': { backgroundColor: '#651fff' } }} >
                                        Subscribe
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        {/* demos Column */}
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2 }}>Demos</Typography>
                            <Stack spacing={2}>
                                <Typography variant="body2">Vertical Layout</Typography>
                                <Typography variant="body2">Horizontal Layout</Typography>
                                <Typography variant="body2">Bordered Layout</Typography>
                                <Typography variant="body2">Semi Dark Layout</Typography>
                                <Typography variant="body2">Dark Layout</Typography>
                            </Stack>
                        </Box>

                        {/* pages Column */}
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2 }}>Pages</Typography>
                            <Stack spacing={2}>
                                <Typography variant="body2">Pricing</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Typography variant="body2">Payment</Typography>
                                    <Box sx={{ backgroundColor: '#7c4dff', px: 1, py: 0.5, borderRadius: 1, fontSize: '0.75rem' }} >
                                        New
                                    </Box>
                                </Box>
                                <Typography variant="body2">Checkout</Typography>
                                <Typography variant="body2">Help Center</Typography>
                                <Typography variant="body2">Login/Register</Typography>
                            </Stack>
                        </Box>

                        {/* Download Section - Now in the grid */}
                        <Box>
                            <Typography variant="h6" sx={{ mb: 2 }}>Download our app</Typography>
                            <Stack spacing={2}>
                                <Box component='img' src='/apple.png' sx={{ height: { xs: 57, sm: 57 }, width: { xs: 220, sm: 220 }, maxHeight: { xs: 57, md: 57 }, maxWidth: { xs: 220, md: 220 }, }} />
                                <Box component='img' src='/playstore.png' sx={{ height: { xs: 57, sm: 57 }, width: { xs: 220, sm: 220 }, maxHeight: { xs: 57, md: 57 }, maxWidth: { xs: 220, md: 220 }, }} />
                            </Stack>
                        </Box>
                    </Box>
                    {/* </Container> */}
                </Box>
            </Box>

            {/* footer */}
            <Box component="footer" sx={{ width: '100%', bgcolor: '#282C3E', py: 2, position: 'relative' }} >
                <Container maxWidth="lg">
                    <Box display="flex" sx={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, gap: { xs: 2, md: 0 } }} >
                        <Typography variant="body1" sx={{ color: '#d3d4dc' }}>
                            © 2025 &nbsp;
                            <Link href="#" sx={{ color: 'white', textDecoration: 'none', fontFamily: '"Public Sans", sans-serif', '&:hover': { color: '#f5f5f5' } }} >
                                Pixinvent
                            </Link>
                            , Made with ❤️ for a better web.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Link href="#" sx={{ color: 'white', '&:hover': { color: '#f5f5f5' } }}>
                                <GitHubIcon />
                            </Link>
                            <Link href="#" sx={{ color: 'white', '&:hover': { color: '#f5f5f5' } }}>
                                <FacebookOutlinedIcon />
                            </Link>
                            <Link href="#" sx={{ color: 'white', '&:hover': { color: '#f5f5f5' } }}>
                                <TwitterIcon />
                            </Link>
                            <Link href="#" sx={{ color: 'white', '&:hover': { color: '#f5f5f5' } }}>
                                <InstagramIcon />
                            </Link>
                        </Box>
                    </Box>
                </Container>

                <Button variant="contained" color="error" sx={{ position: 'fixed', bottom: 48, right: 25, textTransform: 'none', bgcolor: '#FF4C51', boxShadow: '0 1px 20px 1px #ff4c51 !important', '&:hover': { bgcolor: '#ff3037' } }} >
                    Buy Now
                </Button>
            </Box>

        </>
    );
}
