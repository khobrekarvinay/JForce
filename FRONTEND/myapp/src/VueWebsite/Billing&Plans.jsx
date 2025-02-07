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
    Stack
} from '@mui/material';
import { styled as muiStyled } from '@mui/material/styles';
import CreditCardIcon from '@mui/icons-material/CreditCard';
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

const BuyNowButton = muiStyled(Button)(({ theme }) => ({
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark
    }
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
        software: 'Software Development',
        total: '$3077',
        issuedDate: '09 May 2020',
        balance: 'Paid'
    },
    {
        id: '#5041',
        client: 'Shamus Tuttle',
        software: 'Software Development',
        total: '$2230',
        issuedDate: '19 Nov 2020',
        balance: 'Paid'
    },
    {
        id: '#5027',
        client: 'Devonne Walbridge',
        software: 'Software Development',
        total: '$2787',
        issuedDate: '25 Sep 2020',
        balance: 'Paid'
    },
    {
        id: '#5024',
        client: 'Ariella Filippyev',
        software: 'Software Development',
        total: '$5285',
        issuedDate: '02 Aug 2020',
        balance: '-$202'
    },
    {
        id: '#5020',
        client: 'Roy Southerell',
        software: 'UI/UX Design & Development',
        total: '$5219',
        issuedDate: '15 Dec 2020',
        balance: 'Paid'
    },
    {
        id: '#4995',
        client: 'Raynell Clendennen',
        software: 'Template Customization',
        total: '$3313',
        issuedDate: '09 Jun 2020',
        balance: 'Paid'
    },
    {
        id: '#4993',
        client: 'Lutero Aloshchechkin',
        software: 'Unlimited Extended License',
        total: '$4836',
        issuedDate: '22 Oct 2020',
        balance: 'Paid'
    },
    {
        id: '#4989',
        client: 'Orson Grafton',
        software: 'Unlimited Extended License',
        total: '$5293',
        issuedDate: '01 Aug 2020',
        balance: 'Paid'
    },
    {
        id: '#4989',
        client: 'Lorine Hischke',
        software: 'Unlimited Extended License',
        total: '$3623',
        issuedDate: '23 Sep 2020',
        balance: 'Paid'
    },
    {
        id: '#4965',
        client: 'Yelena O\'Hear',
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
            <Card sx={{ mb: 3 }}>
                <CardContent><Typography variant="h6" sx={{ fontSize: '1.25rem', fontWeight: 500, mb: 1 }}>
                    Current Plan
                </Typography>
                    <Typography variant="subtitle1" sx={{ color: 'text.primary', fontWeight: 500 }}>
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
                    <Typography variant="h6" sx={{ mt: 2 }}>
                        $199 Per Month{' '}
                        <Box component="span" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                            Popular
                        </Box>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Standard plan for small to medium businesses
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                        <Button variant="contained">Upgrade Plan</Button>
                        <Button variant="outlined" color="error">
                            Cancel Subscription
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            {/* Alert Section */}
            <Alert severity="warning" sx={{ mb: 3 }}>
                We need your attention! Your plan requires update.
                <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Days
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={40}
                        sx={{
                            height: 8,
                            borderRadius: 4,
                            backgroundColor: 'action.hover',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: 'primary.main',
                                borderRadius: 4
                            }
                        }}
                    />
                    <Typography variant="caption">
                        18 days remaining until your plan requires update
                    </Typography>
                </Box>
                <Typography variant="caption">12 of 30 Days</Typography>
            </Alert>

            {/* Payment Methods Section */}
            <Card sx={{ mb: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Payment Methods
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                        jsx
                        <FormControlLabel
                            control={
                                <Radio
                                    checked
                                    sx={{
                                        '&.Mui-checked': {
                                            color: 'primary.main'
                                        }
                                    }}
                                />
                            }
                            label="Credit/Debit/ATM Card"
                            sx={{ color: 'text.primary' }}
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="Paypal account"
                        />
                    </Stack>
                    <TextField fullWidth label="Card Number" value="1356 3215 6548 7898" sx={{ mt: 2 }} />
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}></Stack>
                    <TextField fullWidth label="Name" placeholder="John Doe" />
                    <TextField fullWidth label="Exp. Date" placeholder="MM/YY" />
                    <TextField fullWidth label="CVV Code" placeholder="654" InputProps={{
                        endAdornment: (
                            <IconButton aria-label="toggle password visibility" edge="end">
                                ?
                            </IconButton>
                        )
                    }} />
                    <FormControlLabel control={<Switch defaultChecked />} label="Save card for future billing?" sx={{ mt: 2 }} />
                </CardContent>
            </Card>

            {/* Save Changes / Cancel Buttons (New Section) */}
            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                <Button variant="contained" color="primary">Save Changes</Button>
                <Button variant="outlined">Cancel</Button>
            </Box>

            {/* My Cards Section */}
            <Card>
                <CardContent>
                    <Typography variant="h6" gutterBottom>My Cards</Typography>
                    {/* Card 1 */}
                    <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Box>
                            <ImageWrapper>
                                <CenteredBox width={40} height={40} borderRadius="50%" bgcolor="secondary.light" color="white" marginRight={2} component="img" src="https://cdn-icons-png.flaticon.com/512/196/196563.png" alt="masterCardImage" />
                                <Box>
                                    <Typography>Tom McBride <Box component="span" bgcolor="info.light" color="info.contrastText" borderRadius={1} px={0.8} ml={1} fontSize={12} whiteSpace="nowrap">Primary</Box></Typography>
                                    <Typography variant="body2" color="text.secondary">**** **** **** 9856</Typography>
                                </Box>
                            </ImageWrapper>
                        </Box>
                        <Box>
                            <IconButton color="primary">
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error">
                                <DeleteIcon />
                            </IconButton>
                            <Typography variant="caption" color="text.secondary">Card expires at 12/26</Typography>
                        </Box>
                    </Item>
                    {/* Card 2 */}
                    <Item sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                        <Box>
                            <ImageWrapper>
                                <CenteredBox width={40} height={40} borderRadius="50%" bgcolor="primary.light" color="white" marginRight={2} component="img" src="https://i.imgur.com/mE17JjR.png" alt="visaImage" />
                                <Box>
                                    <Typography>Mildred Wagner</Typography>
                                    {/* <Typography variant="body2" color="text.secondary">**** **** **** 9856</Typography> */}
                                </Box>
                            </ImageWrapper>
                        </Box>
                        <Box>
                            <IconButton color="primary">
                                <EditIcon />
                            </IconButton>
                            <IconButton color="error">
                                <DeleteIcon />
                            </IconButton>
                            <Typography variant="caption" color="text.secondary">Card expires at 10/27</Typography>
                            <BuyNowButton>Buy Now</BuyNowButton>
                        </Box>
                    </Item>
                </CardContent>
            </Card>

            {/* Billing Address Card */}
            <Card sx={{ mt: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Billing Address</Typography>
                    <Stack spacing={2}>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <TextField fullWidth label="Company Name" placeholder="Pixinvent" />
                            <TextField fullWidth label="Billing Email" placeholder="john.doe@example.com" />
                        </Stack>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <TextField fullWidth label="Tax ID" placeholder="Enter Tax ID" />
                            <TextField fullWidth label="VAT Number" placeholder="Enter VAT Number" />
                        </Stack>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <TextField fullWidth label="Mobile" placeholder="US (+1) 202 555 0111" />
                            <FormControl fullWidth>
                                <InputLabel id="country-label">Country</InputLabel>
                                <Select labelId="country-label" id="country" label="Country" defaultValue="USA">
                                    <MenuItem value="USA">USA</MenuItem>
                                    <MenuItem value="Canada">Canada</MenuItem>
                                    {/* Add more countries as needed */}
                                </Select>
                            </FormControl>
                        </Stack>
                        <TextField fullWidth label="Billing Address" placeholder="Billing Address" />
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                            <TextField fullWidth label="State" placeholder="California" />
                            <TextField fullWidth label="Zip Code" placeholder="231485" />
                        </Stack>
                    </Stack>
                    <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
                        <Button variant="contained" color="primary">Save changes</Button>
                        <Button variant="outlined">Discard</Button>
                    </Box>
                </CardContent>
            </Card>

            {/* Billing History Table (Most Complex Part)  */}
            <Card sx={{ mt: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>Billing History</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <FormControl sx={{ mr: 2 }}>
                                <InputLabel id="show-entries-label">Show</InputLabel>
                                <Select labelId="show-entries-label" id="show-entries" value={pageSize} label="Show" onChange={(e) => setPageSize(parseInt(e.target.value, 10))}>
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={25}>25</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="contained" color="primary">+ Create Invoice</Button>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <TextField label="Search Invoice" variant="outlined" size="small" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} sx={{ mr: 2 }} />
                            <FormControl sx={{ minWidth: 120 }}>
                                <InputLabel id="invoice-status-label">Invoice Status</InputLabel>
                                <Select labelId="invoice-status-label" id="invoice-status" value={invoiceStatusFilter} label="Invoice Status" onChange={(e) => setInvoiceStatusFilter(e.target.value)} size="small">
                                    <MenuItem value="">All</MenuItem>
                                    <MenuItem value="Paid">Paid</MenuItem>
                                    <MenuItem value="Pending">Pending</MenuItem>
                                    <MenuItem value="Overdue">Overdue</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                    <TableContainer>
                        <Table sx={{ minWidth: 750 }} aria-label="billing history table">
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox checked={selectAll} onChange={handleSelectAllClick} inputProps={{ 'aria-label': 'select all billing entries' }} />
                                    </TableCell>
                                    <TableCell>#</TableCell>
                                    <TableCell>CLIENT</TableCell>
                                    <TableCell>TOTAL</TableCell>
                                    <TableCell>ISSUED DATE</TableCell>
                                    <TableCell>BALANCE</TableCell>
                                    <TableCell>ACTIONS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredData.map((row) => {
                                    const isItemSelected = isSelected(row.id);
                                    const labelId = `billing-list-checkbox-${row.id}`;
                                    return (
                                        <StyledTableRow
                                            hover
                                            onClick={(event) => handleClick(event, row.id)}
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.id}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox checked={isItemSelected} inputProps={{ 'aria-labelledby': labelId }} />
                                            </TableCell>
                                            <TableCell component="th" id={labelId} scope="row">
                                                {row.id}
                                            </TableCell>
                                            <TableCell>{row.client}</TableCell>
                                            <TableCell>{row.total}</TableCell>
                                            <TableCell>{row.issuedDate}</TableCell>
                                            <TableCell>{row.balance}</TableCell>
                                            <TableCell>
                                                <IconButton aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                                <IconButton aria-label="view">
                                                    <VisibilityIcon />
                                                </IconButton>
                                               
                                                <IconButton aria-label="more">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            </TableCell>
                                        </StyledTableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                        <Typography variant="body2">
                            Showing 1 to {Math.min(pageSize, filteredData.length)} of {filteredData.length} entries
                        </Typography>
                        <Box>
                            {/* You'll need to implement pagination logic here */}
                            <Button variant="outlined">Previous</Button>
                            <Button variant="outlined">Next</Button>
                        </Box>
                    </Box>

                </CardContent>
            </Card>
        </Box >
    );
}

export default BillingContent;