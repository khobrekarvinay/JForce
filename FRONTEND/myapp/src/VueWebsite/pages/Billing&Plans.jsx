import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, Radio, TextField, FormControlLabel, Switch, styled, IconButton, LinearProgress, Select, MenuItem, InputLabel, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Stack, RadioGroup, Avatar, ThemeProvider, createTheme } from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Alert from '@mui/material/Alert';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import MaterialTable from '@material-table/core';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import InfoIcon from '@mui/icons-material/Info';
import PieChartIcon from '@mui/icons-material/PieChart';
import SaveIcon from '@mui/icons-material/Save';
import TonalityOutlinedIcon from '@mui/icons-material/TonalityOutlined';


const CenteredBox = styled(Box)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        height: '40px',
        fontSize: '0.875rem',
        fontFamily: '"Public Sans", sans-serif',
        backgroundColor: '#fff',
        '& input': {
            padding: '8px 14px',
            '&::placeholder': {
                fontSize: '0.875rem',
                opacity: 0.5,
                fontFamily: '"Public Sans", sans-serif',
            },
        },
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.23)',
            borderWidth: '1px',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(0, 0, 0, 0.87)',
            borderWidth: '1px',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgb(115, 103, 240)',
            borderWidth: '2px',
        },
    },
});

const StyledSelect = styled(Select)(({ theme }) => ({
    '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.23)',
        borderWidth: '1px',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgba(0, 0, 0, 0.87)',
        borderWidth: '1px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'rgb(115, 103, 240)',
        borderWidth: '2px',
    },
}));

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary
}));

const ImageWrapper = styled(Box)({
    display: 'flex',
    alignItems: 'center'
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover
    },
    '&:last-child td, &:last-child th': {
        border: 0
    }
}));

const columns = [
    {
        title: "#", field: "id", cellStyle: {
            color: '#7367f0'
        }
    },
    {
        title: 'Status',
        field: 'status',
        render: (rowData) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {rowData.status === 'downloaded' && (
                    <DownloadIcon sx={{ backgroundColor: '#EBEBED', padding: 1, borderRadius: '50%' }} fontSize="small" />
                )}
                {rowData.status === 'sent' && (
                    <CheckCircleOutlinedIcon sx={{ backgroundColor: '#EBEBED', padding: 1, borderRadius: '50%' }} />
                )}
                {rowData.status === 'past_due' && (
                    <InfoIcon sx={{ backgroundColor: '#FFE2E3', padding: 1, borderRadius: '50%' }} fontSize="small" color="warning" />
                )}
                {rowData.status === 'paid' && (
                    <TonalityOutlinedIcon sx={{ backgroundColor: '#DDF6E8', padding: 1, borderRadius: '50%' }} fontSize="small" color="success" />
                )}
                {rowData.status === 'partial_payment' && (
                    <TonalityOutlinedIcon sx={{ backgroundColor: '#DDF6E8', padding: 1, borderRadius: '50%' }} fontSize="small" color="success" />
                )}

                {rowData.status === 'draft' && (
                    <SaveIcon sx={{ backgroundColor: '#E9E7FD', padding: 1, borderRadius: '50%' }} fontSize="small" color='secondary' />
                )}
            </Box>
        ),
    },
    {
        title: "Client", field: "client",
        render: (rowData) => (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box>
                    <Avatar {...stringAvatar(rowData.client)} />
                </Box>
                <Box>
                    <Typography sx={{ ml: 2 }}>{rowData.client}</Typography>
                    <Typography sx={{ ml: 2, fontSize: '13px', color: '#6d6b77' }}>{rowData.software}</Typography>
                </Box>
            </Box>
        ),
        cellStyle: {
            minWidth: 300,
            maxWidth: 500
        }
    },
    { title: "Total", field: "total" },
    { title: "IssuedDate", field: "issuedDate" },
    {
        title: "Balance", field: "balance",
        cellStyle: {
            color: '#28C76F',
        }
    },
    {
        title: "Actions", field: "actions",
        render: (rowData) => (
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                <IconButton>
                    <DeleteOutlineOutlinedIcon />
                </IconButton>
                <IconButton>
                    <RemoveRedEyeOutlinedIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </Box>
        )
    }
];

const mockBillingData = [
    { id: '#5089', client: 'Jamal Kerrod', image: 'https://via.placeholder.com/40', status: 'sent', software: 'Software Development', total: '$3077', issuedDate: '09 May 2020', balance: 'Paid' },
    { id: '#5041', client: 'Shamus Tuttle', image: 'https://via.placeholder.com/40', status: 'sent', software: 'Software Development', total: '$2230', issuedDate: '19 Nov 2020', balance: 'Paid' },
    { id: '#5027', client: 'Devonne Walbridge', image: 'https://via.placeholder.com/40', status: 'partial_payment', software: 'Software Development', total: '$2787', issuedDate: '25 Sep 2020', balance: 'Paid' },
    { id: '#5024', client: 'Ariella Filippyev', image: 'https://via.placeholder.com/40', status: 'downloaded', software: 'Unlimited Extended License', total: '$5285', issuedDate: '02 Aug 2020', balance: '-$202' },
    { id: '#5020', client: 'Roy Southerell', image: 'https://via.placeholder.com/40', status: 'paid', software: 'UI/UX Design & Development', total: '$5219', issuedDate: '15 Dec 2020', balance: 'Paid' },
    { id: '#4995', client: 'Raynell Clendennen', image: 'https://via.placeholder.com/40', status: 'partial_payment', software: 'Template Customization', total: '$3313', issuedDate: '09 Jun 2020', balance: 'Paid' },
    { id: '#4993', client: 'Lutero Aloshechkin', image: 'https://via.placeholder.com/40', status: 'draft', software: 'Unlimited Extended License', total: '$4836', issuedDate: '22 Oct 2020', balance: 'Paid' },
    { id: '#4989', client: 'Orson Grafton', image: 'https://via.placeholder.com/40', status: 'draft', software: 'Unlimited Extended License', total: '$5293', issuedDate: '01 Aug 2020', balance: 'Paid' },
    { id: '#4989', client: 'Lorine Hischke', image: 'https://via.placeholder.com/40', status: 'past_due', software: 'Unlimited Extended License', total: '$3623', issuedDate: '23 Sep 2020', balance: 'Paid' },
    { id: '#4965', client: 'Yelena O Hear', image: 'https://via.placeholder.com/40', status: 'sent', software: 'Unlimited Extended License', total: '$3789', issuedDate: '18 Mar 2021', balance: '$666' },
    { id: '#4963', client: 'Morgan Ewbanks', image: 'https://via.placeholder.com/40', status: 'sent', software: 'Unlimited Extended License', total: '$2029', issuedDate: '28 Mar 2020', balance: 'Paid' },
    { id: '#4943', client: 'Fancy Hunnicot', image: 'https://via.placeholder.com/40', status: 'paid', status: 'downloaded', software: 'Template Customization', total: '$3198', issuedDate: '16 Aug 2020', balance: '-$253' },
    { id: '#4917', client: 'Charo Praill', image: 'https://via.placeholder.com/40', status: 'past_due', software: 'Software Development', total: '$3367', issuedDate: '24 Dec 2020', balance: 'Paid' },
    { id: '#4881', client: 'Zeb Kenningham', image: 'https://via.placeholder.com/40', status: 'paid', software: 'UI/UX Design & Development', total: '$2771', issuedDate: '24 Jun 2020', balance: 'Paid' },
    { id: '#4877', client: 'Tudor Pereira', image: 'https://via.placeholder.com/40', status: 'sent', software: 'UI/UX Design & Development', total: '$2713', issuedDate: '22 Nov 2020', balance: '$407' },
    { id: '#4831', client: 'Dorris Grigoriev', image: 'https://via.placeholder.com/40', status: 'partial_payment', software: 'UI/UX Design & Development', total: '$4056', issuedDate: '30 Jun 2020', balance: '$815' },
    { id: '#4798', client: 'Lloyd Janaszkiewicz', image: 'https://via.placeholder.com/40', status: 'past_due', software: 'Unlimited Extended License', total: '$2825', issuedDate: '14 Oct 2020', balance: '-$459' },
    { id: '#4794', client: 'Hephzibah Hanshawe', image: '(link unavailable)', status: 'paid', software: 'Template Customization', total: '$2719', issuedDate: '04 Feb 2021', balance: 'Paid' },
    { id: '#4790', client: 'Ozzie Youles', image: '(link unavailable)', status: 'downloaded', software: 'Software Development', total: '$4776', issuedDate: '02 Jun 2020', balance: '$305' },
    { id: '#4765', client: 'Pryce Scothorn', image: '(link unavailable)', status: 'paid', software: 'Unlimited Extended License', total: '$3904', issuedDate: '30 Sep 2020', balance: '$951' },
    { id: '#4748', client: 'Ruddie Gabb', image: '(link unavailable)', status: 'past_due', software: 'UI/UX Design & Development', total: '$5591', issuedDate: '07 Jun 2020', balance: 'Paid' },
    { id: '#4743', client: 'Britteny Barham', image: '(link unavailable)', status: 'sent', software: 'UI/UX Design & Development', total: '$3668', issuedDate: '15 Dec 2020', balance: '$731' },
    { id: '#4716', client: 'Ninette Forde', image: '(link unavailable)', status: 'downloaded', software: 'Template Customization', total: '$2872', issuedDate: '18 Oct 2020', balance: 'Paid' },
    { id: '#4687', client: 'Peggy Viccary', image: '(link unavailable)', status: 'past_due', software: 'Template Customization', total: '$4309', issuedDate: '10 Feb 2021', balance: '-$205' },
    { id: '#4683', client: 'Isidor Navarro', image: '(link unavailable)', status: 'partial_payment', software: 'Software Development', total: '$2060', issuedDate: '08 Dec 2020', balance: 'Paid' },
    { id: '#4677', client: 'Syman Asbery', image: '(link unavailable)', status: 'downloaded', software: 'Template Customization', total: '$3503', issuedDate: '22 May 2020', balance: 'Paid' },
    { id: '#4651', client: 'Jennica Aronov', image: '(link unavailable)', status: 'downloaded', software: 'Template Customization', total: '$2783', issuedDate: '22 Oct 2020', balance: 'Paid' },
    { id: '#4632', client: 'Eadith Garshore', image: '(link unavailable)', status: 'sent', software: 'Template Customization', total: '$5565', issuedDate: '06 Mar 2021', balance: 'Paid' },
    { id: '#4593', client: 'Darwin Dory', image: '(link unavailable)', status: 'paid', software: 'Template Customization', total: '$3325', issuedDate: '02 Mar 2021', balance: '$361' },
    { id: '#4582', client: 'Keane Barfitt', image: '(link unavailable)', status: 'partial_payment', software: 'Template Customization', total: '$5612', issuedDate: '12 Apr 2020', balance: '$883' },
    { id: '#4575', client: 'Hermia Fosten', image: '(link unavailable)', status: 'sent', software: 'UI/UX Design & Development', total: '$3102', issuedDate: '25 Aug 2020', balance: '-$153' },
    { id: '#4567', client: 'Deny Pell', image: '(link unavailable)', status: 'draft', software: 'Unlimited Extended License', total: '$3171', issuedDate: '25 Sep 2020', balance: '-$205' },
    { id: '#4538', client: 'Brandy Cleveland', image: '(link unavailable)', status: 'draft', software: 'UI/UX Design & Development', total: '$2483', issuedDate: '10 Jul 2020', balance: 'Paid' },
    { id: '#4535', client: 'Ignace Levington', image: '(link unavailable)', status: 'partial_payment', software: 'UI/UX Design & Development', total: '$3128', issuedDate: '10 Sep 2020', balance: 'Paid' },
    { id: '#4528', client: 'Rahal Bezemer', image: '(link unavailable)', status: 'partial_payment', software: 'Software Development', total: '$3208', issuedDate: '06 Sep 2020', balance: 'Paid' },
    { id: '#4515', client: 'Kendell Longstreeth', image: '(link unavailable)', status: 'downloaded', software: 'Software Development', total: '$4749', issuedDate: '11 Feb 2021', balance: 'Paid' },
    { id: '#4511', client: 'Donni Goning', image: '(link unavailable)', status: 'draft', software: 'Software Development', total: '$4558', issuedDate: '01 Oct 2020', balance: 'Paid' },
    { id: '#4506', client: 'Briny Undrell', image: '(link unavailable)', status: 'downloaded', software: 'Unlimited Extended License', total: '$3719', issuedDate: '03 Nov 2020', balance: 'Paid' },
    { id: '#4477', client: 'Roxy Floodgate', image: '(link unavailable)', status: 'draft', software: 'Software Development', total: '$3428', issuedDate: '23 Apr 2020', balance: '$724' },
    { id: '#4456', client: 'Claudine Mechell', image: '(link unavailable)', status: 'sent', software: 'Software Development', total: '$5578', issuedDate: '23 Jul 2020', balance: 'Paid' },
    { id: '#4449', client: 'Tom OLoughlin', image: '(link unavailable)', status: 'downloaded', software: 'Unlimited Extended License', total: '$5200', issuedDate: '17 Jan 2021', balance: 'Paid' },
    { id: '#4446', client: 'Gray Waldock', image: '(link unavailable)', status: 'sent', software: 'Software Development', total: '$2477', issuedDate: '01 Apr 2020', balance: 'Paid' },
    { id: '#4439', client: 'Bealle Daskiewicz', image: '(link unavailable)', status: 'sent', software: 'Unlimited Extended License', total: '$2032', issuedDate: '30 Nov 2020', balance: 'Paid' },
    { id: '#4437', client: 'Orbadiah Norton', image: '(link unavailable)', status: 'downloaded', software: 'Template Customization', total: '$3851', issuedDate: '25 Aug 2020', balance: 'Paid' },
    { id: '#4416', client: 'Shelly Pyott', image: '(link unavailable)', status: 'sent', status: 'downloaded', status: 'sent', software: 'Unlimited Extended License', total: '$4372', issuedDate: '17 Sep 2020', balance: '-$344' },
    { id: '#4410', client: 'Keslie Lermit', image: '(link unavailable)', status: 'sent', software: 'UI/UX Design & Development', total: '$4077', issuedDate: '01 Feb 2021', balance: 'Paid' },
    { id: '#4401', client: 'Bealle Daskiewicz', image: '(link unavailable)', status: 'sent', software: 'Unlimited Extended License', total: '$2032', issuedDate: '30 Nov 2020', balance: 'Paid' },
    { id: '#4375', client: 'Dido Smitton', image: '(link unavailable)', status: 'partial_payment', software: 'Template Customization', total: '$5181', issuedDate: '22 Oct 2020', balance: 'Paid' },
    { id: '#4341', client: 'Ninnetta Roylance', image: '(link unavailable)', status: 'downloaded', software: 'Software Development', total: '$3740', issuedDate: '01 Nov 2020', balance: 'Paid' },
    { id: '#4323', client: 'Hershel Pennetti', image: '(link unavailable)', status: 'paid', software: 'Template Customization', total: '$2869', issuedDate: '22 Mar 2021', balance: 'Paid' }
];

const theme = createTheme({
    direction: "ltr",
});

function stringToColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

function BillingContent() {
    // Billing History Table State
    const [selectedBillingEntries, setSelectedBillingEntries] = useState([]);
    const [selectAll, setSelectAll] = useState(false);
    const [billingData, setBillingData] = useState(mockBillingData);
    const [pageSize, setPageSize] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [invoiceStatusFilter, setInvoiceStatusFilter] = useState('');

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = billingData.map((n) => n.id);
            setSelectedBillingEntries(newSelecteds);
            setSelectAll(true);
            return;
        }
        setSelectedBillingEntries([]);
        setSelectAll(false);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selectedBillingEntries.indexOf(id);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedBillingEntries, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedBillingEntries.slice(1));
        } else if (selectedIndex === selectedBillingEntries.length - 1) {
            newSelected = newSelected.concat(selectedBillingEntries.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedBillingEntries.slice(0, selectedIndex),
                selectedBillingEntries.slice(selectedIndex + 1)
            );
        }
        setSelectedBillingEntries(newSelected);
    };

    const isSelected = (id) => selectedBillingEntries.indexOf(id) !== -1;

    // Filtered and Paged Data
    const filteredData = billingData.filter(
        (item) =>
            item.client.toLowerCase().includes(searchTerm.toLowerCase()) &&
            (invoiceStatusFilter === '' || item.balance === invoiceStatusFilter)
    );

    return (
        <Box>
            {/* Current Plan Section -----------------------------------------------------------*/}
            <Box sx={{ mb: 4, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 1}}>
                <Box sx={{
                    display: 'flex',
                    gap: 4,
                    flexDirection: { xs: 'column', md: 'row' }
                }}>
                    {/* Left Content */}
                    <Box sx={{ flex: 1 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontSize: '1.25rem',
                                fontWeight: 500,
                                mb: 3,
                                fontFamily: '"Public Sans", sans-serif', color: '#444050'
                            }}
                        >
                            Current Plan
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: '#444050',
                                fontWeight: 500,
                                fontSize: '1rem',
                                mb: 1,
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            Your Current Plan is Basic
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#6D6B77',
                                mb: 2,
                                fontSize: '0.875rem',
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            A simple start for everyone
                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                color: '#444050',
                                fontSize: '1rem',
                                mb: 0.5,
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            Active until Dec 09, 2021
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#6D6B77',
                                mb: 2,
                                fontSize: '0.875rem',
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            We will send you a notification upon Subscription expiration
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography variant='h6'
                                sx={{
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    mr: 1,
                                    fontFamily: '"Public Sans", sans-serif', color: '#444050'
                                }}
                            >
                                $199 Per Month
                            </Typography>
                            <Box
                                component="span"
                                sx={{
                                    bgcolor: '#e8e7fd',
                                    color: '#7367f0',
                                    px: 1,
                                    py: 0.5,
                                    borderRadius: 1,
                                    fontSize: '0.8125rem',
                                    fontWeight: 500,
                                    fontFamily: '"Public Sans", sans-serif'
                                }}
                            >
                                Popular
                            </Box>
                        </Box>

                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                mb: 3,
                                fontSize: '0.875rem',
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            Standard plan for small to medium businesses
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#7367f0',
                                    '&:hover': { bgcolor: '#6054e6' },
                                    textTransform: 'none',
                                    fontFamily: '"Public Sans", sans-serif'
                                }}
                            >
                                Upgrade Plan
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#ef5350',
                                    color: '#fff',
                                    '&:hover': { bgcolor: '#ffe2e3' },
                                    textTransform: 'none',
                                    fontFamily: '"Public Sans", sans-serif'
                                }}
                            >
                                Cancel Subscription
                            </Button>
                        </Box>
                    </Box>

                    {/* Right Content */}
                    <Box sx={{
                        width: { xs: '100%', md: '50%' },
                        p: 6,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: 2
                    }}>
                        <Alert severity="warning" icon={<WarningAmberIcon />}
                            sx={{
                                '& .MuiAlert-message': {
                                    fontFamily: '"Public Sans", sans-serif',
                                    color: '#ffa54f' // Change text color to yellow
                                }
                            }} >
                            <Typography variant="subtitle1" sx={{ // Increase font size by using subtitle1 instead of subtitle2
                                fontWeight: 600,
                                mb: 0.5,
                                fontFamily: '"Public Sans", sans-serif'
                            }} >
                                We need your attention!
                            </Typography>
                            <Typography variant="body1" sx={{ // Increase font size by using body1 instead of body2
                                fontFamily: '"Public Sans", sans-serif'
                            }} >
                                Your plan requires update
                            </Typography>
                        </Alert>
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mb: 1
                            }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        fontFamily: '"Public Sans", sans-serif'
                                    }}
                                >
                                    Days
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: 'text.secondary',
                                        fontFamily: '"Public Sans", sans-serif'
                                    }}
                                >
                                    12 of 30 Days
                                </Typography>
                            </Box>

                            <LinearProgress
                                variant="determinate"
                                value={40}
                                sx={{
                                    height: 8,
                                    borderRadius: 4,
                                    bgcolor: '#ebeef0',
                                    '& .MuiLinearProgress-bar': {
                                        bgcolor: '#7367f0',
                                        borderRadius: 4
                                    }
                                }}
                            />

                            <Typography
                                variant="caption"

                                sx={{
                                    color: 'text.secondary',
                                    display: 'block',
                                    mt: 1,
                                    fontFamily: '"Public Sans", sans-serif'
                                }}
                            >
                                18 days remaining until your plan requires update
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Payment Methods Section ---------------------------------------- */}
            <Box sx={{ p: 3, mb: 4, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h6" sx={{ color: '#444050' }} gutterBottom>Payment Methods</Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <Stack spacing={1} flex={1}>
                        <FormControl>
                            <RadioGroup row sx={{ color: '#444050' }}>
                                <FormControlLabel value="credit" control={<Radio />} label="Credit/Debit Card" />
                                <FormControlLabel value="paypal" control={<Radio />} label="Paypal account" />
                            </RadioGroup>
                        </FormControl>
                        <InputLabel>Card Number</InputLabel>
                        <StyledTextField fullWidth placeholder="1356 3215 6548 9856" variant="outlined" sx={{ textTransform: 'none' }} />
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                            <Stack spacing={1} flex={1}>
                                <InputLabel>Name</InputLabel>
                                <StyledTextField fullWidth placeholder="John Doe" variant="outlined" sx={{ textTransform: 'none' }} />
                            </Stack>
                            <Stack spacing={1} flex={1}>
                                <InputLabel>Exp. Date</InputLabel>
                                <StyledTextField fullWidth placeholder="MM/YY" variant="outlined" sx={{ textTransform: 'none' }} />
                            </Stack>
                            <Stack spacing={1} flex={1}>
                                <InputLabel>CVV Code</InputLabel>
                                <StyledTextField fullWidth placeholder="654" variant="outlined" sx={{ textTransform: 'none' }} />
                            </Stack>
                        </Stack>
                        <FormControlLabel sx={{ color: '#444050' }} control={<Switch />} label="Save card for future billing?" />
                    </Stack>


                    {/* My Cards Section ------------------------------------------------------*/}
                    <Stack spacing={2} flex={1}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#f3f2f3', padding: 2, marginBottom: 2 }}>
                            {/* {/_ First line: logo, edit, delete _/} */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <ImageWrapper>
                                    <CenteredBox width={45} height={25} color="white" marginRight={2} component="img" src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/mastercard.png" alt="masterCardImage" />
                                </ImageWrapper>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button color="primary" sx={{ color: '#6c5ce7', bgcolor: '#e9d8fd', mr: 1, textTransform: 'none' }}>Edit</Button>
                                    <Button color="error" sx={{ color: '#c14647', bgcolor: '#ffe2e3', textTransform: 'none' }}>Delete</Button>
                                </Box>
                            </Box>
                            {/* Second line: name */}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 1 }}>
                                <Typography sx={{ fontSize: 15, color: '#444050', fontWeight: 'bold' }}>Tom McBride</Typography>
                            </Box>
                            {/* Third line: card number & expiry */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 1 }}>
                                <Typography variant="body2" sx={{ color: '#6D6B77' }}>_* ** 9856</Typography>
                                <Typography variant="caption" color="text.secondary">Card expires at 12/26</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#f3f2f3', padding: 2, marginBottom: 2 }}>
                            {/* First line: logo, edit, delete */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <ImageWrapper>
                                    <CenteredBox width={50} height={20} color="white" marginRight={2} component="img" src="https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/icons/payments/visa.png" alt="visaImage" />
                                </ImageWrapper>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Button color="primary" sx={{ color: '#6c5ce7', bgcolor: '#e9d8fd', mr: 1, textTransform: 'none' }}>Edit</Button>
                                    <Button color="error" sx={{ color: '#c14647', bgcolor: '#ffe2e3', textTransform: 'none' }}>Delete</Button>
                                </Box>
                            </Box>
                            {/* Second line: name */}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: 1 }}>

                                <Typography sx={{ fontSize: 15, color: '#444050', fontWeight: 'bold' }}>Mildred Wagner</Typography>
                            </Box>
                            {/* Third line: card number and expiry */}
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 1 }}>
                                <Typography variant="body2" color="text.secondary">_* ** 9856</Typography>
                                <Typography variant="caption" color="text.secondary">Card expires at 10/27</Typography>
                            </Box>
                        </Box>
                    </Stack>
                </Stack>
                <Stack direction="row" gap={2}>
                    <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }}>Save Changes</Button>
                    <Button sx={{ textTransform: "none", backgroundColor: '#EBEBED' }}>Cancle</Button>
                </Stack>
            </Box>

            {/* Billing Address Card -------------------------------------------------------------------------*/}
            <Box sx={{ p: 3, mb: 4, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>Billing Address</Typography>
                <Stack spacing={2}>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Company Name</InputLabel>
                            <StyledTextField fullWidth placeholder="Pixinvent" variant="outlined" />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Billing Email</InputLabel>
                            <StyledTextField fullWidth placeholder="john.doe@example.com" variant="outlined" />
                        </Stack>
                    </Stack>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Tax ID</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter Tax ID" variant="outlined" />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>VAT Number</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter VAT Number" variant="outlined" />
                        </Stack>
                    </Stack>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Mobile</InputLabel>
                            <StyledTextField fullWidth placeholder="+1 202 555 0111" variant="outlined" />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Country</InputLabel>
                            <FormControl fullWidth>
                                <StyledSelect displayEmpty sx={{ height: '40px', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif' }} >
                                    <MenuItem>Select Country</MenuItem>
                                    <MenuItem value="USA">USA</MenuItem>
                                    {/* Add more countries here */}
                                </StyledSelect>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Billing Address</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter Billing Address" variant="outlined" />
                        </Stack>
                    </Stack>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>State</InputLabel>
                            <StyledTextField fullWidth placeholder="California" variant="outlined" />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Zip Code</InputLabel>
                            <StyledTextField fullWidth placeholder="231465" variant="outlined" />
                        </Stack>
                    </Stack>
                    <Stack direction="row" gap={2}>
                        <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }}>Save Changes</Button>
                        <Button sx={{ textTransform: "none", backgroundColor: '#EBEBED' }}>Discard</Button>
                    </Stack>
                </Stack>
            </Box>

            {/* Billing card / Advance data table */}
            <Box sx={{ mb: 4, maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2}}>
                <ThemeProvider theme={theme}>
                    <MaterialTable sx={{ padding: 4 }} title="Billing History" columns={columns} data={mockBillingData}
                        options={{
                            headerStyle: {
                                color: '#444050', textTransform: 'uppercase', fontWeight: 'bold'
                            },
                            selection: true,
                            searchFieldVariant: 'standard', searchAutoFocus: true,
                            searchFieldStyle: {
                                '& .MuiOutlinedInput-root': {
                                    height: '40px',
                                    fontSize: '0.875rem',
                                    fontFamily: '"Public Sans", sans-serif',
                                    backgroundColor: '#fff',
                                    '& input': {
                                        padding: '8px 14px',
                                        '&::placeholder': {
                                            fontSize: '0.875rem',
                                            opacity: 0.5,
                                            fontFamily: '"Public Sans", sans-serif',
                                        },
                                    },
                                    '& .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(0, 0, 0, 0.23)',
                                        borderWidth: '1px',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgba(0, 0, 0, 0.87)',
                                        borderWidth: '1px',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                        borderColor: 'rgb(115, 103, 240)',
                                        borderWidth: '2px',
                                    },
                                },
                            },
                            paging: true, pageSizeOptions: [10, 25, 50, 100], pageSize: 10, showFirstLastPageButtons: false, 
                            paginationType: 'stepped', paginationPosition:'top',
                            paginationAlignment:'flex-start'
                        }}

                        localization={{
                            pagination: {
                                labelRowsPerPage: 'Show'
                            }
                        }}

                    />
                </ThemeProvider>
            </Box>

        </Box >
    );
}

export default BillingContent;

