
/// One of the most important parts of front end is Conditional rendering.
// Nothing much changes here in Material UI. Same syntax as used in React. 

// Before this there's a OnMOuseEnter & OnMOuseLeave event handlers that change the hoveredEmail - state to that element's email.id

{hoveredEmail === email.id ? (
    <Box>
        <IconButton size="small">
            <Mail />
        </IconButton>
        <IconButton size="small">
            <Delete />
        </IconButton>
        <IconButton size="small">
            <Info />
        </IconButton>
    </Box>
) : (
    <Typography variant="body2" color="text.secondary">
        {email.time}
    </Typography>
)}

























