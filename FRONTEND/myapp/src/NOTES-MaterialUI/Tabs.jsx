

///Q. There are 5 tabs, You have to display the tab content according to the selected tab.


<Box sx={{ mb: 4, maxWidth: 1200, mx: "auto", bgcolor: "#f8f7fa", borderRadius: 2 }}>
    <Tabs value={tabValue} onChange={handleChange} aria-label="account tabs">
        <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}> <AccountCircleOutlinedIcon sx={{ marginRight: '8px' }} /> Account </Box>} {...a11yProps(0)} />
        <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}> <LockOutlinedIcon sx={{ marginRight: '8px' }} /> Security </Box>} {...a11yProps(1)} />
        <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}> <MonetizationOnOutlinedIcon sx={{ marginRight: '8px' }} /> Billing & Plans </Box>} {...a11yProps(2)} />
        <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}> <NotificationsOutlinedIcon sx={{ marginRight: '8px' }} /> Notifications </Box>} {...a11yProps(3)} />
        <StyledTab label={<Box sx={{ display: 'flex', alignItems: 'center' }}> <PeopleOutlinedIcon sx={{ marginRight: '8px' }} /> Connections </Box>} {...a11yProps(4)} />
    </Tabs>
    <Box sx={{ flexGrow: 1 }}>
        <TabPanel value={tabValue} index={0}>
            <Account />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
            <SecurityContent />
        </TabPanel>
        <TabPanel value={tabValue} index={2}>
            <BillingContent />
        </TabPanel>
        <TabPanel value={tabValue} index={3}>
            <NotificationsContent />
        </TabPanel>
        <TabPanel value={tabValue} index={4}>
            <ConnectionsContent />
        </TabPanel>
    </Box>
</Box>



// HandleChange function for settingTab values. 
const handleChange = (event, newValue) => {
    setTabValue(newValue);
    handleListItemClick(event, `2.2.${newValue + 1}`); 
    // This extra line is to reflect changes in a separate side bar component. Plus one because there the index starts from 1 unlike in Tabs where it starts from 0
};
















