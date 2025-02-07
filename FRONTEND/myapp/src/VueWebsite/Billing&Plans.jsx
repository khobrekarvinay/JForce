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
    RadioGroup
} from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Alert from '@mui/material/Alert';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MoreVertIcon from '@mui/icons-material/MoreVert';

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
            {/* Current Plan Section */}
            <Box sx={{ p: 3, maxWidth: 1400, width: '100%', mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
                <Card sx={{ mb: 3, display: 'flex', gap: 0.5 }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6" sx={{ fontSize: '1.25rem', fontWeight: 500, mb: 1, fontFamily: 'Public Sans' }}>
                            Current Plan
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 600, fontSize: '1.25rem', fontFamily: 'Public Sans' }}>
                            Your Current Plan is Basic
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A simple start for everyone
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                            Active until Dec 09, 2021
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            We will send you a notification upon Subscription expiration
                        </Typography>
                        <Typography variant="h6" sx={{ mt: 2, fontSize: '1.25rem', fontFamily: 'Public Sans' }}>
                            $199 Per Month{' '}
                            <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold', backgroundColor: '#e6d8ff', borderRadius: '4px', padding: '2px 4px', fontFamily: 'Public Sans' }}>
                                Popular
                            </Box>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Standard plan for small to medium businesses
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                            <Button variant="contained">Upgrade Plan</Button>
                            <Button variant="contained" color="error" sx={{ bgcolor: '#ffe2e3', color: 'error.main' }}>Cancel Subscription</Button>
                        </Box>
                    </CardContent>
                    <Box sx={{ ml: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 1, minWidth: 250 }}>
                        <Alert severity="warning" sx={{ width: '100%' }}>
                            <Box>We need your attention! </Box>
                            <Box>Your plan requires update. </Box>
                        </Alert>
                        <Box sx={{ width: '100%' }}>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, display: 'flex', justifyContent: 'space-between' }}>
                                Days
                                <Typography variant="body2" color="text.secondary">12 of 30 days</Typography>
                            </Typography>
                            <LinearProgress variant="determinate" value={40} sx={{ height: 8, borderRadius: 4, backgroundColor: 'action.hover', '& .MuiLinearProgress-bar': { backgroundColor: 'primary.main', borderRadius: 4 } }} />
                            <Typography variant="caption" sx={{ color: '#ffd600' }}>
                                18 days remaining until your plan requires update
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
            {/* Payment Methods Section ---------------------------------------- */}
            <Card>
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
                                <StyledTextField fullWidth placeholder="** ** 9856" variant="outlined" sx={{ textTransform: 'none' }} />
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
                            <Button variant="contained" color="error" sx={{ bgcolor: '#ebebed' }}>Cancel</Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
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
            <Card sx={{ mt: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Billing History</Typography>
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ width: '10%' }}>Invoice ID</TableCell>
                                    <TableCell sx={{ width: '20%' }}>Client</TableCell>
                                    <TableCell sx={{ width: '20%' }}>Software</TableCell>
                                    <TableCell sx={{ width: '20%' }}>Total</TableCell>
                                    <TableCell sx={{ width: '20%' }}>Issued Date</TableCell>
                                    <TableCell sx={{ width: '20%' }}>Balance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {mockBillingData.map((row) => (
                                    <StyledTableRow key={(row.id)}>
                                        <TableCell component="th" scope="row">{(row.id)}</TableCell>
                                        <TableCell>
                                            <ImageWrapper>
                                                <CenteredBox width={40} height={40} borderRadius="50%" bgcolor="secondary.light" color="white" marginRight={2} component="img" src={row.image} alt="clientImage" />
                                                <Typography>{row.client}</Typography>
                                                <Typography variant="body2" color="text.secondary">{row.role}</Typography>
                                            </ImageWrapper>
                                        </TableCell>
                                        <TableCell>{row.software}</TableCell>
                                        <TableCell>{row.total}</TableCell>
                                        <TableCell>{row.issuedDate}</TableCell>
                                        <TableCell>
                                            <Typography variant="body2" color={row.balance === 'Paid' ? 'success.main' : 'error.main'}>
                                                {row.balance}
                                            </Typography>
                                        </TableCell>
                                    </StyledTableRow> // added closing tag here
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
