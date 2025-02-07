// Material ui is the same as normal css just provides extra templates and has different tag names for the tags.

// <div> tag is replaced by <box> and <style> tag is replaced by <sx> 

// A Dropdown list in html used <select> and <option> tags. In material we use same select tag but for options <MenuItem> is used. 

// The <form> tag in html is <FormControl> here.

  <FormControl fullWidth>
<InputLabel id="country-label">Country</InputLabel>
<Select labelId="country-label" id="country" label="Country" defaultValue="USA">
    <MenuItem value="USA">USA</MenuItem>
    <MenuItem value="Canada">Canada</MenuItem>
    {/* Add more countries as needed */}
</Select>
</FormControl>

//default attribute sets the default option that is to be selected. 


// <Alert> tag in Material UI displays a directly filled box with text and a icon to the left depending on what you want to show.
// It offers 4 choices -- success, info, warning and error. 
// These can be choosed thorugh the 'severity' attribute.

//  <Stack sx={{ width: '100%' }} spacing={2}>
//       <Alert severity="success">This is a success Alert.</Alert>  -- gives a light green bg and tick
//       <Alert severity="info">This is an info Alert.</Alert> -- gives a light blue bg and info sign
//       <Alert severity="warning">This is a warning Alert.</Alert> -- gives a light yellow bg & warning sign
//       <Alert severity="error">This is an error Alert.</Alert> -- gives a light red bg & "!" sign
//     </Stack>

// To make the bg darker, Alert component comes with two alternative style options-filled & outlined
// variant='filled' gives dark background
// variant='outlined' keeps bg empty but keeps border coloured.


// 



// Box: The Box component serves as a wrapper component

// Stack: Stack is like a flex container.