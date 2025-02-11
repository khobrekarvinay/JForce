import React, { useState } from "react";
import MaterialTable from "@material-table/core";  // Use the updated package
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function MuiTable() {
  const [data, setData] = useState([
    { id: 1, client: "Akshay" },
    { id: 2, client: "Amol" },
    { id: 3, client: "Amar" },
  ]);

  const columns = [
    { title: "Id", field: "id" },
    { title: "Client", field: "client" },
  ];

  const theme = createTheme({
    direction: "ltr",
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <MaterialTable title="Clients List" columns={columns} data={data} />
      </ThemeProvider>


      {/* Billing History Card */}
      {/* <Card sx={{ mt: 3, boxShadow: '0px 2px 10px rgba(76, 78, 100, 0.22)' }}>
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
                                            <Typography sx={{ fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', textAlign: 'center', color: row.balance === 'Paid' ? '#28C76F' : 'error.main', borderRadius: '5px', backgroundColor: row.balance === 'Paid' ? '#DDF6E8' : 'none', fontWeight: 500 }} >
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
            </Card> */}

    </>
  );
}
