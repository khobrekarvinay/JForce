
//Q. Handling Nested Lists & Having Different Styles for Different Layers of the List.

// You need a simple decimal system for main layers, sub layers and their sub layers -- 
// You have 3 main parent options so you have 0, 1 & 2
// Then you have 2 sub options for the last parent option, the 2 index one. So you have 2.1 and 2.2
// For the 2nd sub option you have 5 sub options. So 2.2 will become ---- 2.2.1 - 2.2.2 - 2.2.3 - 2.2.4 - 2.2.5


// The state needs to change accordingly so that React knows this option is selected. So you'll need a handler function.

const handleListItemClick = (event, index) => {
    setSelected(index);
    if (index.startsWith('2.2')) {
        setCollapsed((prevCollapsed) => ({ ...prevCollapsed, '2.2': true, '2': true }));
    }
};

// From the component you call this function this way, 
<ListItem
    button
    selected={selected === '0'}
    onClick={(event) => handleListItemClick(event, '0')}
> </ListItem>











//Q. COLLAPSE 












//__________________________________________________________________________________________________-

//Q. HOVER COLLAPSE & EXPAND -------------------------------

/// HoverDisplay means that a specific component expands or shrinks when you hover on it.
// This is achieved using useState with MouseEnter & MouseLeave as event listeners. Eg:

const [isHovered, setIsHovered] = useState(false);


{/* <SidebarContainer
isMinimized={isMinimized}
onMouseEnter={() => setIsHovered(true)}
onMouseLeave={() => setIsHovered(false)}  >

------Main part of the component
</SidebarContainer> */}



