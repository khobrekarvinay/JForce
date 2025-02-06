


import React from 'react';
import { Box, Typography, TextField, Checkbox, Button, Link, Divider, IconButton } from '@mui/material';
import { Facebook, Twitter, GitHub, Google } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

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

const GlowingButton = styled(Button)({
    backgroundColor: 'rgb(115, 103, 240)',
    color: 'white',
    textTransform: 'none',
    fontSize: '0.875rem',
    fontFamily: '"Public Sans", sans-serif',
    padding: '8px 20px',
    height: '38px',
    boxShadow: '0 2px 4px rgba(115, 103, 240, 0.4)',
    '&:hover': {
        backgroundColor: 'rgb(105, 93, 230)',
        boxShadow: '0 4px 8px rgba(115, 103, 240, 0.5)',
    }
});

const BuyNowButton = styled(Button)({
  backgroundColor: '#FF3737', 
  color: 'white',
  textTransform: 'none',
  fontSize: '0.875rem',
  fontFamily: '"Public Sans", sans-serif',
  padding: '8px 20px',
  boxShadow: '0 0 10px rgba(255, 55, 55, 0.8)', 
  '&:hover': {
    backgroundColor: '#FF6262', 
    boxShadow: '0 0 15px rgba(255, 55, 55, 1)'
  }
});

const InputLabel = styled(Typography)({
    fontSize: '0.875rem',
    color: 'rgba(0, 0, 0, 0.7)',
    marginBottom: '6px',
    fontFamily: '"Public Sans", sans-serif',
});

const LoginPage = () => {
    return (
        <Box sx={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
            {/* Logo */}
            <Box sx={{
                position: 'absolute',
                top: '3%',
                left: '2%',
                display: 'flex',
                alignItems: 'center',
                zIndex: 2
            }}>
                <img src="https://cdn.pixinvent.com/pi-assets/vuexy/admin-template/logo/logo.svg" alt="Logo" style={{ width: 55, height: 45 }} />
                <Typography sx={{
                    ml: 2,
                    fontSize: '1.25rem',
                    fontWeight: 600,
                    color: '#32324D',
                    fontFamily: '"Public Sans", sans-serif',
                }}>
                    Vuexy
                </Typography>
            </Box>

            {/* Left Half with Image */}
            <Box sx={{
                flex: '0 0 66.5%',
                position: 'relative',
                backgroundColor: 'rgba(0, 0, 0, 0.03)',
                overflow: 'hidden',
                '@media (max-width: 768px)': {
                    display: 'none'
                }
            }}>
                <Box sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '140%',
                    height: '37%',
                    backgroundImage: 'url(https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/bg-shape-image-light.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderTopLeftRadius: '900px',
                    transform: 'rotate(3deg)',
                    transformOrigin: 'top left',
                }} />
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: 'url(https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/illustrations/auth-login-illustration-light.png)',
                    backgroundSize: '60% 87%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '800px',
                    height: '600px',
                    zIndex: 1,
                }} />
            </Box>

            {/* Right Half with Login Form */}
            <Box sx={{
                flex: '0 0 35%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '2rem 5rem',
                maxWidth: '400px',
                '@media (max-width: 768px)': {
                    flex: '0 0 100%',
                    marginX: 'auto',
                }
            }}>
                <Typography sx={{
                    mb: 0,
                    fontSize: '1.625rem',
                    fontWeight: 500,
                    color: '#32324D',
                    fontFamily: '"Public Sans", sans-serif',
                }}>
                    Welcome to Vuexy! 👋
                </Typography>
                <Typography sx={{
                    mb: 3,
                    color: '#666666',
                    fontWeight: 400,
                    fontSize: '0.875rem',
                    fontFamily: '"Public Sans", sans-serif',
                }}>
                    Please sign-in to your account and start the adventure
                </Typography>

                <Box sx={{ mb: 3 }}>
                    <InputLabel>Email or Username</InputLabel>
                    <StyledTextField
                        variant="outlined"
                        fullWidth
                        placeholder="Enter your email or username"
                        
                    />
                </Box>

                <Box sx={{ mb: 3 }}>
                    <InputLabel>Password</InputLabel>
                    <StyledTextField
                        type="password"
                        variant="outlined"
                        fullWidth
                        placeholder="Enter your password"
                    />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Checkbox sx={{
                            color: 'rgba(0, 0, 0, 0.42)',
                            '&.Mui-checked': {
                                color: 'rgb(115, 103, 240)',
                            }
                        }} />
                        <Typography sx={{
                            color: '#666666',
                            fontSize: '0.875rem',
                            fontFamily: '"Public Sans", sans-serif',
                        }}>
                            Remember Me
                        </Typography>
                    </Box>
                    <Link
                        href="#"
                        sx={{
                            ml: 'auto',
                            color: 'rgb(115, 103, 240)',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontFamily: '"Public Sans", sans-serif',
                        }}
                    >
                        Forgot Password?
                    </Link>
                </Box>

                <GlowingButton variant="contained" fullWidth>
                    Sign in
                </GlowingButton>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3, mb: 3 }}>
                    <Typography sx={{
                        color: '#666666',
                        fontSize: '0.875rem',
                        fontFamily: '"Public Sans", sans-serif',
                    }}>
                        New on our platform?
                    </Typography>
                    <Link
                        href="#"
                        sx={{
                            ml: 1,
                            color: 'rgb(115, 103, 240)',
                            textDecoration: 'none',
                            fontSize: '0.875rem',
                            fontFamily: '"Public Sans", sans-serif',
                        }}
                    >
                        Create an account
                    </Link>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Divider sx={{ flex: 1 }} />
                    <Typography sx={{
                        mx: 2,
                        color: '#666666',
                        fontSize: '0.875rem',
                        fontFamily: '"Public Sans", sans-serif',
                    }}>
                        or
                    </Typography>
                    <Divider sx={{ flex: 1 }} />
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <IconButton sx={{ color: '#497CE2' }}><Facebook /></IconButton>
                    <IconButton sx={{ color: '#1DA1F2' }}><Twitter /></IconButton>
                    <IconButton sx={{ color: '#272727' }}><GitHub /></IconButton>
                    <IconButton sx={{ color: '#DB4437' }}><Google /></IconButton>
                </Box>

                {/* Buy Now Button */}
                <Box sx={{
                    position: 'fixed',
                    bottom: 24,
                    right: 24,
                }}>
                    <BuyNowButton variant="contained">
                        Buy Now
                    </BuyNowButton>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;