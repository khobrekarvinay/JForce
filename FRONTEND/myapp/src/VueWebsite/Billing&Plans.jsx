import React, { useState } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Radio,
    TextField,
    FormControlLabel,
    Switch,
    styled,
    IconButton,
    LinearProgress,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Checkbox,
    Stack,
    RadioGroup,
    Avatar
} from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

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

const mockBillingData = [
    {
        id: '#5089',
        client: 'Jamal Kerrod',
        image: 'https://via.placeholder.com/40',
        role: 'CEO',
        software: 'Software Development',
        total: '$3077',
        issuedDate: '09 May 2020',
        balance: 'Paid'
    },
    {
        id: '#5041',
        client: 'Shamus Tuttle',
        image: 'https://via.placeholder.com/40',
        role: 'CTO',
        software: 'Software Development',
        total: '$2230',
        issuedDate: '19 Nov 2020',
        balance: 'Paid'
    },
    {
        id: '#5027',
        client: 'Devonne Walbridge',
        image: 'https://via.placeholder.com/40',
        role: 'CFO',
        software: 'Software Development',
        total: '$2787',
        issuedDate: '25 Sep 2020',
        balance: 'Paid'
    },
    {
        id: '#5024',
        client: 'Ariella Filippyev',
        image: 'https://via.placeholder.com/40',
        role: 'CMO',
        software: 'Software Development',
        total: '$5285',
        issuedDate: '02 Aug 2020',
        balance: '-$202'
    },
    {
        id: '#5020',
        client: 'Roy Southerell',
        image: 'https://via.placeholder.com/40',
        role: 'COO',
        software: 'UI/UX Design & Development',
        total: '$5219',
        issuedDate: '15 Dec 2020',
        balance: 'Paid'
    },
    {
        id: '#4995',
        client: 'Raynell Clendennen',
        image: 'https://via.placeholder.com/40',
        role: 'CTO',
        software: 'Template Customization',
        total: '$3313',
        issuedDate: '09 Jun 2020',
        balance: 'Paid'
    },
    {
        id: '#4993',
        client: 'Lutero Aloshchechkin',
        image: 'https://via.placeholder.com/40',
        role: 'CFO',
        software: 'Unlimited Extended License',
        total: '$4836',
        issuedDate: '22 Oct 2020',
        balance: 'Paid'
    },
    {
        id: '#4989',
        client: 'Orson Grafton',
        image: 'https://via.placeholder.com/40',
        role: 'CMO',
        software: 'Unlimited Extended License',
        total: '$5293',
        issuedDate: '01 Aug 2020',
        balance: 'Paid'
    },
    {
        id: '#4989',
        client: 'Lorine Hischke',
        image: 'https://via.placeholder.com/40',
        role: 'COO',
        software: 'Unlimited Extended License',
        total: '$3623',
        issuedDate: '23 Sep 2020',
        balance: 'Paid'
    },
    {
        id: '#4965',
        client: 'Yelena O Hear',
        image: 'https://via.placeholder.com/40',
        role: 'CTO',
        software: 'Unlimited Extended License',
        total: '$3789',
        issuedDate: '18 Mar 2021',
        balance: '$666'
    }
];
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
            <Box sx={{ p: 3, mb: 4, maxWidth: 1400, width: '100%', mx: "auto", bgcolor: "white", borderRadius: 1, boxShadow: '0px 2px 10px rgba(76, 78, 100, 0.22)' }}>
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
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            Current Plan
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                color: 'text.primary',
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
                                color: 'text.secondary',
                                mb: 2,
                                fontSize: '0.875rem',
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            A simple start for everyone
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                mb: 0.5,
                                fontSize: '0.875rem',
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            Active until Dec 09, 2021
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'text.secondary',
                                mb: 2,
                                fontSize: '0.875rem',
                                fontFamily: '"Public Sans", sans-serif'
                            }}
                        >
                            We will send you a notification upon Subscription expiration
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography
                                sx={{
                                    fontSize: '1.25rem',
                                    fontWeight: 500,
                                    mr: 1,
                                    fontFamily: '"Public Sans", sans-serif'
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
                        width: { xs: '100%', md: '700px' },
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
            <Box>
                <CardContent>
                    <Box sx={{ p: 3, maxWidth: 1400, width: '100%', mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
                        <Typography variant="h6" gutterBottom>Payment Methods</Typography>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <Stack spacing={1} flex={1}>
                                <FormControl>
                                    <RadioGroup row>
                                        <FormControlLabel value="credit" control={<Radio />} label="Credit/Debit Card" />
                                        <FormControlLabel value="paypal" control={<Radio />} label="Paypal" />
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
                                <FormControlLabel control={<Switch sx={{ '& .MuiSwitch-thumb': { backgroundColor: '#7367f0' }, '& .MuiSwitch-switchBase': { backgroundColor: '#EBEBED' } }} />} label="Save card for future billing?" />
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
                                        <Typography sx={{ fontSize: 15, color: 'text.secondary', fontWeight: 'bold' }}>Tom McBride</Typography>
                                    </Box>
                                    {/* Third line: card number & expiry */}
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 1 }}>
                                        <Typography variant="body2" color="text.secondary">_* ** 9856</Typography>
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

                                        <Typography sx={{ fontSize: 15, color: 'text.secondary', fontWeight: 'bold' }}>Mildred Wagner</Typography>
                                    </Box>
                                    {/* Third line: card number and expiry */}
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 1 }}>
                                        <Typography variant="body2" color="text.secondary">_* ** 9856</Typography>
                                        <Typography variant="caption" color="text.secondary">Card expires at 10/27</Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Stack>
                        <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                            <Button variant="contained" color="primary" sx={{ bgcolor: '#6c5ce7' }}>Save Changes</Button>
                            <Button variant="contained" color="error" sx={{ bgcolor: '#9c9ea8' }}>Cancel</Button>
                        </Box>
                    </Box>
                </CardContent>
            </Box>
            {/* Billing Address Card -------------------------------------------------------------------------*/}
            <Box sx={{ p: 3, maxWidth: 1400, width: '100%', mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
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
                                    <MenuItem value="">Select Country</MenuItem>
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
                        <Button variant="outlined" sx={{ textTransform: "none", backgroundColor: '#EBEBED' }}>Discard</Button>
                    </Stack>
                </Stack>
            </Box>
            {/* Billing History Card */}
            <Card sx={{ mt: 3, boxShadow: '0px 2px 10px rgba(76, 78, 100, 0.22)' }}>
                <CardContent>
                    <Typography
                        variant="h6"
                        sx={{
                            mb: 3,
                            fontSize: '1.25rem',
                            fontWeight: 500,
                            fontFamily: '"Public Sans", sans-serif'
                        }}
                    >
                        Billing History
                    </Typography>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="billing history table">
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox" sx={{ borderBottom: '1px solid rgba(76, 78, 100, 0.2)', py: 2, fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary', fontFamily: '"Public Sans", sans-serif' }} >
                                        <Checkbox color="primary" indeterminate={selectAll} checked={selectAll} onChange={handleSelectAllClick} />
                                    </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid rgba(76, 78, 100, 0.2)', py: 2, fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary', fontFamily: '"Public Sans", sans-serif' }} > Invoice ID </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid rgba(76, 78, 100, 0.2)', py: 2, fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary', fontFamily: '"Public Sans", sans-serif' }} > Client </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid rgba(76, 78, 100, 0.2)', py: 2, fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary', fontFamily: '"Public Sans", sans-serif' }} > Total </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid rgba(76, 78, 100, 0.2)', py: 2, fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary', fontFamily: '"Public Sans", sans-serif' }} > Issued Date </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid rgba(76, 78, 100, 0.2)', py: 2, fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary', fontFamily: '"Public Sans", sans-serif' }} > Balance </TableCell>
                                    <TableCell sx={{ borderBottom: '1px solid rgba(76, 78, 100, 0.2)', py: 2, fontSize: '0.75rem', fontWeight: 600, color: 'text.secondary', fontFamily: '"Public Sans", sans-serif' }} > Actions </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mockBillingData.map((row) => (
                                    <TableRow key={row.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: 'rgba(76, 78, 100, 0.04)' }, '&:hover': { backgroundColor: 'rgba(76, 78, 100, 0.08)' } }} >
                                        <TableCell padding="checkbox" sx={{ py: 2, fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', color: 'text.primary' }} >
                                            <Checkbox color="primary" checked={isSelected(row.id)} onChange={(event) => handleClick(event, row.id)} />
                                        </TableCell>
                                        <TableCell sx={{ py: 2, fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', color: 'text.primary' }} >
                                            <Typography sx={{ color: 'primary.main' }}>{row.id}</Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Avatar sx={{ bgcolor: stringToColor(), width: 40, height: 40, mr: 2 }} >
                                                    {row.client.split(' ')[0][0]}{row.client.split(' ')[1][0]}
                                                </Avatar>
                                                <Box>
                                                    <Typography sx={{ fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif' }} >
                                                        {row.client}
                                                    </Typography>
                                                    <Typography component="span" sx={{ fontSize: '0.75rem', color: 'text.secondary' }} >
                                                        {row.software}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell sx={{ py: 2, fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', color: 'text.primary' }} >
                                            {row.total}
                                        </TableCell>
                                        <TableCell sx={{ py: 2, fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', color: 'text.secondary' }} >
                                            {row.issuedDate}
                                        </TableCell>
                                        <TableCell>
                                            <Typography sx={{ fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', color: row.balance === 'Paid' ? 'success.main' : 'error.main', fontWeight: 500 }} >
                                                {row.balance}
                                            </Typography>
                                        </TableCell>
                                        <TableCell sx={{ py: 2, fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', color: 'text.primary' }} >
                                            <Stack direction="row" spacing={0}>
                                                <Button variant="outlined" startIcon={<VisibilityIcon />} sx={{ border: 'none' }} />
                                                <Button variant="outlined" startIcon={<DeleteIcon />} sx={{ border: 'none' }} />
                                                <Button variant="outlined" startIcon={<MoreVertIcon />} sx={{ border: 'none' }} />
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Box >
    );
}

export default BillingContent;

{/* Billing History Card */ }
