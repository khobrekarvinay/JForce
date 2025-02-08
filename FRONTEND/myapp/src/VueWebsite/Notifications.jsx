import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Checkbox,
  FormControl,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Link
} from '@mui/material';

const NotificationsContent = () => {
  const [notificationTime, setNotificationTime] = useState('online');

  const notifications = [
    { type: 'New for you', email: true, browser: true, app: true },
    { type: 'Account activity', email: true, browser: true, app: true },
    { type: 'A new browser used to sign in', email: true, browser: true, app: false },
    { type: 'A new device is linked', email: true, browser: false, app: false }
  ];

  return (
    <Box sx={{ p: 3, maxWidth: 1400, mx: 'auto' }}>


      <Card sx={{ boxShadow: '0px 2px 10px rgba(76, 78, 100, 0.22)' }}>
        <CardContent>
          {/* Recent Devices Section */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                mb: 1,
                fontSize: '1.25rem',
                fontWeight: 500,
                fontFamily: '"Public Sans", sans-serif'
              }}
            >
              Recent Devices
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: 'text.secondary',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: '0.875rem',
                fontFamily: '"Public Sans", sans-serif'
              }}
            >
              We need permission from your browser to show notifications.
              <Button
                variant="text"
                sx={{
                  color: '#7367f0',
                  textTransform: 'none',
                  p: 0,
                  '&:hover': { backgroundColor: 'transparent' },
                  fontSize: '0.875rem',
                  fontFamily: '"Public Sans", sans-serif'
                }}
              >
                Request Permission
              </Button>
            </Typography>
          </Box>

          {/* Notifications Table */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: '"Public Sans", sans-serif'
                    }}
                  >
                    TYPE
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: '"Public Sans", sans-serif'
                    }}
                  >
                    EMAIL
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: '"Public Sans", sans-serif'
                    }}
                  >
                    BROWSER
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: 'text.secondary',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: '"Public Sans", sans-serif'
                    }}
                  >
                    APP
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {notifications.map((notification, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      '&:nth-of-type(odd)': {
                        backgroundColor: 'rgba(76, 78, 100, 0.04)'
                      }
                    }}
                  >
                    <TableCell
                      sx={{
                        fontSize: '0.875rem',
                        fontFamily: '"Public Sans", sans-serif'
                      }}
                    >
                      {notification.type}
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={notification.email}
                        sx={{
                          color: 'rgba(76, 78, 100, 0.68)',
                          '&.Mui-checked': {
                            color: '#7367f0'
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={notification.browser}
                        sx={{
                          color: 'rgba(76, 78, 100, 0.68)',
                          '&.Mui-checked': {
                            color: '#7367f0'
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox
                        checked={notification.app}
                        sx={{
                          color: 'rgba(76, 78, 100, 0.68)',
                          '&.Mui-checked': {
                            color: '#7367f0'
                          }
                        }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* When to send notifications */}
          <Box sx={{ mt: 4 }}>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontSize: '0.875rem',
                fontFamily: '"Public Sans", sans-serif'
              }}
            >
              When should we send you notifications?
            </Typography>
            <FormControl fullWidth>
              <Select
                value={notificationTime}
                onChange={(e) => setNotificationTime(e.target.value)}
                sx={{
                  height: '40px',
                  fontSize: '0.875rem',
                  fontFamily: '"Public Sans", sans-serif',
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(76, 78, 100, 0.22)'
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(76, 78, 100, 0.32)'
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7367f0'
                  }
                }}
              >
                <MenuItem value="online">Only when I'm online</MenuItem>
                <MenuItem value="always">Anytime</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#7367f0',
                '&:hover': { bgcolor: '#6054e6' },
                textTransform: 'none',
                fontFamily: '"Public Sans", sans-serif'
              }}
            >
              Save changes
            </Button>
            <Button
              variant="outlined"
              sx={{
                color: 'text.secondary',
                borderColor: 'rgba(76, 78, 100, 0.22)',
                '&:hover': {
                  bgcolor: 'rgba(76, 78, 100, 0.04)',
                  borderColor: 'rgba(76, 78, 100, 0.32)'
                },
                textTransform: 'none',
                fontFamily: '"Public Sans", sans-serif'
              }}
            >
              Discard
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NotificationsContent;