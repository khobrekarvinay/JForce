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

// Let's break down how these custom styled components are made:

// *Overview of Styled Components*
// Styled components are a way to write CSS in your JavaScript files. They allow you to write CSS code as JavaScript functions, which can then be used as React components.

// *Creating a Styled Component*
// To create a styled component, you use the `styled` function from the `styled-components` library. The `styled` function takes a HTML element or a React component as an argument.

// *Syntax*
// The syntax for creating a styled component is as follows:

// ```
// jsx
// const StyledComponent = styled(HTML Element or React Component)`
//   /* CSS styles */
// `;
// ```

// *Example: StyledTextField*
// Let's take the `StyledTextField` component as an example:

// ```
// jsx
// const StyledTextField = styled(TextField)`
//   /* CSS styles */
// `;
// ```

// In this example, `TextField` is a React component from the Material-UI library. The `styled` function takes the `TextField` component as an argument and returns a new styled component, `StyledTextField`.

// *CSS Styles*
// The CSS styles for the styled component are defined inside the backticks (``). These styles will be applied to the underlying HTML element or React component.

// *Nested Selectors*
// Styled components also support nested selectors. For example:

// ```
// jsx
// const StyledTextField = styled(TextField)`
//   & .MuiOutlinedInput-root {
//     /* styles for .MuiOutlinedInput-root */
//   }
//   & input {
//     /* styles for input */
//   }
// `;
// ```

// In this example, the `&` symbol refers to the parent element (in this case, the `TextField` component). The `.MuiOutlinedInput-root` and `input` selectors are nested inside the parent element.

// *Props and Theme*
// Styled components can also accept props and theme variables. For example:

// ```
// jsx
// const StyledSelect = styled(Select)(({ theme }) => ({
//   /* styles that use theme variables */
// }));
// ```

// In this example, the `StyledSelect` component accepts a `theme` prop, which can be used to access theme variables.




















