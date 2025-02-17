



import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    IconButton,
    Chip,
    Paper,
    Modal,
    Popper,
    ClickAwayListener,
    Backdrop,
    Checkbox,
    InputAdornment,
    Divider,
    ListItemAvatar
} from '@mui/material';

import {
    FormatBold,
    FormatItalic,
    FormatUnderlined,
    FormatListBulleted,
    FormatListNumbered,
    InsertLink
} from '@mui/icons-material';

import FunctionsIcon from '@mui/icons-material/Functions';

import {
    Star,
    StarBorder,
    Mail,
    Delete,
    Info,
    Close,
    AttachFile,
    Image,
    MoreVert,
    Search,
    Send,
    DriveFileMove,
    Label,
    Delete as DeleteIcon,
    Link,
    Folder,
    Tag,
    Settings
} from '@mui/icons-material';

import {
    MailOutline as MailOutlined,
    SendOutlined,
    CreateOutlined,
    StarOutline,
    WarningOutlined,
    DeleteOutline,
} from '@mui/icons-material';


const contacts = [
    { id: 1, name: 'Jane Foster', email: 'jane@example.com', avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png' },
    { id: 2, name: 'Donna Frank', email: 'donna@example.com', avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/2.png' },
    { id: 3, name: 'Gabrielle Robertson', email: 'gabrielle@example.com', avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/3.png' },
    { id: 4, name: 'Lori Spears', email: 'lori@example.com', avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/4.png' },
    { id: 5, name: 'Sandy Vega', email: 'sandy@example.com', avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/5.png' },
    { id: 6, name: 'Cheryl May', email: 'cheryl@example.com', avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/6.png' },
];


export const ComposeBox = ({ open, onClose }) => {
    const [selectedContacts, setSelectedContacts] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [showCc, setShowCc] = useState(false);
    const [showBcc, setShowBcc] = useState(false);

    const handleContactClick = (contact) => {
        if (!selectedContacts.find(c => c.id === contact.id)) {
            setSelectedContacts([...selectedContacts, contact]);
        }
        setAnchorEl(null);
    };

    const handleRemoveContact = (contactId) => {
        setSelectedContacts(selectedContacts.filter(c => c.id !== contactId));
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500, style: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    width: { xs: '80%', sm: '70%', md: '50%', lg: '40%' },
                    height: {
                        xs: showCc && showBcc ? '580px' : showCc || showBcc ? '520px' : '420px',
                        sm: showCc && showBcc ? '560px' : showCc || showBcc ? '500px' : '420px',
                        md: showCc && showBcc ? '540px' : showCc || showBcc ? '480px' : '420px',
                        lg: showCc && showBcc ? '520px' : showCc || showBcc ? '460px' : '420px'
                    },
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                    boxShadow: 24,
                }}
            >


                <Box sx={{ p: 2, borderBottom: '1px solid #eee' }}>
                    <Typography variant="h6">Compose Mail</Typography>
                    <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
                        <Close />
                    </IconButton>
                </Box>

                <Box sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Typography sx={{ width: 60 }}>To:</Typography>
                        <Box sx={{ flex: 1, position: 'relative' }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 1 }}>
                                {selectedContacts.map(contact => (
                                    <Chip
                                        key={contact.id}
                                        avatar={<Avatar src={contact.avatar} />}
                                        label={contact.name}
                                        onDelete={() => handleRemoveContact(contact.id)}
                                        onClick={() => handleRemoveContact(contact.id)}
                                        sx={{ bgcolor: '#e7e6fc' }}
                                    />
                                ))}
                            </Box>
                            <TextField
                                fullWidth
                                variant="standard"
                                onClick={(e) => setAnchorEl(e.currentTarget)}
                                onFocus={(e) => setAnchorEl(e.currentTarget)}
                            />
                            <Popper
                                open={Boolean(anchorEl)}
                                anchorEl={anchorEl}
                                placement="bottom-start"
                                style={{
                                    width: 400,
                                    zIndex: 1400,
                                    maxWidth: 'calc(100% - 60px)' 
                                }}
                            >
                                <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
                                    <Paper sx={{ width: '100%', maxHeight: 400, overflow: 'auto', mt: 1 }}>
                                        <List>
                                            {contacts.map(contact => (
                                                <ListItem
                                                    key={contact.id}
                                                    button
                                                    onClick={() => handleContactClick(contact)}
                                                    disabled={selectedContacts.find(c => c.id === contact.id)}
                                                    sx={{
                                                        borderRadius: 1,
                                                        bgcolor: selectedContacts.find(c => c.id === contact.id) ? '#7367f0' : 'transparent',
                                                        '&:hover': { bgcolor: '#5e50ee', '& .MuiListItemText-root': { color: '#fff' } }
                                                    }}
                                                >
                                                    <ListItemAvatar>
                                                        <Avatar src={contact.avatar} sx={{ width: 32, height: 32, mx: 1 }} imgProps={{ style: { objectFit: 'cover' } }} />
                                                    </ListItemAvatar>
                                                    <ListItemText
                                                        primary={contact.name}
                                                        secondary={contact.email}
                                                        sx={{
                                                            '&.MuiListItemText-root': {
                                                                color: selectedContacts.find(c => c.id === contact.id) ? '#fff' : 'text.primary'
                                                            }
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Paper>
                                </ClickAwayListener>
                            </Popper>
                        </Box>
                        <Typography sx={{ ml: 1, cursor: 'pointer' }} onClick={() => setShowCc(!showCc)}>
                            Cc
                        </Typography>
                        <Typography sx={{ ml: 1, cursor: 'pointer' }} onClick={() => setShowBcc(!showBcc)}>
                            Bcc
                        </Typography>
                    </Box>
                    {showCc && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography sx={{ width: 60 }}>Cc:</Typography>
                            <TextField
                                fullWidth
                                variant="standard"
                                placeholder="someone@mail.com"
                            />
                        </Box>
                    )}

                    {showBcc && (
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <Typography sx={{ width: 60 }}>Bcc:</Typography>
                            <TextField
                                fullWidth
                                variant="standard"
                                placeholder="someone@mail.com"
                            />
                        </Box>
                    )}
                    <TextField fullWidth placeholder="Subject" variant="standard" sx={{ mb: 2 }} />
                    <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                        <IconButton>
                            <FormatBold fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <FormatItalic fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <FormatUnderlined fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <FormatListBulleted fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <FormatListNumbered fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <InsertLink fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <Image fontSize="small" />
                        </IconButton>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <TextField fullWidth multiline rows={12} placeholder="Message" variant="standard" />
                    </Box>


                    <Box sx={{ p: 2, pb: 0, position: 'sticky', bottom: 35, bgcolor: 'background.paper' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                            <Button variant="contained" sx={{ bgcolor: '#7367f0', '&:hover': { bgcolor: '#5e50ee' } }} endIcon={<Send fontSize="small" />}>
                                Send
                            </Button>
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <IconButton>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                                <IconButton>
                                    <MoreVert fontSize="small" />
                                </IconButton>
                                <IconButton>
                                    <AttachFile fontSize="small" />
                                </IconButton>
                            </Box>
                        </Box>
                    </Box>


                </Box>
            </Box>
        </Modal>
    );
};
