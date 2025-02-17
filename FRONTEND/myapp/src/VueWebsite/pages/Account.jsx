import React, { useState } from "react";
import { TextField, Button, Select, MenuItem, FormControl, Box, Stack, Avatar, Typography, styled, Paper, Dialog, DialogTitle, DialogActions } from "@mui/material";
import { AlertTitle, Checkbox, FormControlLabel } from '@mui/material';
import WarningIcon from '@mui/icons-material/Warning';

export default function Account() {

    const [confirmed, setConfirmed] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleClickOpen = () => {
        setOpenDialog(true);
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

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
                }
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
            }
        }
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

    const InputLabel = styled(Typography)({
        fontSize: '0.875rem',
        color: 'rgba(0, 0, 0, 0.7)',
        marginBottom: '6px',
        fontFamily: '"Public Sans", sans-serif',
    });

    return (
        <>
            <Box sx={{ maxWidth: 1200, mx: "auto", bgcolor: "white", borderRadius: 2 }}>
                <Stack spacing={2}>
                    <Box display='flex' spacing={2} alignItems="center">
                        <Stack><Avatar src="/photo.png" sx={{ width: 100, height: 100, borderRadius: 2 }} /></Stack>
                        <Box sx={{ paddingLeft: 3 }}>
                            <Stack direction="row" spacing={2} >
                                <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }}>Upload new photo</Button>
                                <Button sx={{ textTransform: "none", backgroundColor: '#EBEBED', color: '#808390' }}>Reset</Button>
                            </Stack>
                            <Stack direction='row'>
                                <Typography sx={{ color: '#6D6B77', pt: 2 }}>Allowed JPG, GIF or PNG. Max size of 800K</Typography>
                            </Stack>
                        </Box>
                    </Box>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>First Name</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter your first name" variant="outlined" />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Last Name</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter your last name" variant="outlined" />
                        </Stack>
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>E-mail</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter your email" variant="outlined" />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Organization</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter organization name" variant="outlined" />
                        </Stack>
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Phone Number</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter phone number" variant="outlined" />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Address</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter address" variant="outlined" />
                        </Stack>
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>State</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter state" variant="outlined" />
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Zip Code</InputLabel>
                            <StyledTextField fullWidth placeholder="Enter zip code" variant="outlined" />
                        </Stack>
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Country</InputLabel>
                            <FormControl fullWidth>
                                <StyledSelect
                                    displayEmpty
                                    sx={{ height: '40px', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif' }}
                                >
                                    <MenuItem>Select Country</MenuItem>
                                </StyledSelect>
                            </FormControl>
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Language</InputLabel>
                            <FormControl fullWidth>
                                <StyledSelect
                                    displayEmpty
                                    sx={{ height: '40px', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif' }}
                                >
                                    <MenuItem>Select Language</MenuItem>
                                </StyledSelect>
                            </FormControl>
                        </Stack>
                    </Stack>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Timezone</InputLabel>
                            <FormControl fullWidth>
                                <StyledSelect
                                    displayEmpty
                                    sx={{ height: '40px', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif' }}
                                >
                                    <MenuItem>Select Timezone</MenuItem>
                                </StyledSelect>
                            </FormControl>
                        </Stack>
                        <Stack spacing={1} flex={1}>
                            <InputLabel>Currency</InputLabel>
                            <FormControl fullWidth>
                                <StyledSelect
                                    displayEmpty
                                    sx={{ height: '40px', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif' }}
                                >
                                    <MenuItem>Select Currency</MenuItem>
                                </StyledSelect>
                            </FormControl>
                        </Stack>
                    </Stack>

                    <Stack direction="row" gap={2}>
                        <Button variant="contained" sx={{ textTransform: "none", backgroundColor: '#7367f0' }}>Save changes</Button>
                        <Button sx={{ textTransform: "none", backgroundColor: '#EBEBED', color: '#808390' }}>Cancel</Button>
                    </Stack>
                </Stack>
            </Box>

            <Paper sx={{ p: 3, mt: 5, mb: 5, maxWidth: 1200, height: 250, mx: "auto", bgcolor: "white", borderRadius: 2, boxShadow: 3 }}>
                <Typography gutterBottom sx={{ mb: 2, color: '#444050', fontSize: '1.125rem' }}>
                    Delete Account
                </Typography>

                <Box sx={{ backgroundColor: '#fff0e1', borderColor: '#fff0e1', borderRadius: 1, padding: '11px 15px', color: '#ff9f43', mb: 2 }}>
                    <AlertTitle sx={{ fontWeight: "bold", }}>Are you sure you want to delete your account?</AlertTitle>
                    <Typography>Once you delete your account, there is no going back. Please be certain.</Typography>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={confirmed}
                                onChange={(e) => setConfirmed(e.target.checked)}
                            />
                        }
                        label="I confirm my account deactivation" sx={{ color: '#444050' }}
                    />

                    <Button
                        variant="contained"
                        color="error"
                        disabled={!confirmed}
                        onClick={handleClickOpen}
                        sx={{ alignSelf: 'flex-start', textTransform: 'none' }}
                    >
                        Deactivate Account
                    </Button>
                </Box>
            </Paper>

            <Dialog
                open={openDialog}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
            >
                <Box sx={{ textAlign: 'center', pt: 3 }}>
                    <WarningIcon sx={{ fontSize: 64, color: 'warning.main' }} />
                </Box>

                <DialogTitle sx={{ textAlign: 'center', pb: 2 }}>
                    Are you sure you would like to deactivate your account?
                </DialogTitle>

                <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            console.log('Account deactivated');
                            handleClose();
                        }}
                        color="primary"
                        sx={{ px: 4 }}
                    >
                        Yes
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        color="inherit"
                        sx={{ px: 4 }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openDialog}
                onClose={handleClose}
                maxWidth="xs"
                fullWidth
            >
                <Box sx={{ textAlign: 'center', pt: 3 }}>
                    <WarningIcon sx={{ fontSize: 64, color: 'warning.main' }} />
                </Box>

                <DialogTitle sx={{ textAlign: 'center', pb: 2 }}>
                    Are you sure you would like to deactivate your account?
                </DialogTitle>

                <DialogActions sx={{ justifyContent: 'center', pb: 3 }}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            console.log('Account deactivated');
                            handleClose();
                        }}
                        color="primary"
                        sx={{ px: 4 }}
                    >
                        Yes
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={handleClose}
                        color="inherit"
                        sx={{ px: 4 }}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};


