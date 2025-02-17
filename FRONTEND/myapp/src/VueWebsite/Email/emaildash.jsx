import React, { useEffect, useState } from 'react';
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
import { Card, CardContent } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import Reply from '@mui/icons-material/Reply';
import Forward from '@mui/icons-material/Forward';

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
    MailOutline as MailOutlined,
    SendOutlined,
    CreateOutlined,
    StarOutline,
    WarningOutlined,
    DeleteOutline,
} from '@mui/icons-material';

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
import { ComposeBox } from './Compose';

const contacts = [
    { id: 1, name: 'Jane Foster', email: 'jane@example.com', avatar: '/api/placeholder/32/32' },
    { id: 2, name: 'Donna Frank', email: 'donna@example.com', avatar: '/api/placeholder/32/32' },
    { id: 3, name: 'Gabrielle Robertson', email: 'gabrielle@example.com', avatar: '/api/placeholder/32/32' },
    { id: 4, name: 'Lori Spears', email: 'lori@example.com', avatar: '/api/placeholder/32/32' },
    { id: 5, name: 'Sandy Vega', email: 'sandy@example.com', avatar: '/api/placeholder/32/32' },
    { id: 6, name: 'Cheryl May', email: 'cheryl@example.com', avatar: '/api/placeholder/32/32' },
];


const emails = [
    {
        id: 1,
        sender: 'Chandler Bing',
        avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/1.png',
        subject: 'Focused impactful open issues from the project of GitHub',
        time: '08:40 AM',
        read: false
    },
    {
        id: 2,
        sender: 'Ross Geller',
        avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/2.png',
        subject: 'Hey Katy, Dessert soufflé tootsie roll soufflé carrot cake halvah jelly.',
        time: '10:12 AM',
        read: false,
        hasAttachment: true
    },
    {
        id: 3,
        sender: 'Barney Stinson',
        initials: 'BS',
        subject: 'Hey Katy, Soufflé apple pie caramels soufflé tiramisu bear claw.',
        time: '12:44 AM',
        read: true,
        hasAttachment: true
    },
    {
        id: 4,
        sender: 'Phoebe Buffay',
        avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/3.png',
        subject: 'Hey Katy, Tart croissant jujubes gummies macaroon Icing sweet.',
        time: 'Yesterday',
        read: true
    },
    {
        id: 5,
        sender: 'Ted Mosby',
        avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/4.png',
        subject: 'Hey Katy, I love Pudding cookie chocolate sweet tiramisu jujubes I love danish.',
        time: 'Yesterday',
        read: false
    },
    {
        id: 6,
        sender: 'Stacy Cooper',
        initials: 'SK',
        subject: 'Hey Katy, I love danish. Cupcake I love carrot cake sugar plum I love.',
        time: '5 May',
        read: true
    },
    {
        id: 7,
        sender: 'Rachel Green',
        avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/5.png',
        subject: 'Hey Katy, Chocolate cake pudding chocolate bar ice cream bonbon lollipop.',
        time: '15 May',
        read: false
    },
    {
        id: 8,
        sender: 'Grace Shelby',
        avatar: 'https://demos.pixinvent.com/vuexy-html-admin-template/assets/img/avatars/6.png',
        subject: 'Hey Katy, Icing gummi bears ice cream croissant dessert wafer.',
        time: '20 Apr',
        hasAttachment: true,
        read: true
    }
];

const inboxEmails = emails;
const sentEmails = emails.slice(2, 5);
const draftEmails = emails.slice(4, 5);
const starredEmails = emails.slice(4, 6);
const spamEmails = emails.slice(6, 8);
const trashEmails = emails.slice(7, 8);




const Sidebar = ({ setComposeOpen, setSelectedOption, selectedOption }) => {
    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    return (
        <Box sx={{ width: 230, bgcolor: '#fff', p: 2, height: '100%', borderRight: '1px solid #ddd' }}>
            <Button fullWidth variant="contained" sx={{ mb: 3, bgcolor: '#7367f0', '&:hover': { bgcolor: '#5e50ee' } }} onClick={() => setComposeOpen(true)}>
                Compose
            </Button>
            <List>
                <ListItem button selected={selectedOption === 'inbox'} onClick={() => handleOptionClick('inbox')} sx={{ borderRadius: 2, bgcolor: selectedOption === 'inbox' ? '#ddd' : selectedOption !== 'inbox' && '#fff', '&:hover': { bgcolor: selectedOption === 'inbox' ? '#ddd' : '#f8f8f8' } }}>
                    <ListItemIcon>
                        <MailOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                    <Chip size="small" label="21" sx={{ bgcolor: '#e8e7fd', color: '#7367f0' }} />
                </ListItem>
                <ListItem button selected={selectedOption === 'sent'} onClick={() => handleOptionClick('sent')} sx={{ borderRadius: 2, bgcolor: selectedOption === 'sent' ? '#ddd' : selectedOption !== 'sent' && '#fff', '&:hover': { bgcolor: selectedOption === 'sent' ? '#ddd' : '#f8f8f8' } }}>
                    <ListItemIcon>
                        <SendOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Sent" />
                </ListItem>
                <ListItem button selected={selectedOption === 'draft'} onClick={() => handleOptionClick('draft')} sx={{ borderRadius: 2, bgcolor: selectedOption === 'draft' ? '#ddd' : selectedOption !== 'draft' && '#fff', '&:hover': { bgcolor: selectedOption === 'draft' ? '#ddd' : '#f8f8f8' } }}>
                    <ListItemIcon>
                        <CreateOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Draft" />
                    <Chip size="small" label="2" sx={{ bgcolor: '#fff4de', color: '#ffb400' }} />
                </ListItem>
                <ListItem button selected={selectedOption === 'starred'} onClick={() => handleOptionClick('starred')} sx={{ borderRadius: 2, bgcolor: selectedOption === 'starred' ? '#ddd' : selectedOption !== 'starred' && '#fff', '&:hover': { bgcolor: selectedOption === 'starred' ? '#ddd' : '#f8f8f8' } }}>
                    <ListItemIcon>
                        <StarOutline fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItem>
                <ListItem button selected={selectedOption === 'spam'} onClick={() => handleOptionClick('spam')} sx={{ borderRadius: 2, bgcolor: selectedOption === 'spam' ? '#ddd' : selectedOption !== 'spam' && '#fff', '&:hover': { bgcolor: selectedOption === 'spam' ? '#ddd' : '#f8f8f8' } }}>
                    <ListItemIcon>
                        <WarningOutlined fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Spam" />
                    <Chip size="small" label="4" sx={{ bgcolor: '#ffe4e5', color: '#ea5455' }} />
                </ListItem>
                <ListItem button selected={selectedOption === 'trash'} onClick={() => handleOptionClick('trash')} sx={{ borderRadius: 2, bgcolor: selectedOption === 'trash' ? '#ddd' : selectedOption !== 'trash' && '#fff', '&:hover': { bgcolor: selectedOption === 'trash' ? '#ddd' : '#f8f8f8' } }}>
                    <ListItemIcon>
                        <DeleteOutline fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Trash" />
                </ListItem>
            </List>
            <Typography variant="subtitle2" sx={{ mt: 2, mb: 1, px: 2 }}>LABELS</Typography>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#7367f0' }} />
                    </ListItemIcon>
                    <ListItemText primary="Personal" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#00cfe8' }} />
                    </ListItemIcon>
                    <ListItemText primary="Company" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ea5455' }} />
                    </ListItemIcon>
                    <ListItemText primary="Important" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <span style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff9f43' }} />
                    </ListItemIcon>
                    <ListItemText primary="Private" />
                </ListItem>
            </List>
        </Box>

    );
};

const EmailToolbar = () => {
    return (
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid #eee', bgcolor: 'white' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Checkbox size="small" />
                <IconButton size="small">
                    <Folder fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <Tag fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </Box>
            <Box sx={{ ml: 'auto', display: 'flex', alignItems: 'center', gap: 1 }}>
                <IconButton size="small">
                    <Link fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <MoreVert fontSize="small" />
                </IconButton>
                <IconButton size="small">
                    <Settings fontSize="small" />
                </IconButton>
            </Box>
        </Box>
    );
};

const EmailList = ({ selectedOption, onEmailSelect, searchQuery }) => {
    const [hoveredEmail, setHoveredEmail] = useState(null);
    const [emailsToDisplay, setEmailsToDisplay] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);


    useEffect(() => {
        let emails;
        switch (selectedOption) {
            case 'inbox':
                emails = inboxEmails;
                break;
            case 'sent':
                emails = sentEmails;
                break;
            case 'draft':
                emails = draftEmails;
                break;
            case 'starred':
                emails = starredEmails;
                break;
            case 'spam':
                emails = spamEmails;
                break;
            case 'trash':
                emails = trashEmails;
                break;
            default:
                emails = [];
        }
        setEmailsToDisplay(emails);
    }, [selectedOption]);

    useEffect(() => {
        if (searchQuery) {
            const filtered = emailsToDisplay.filter(email =>
                (email.sender && email.sender.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (email.subject && email.subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
                (email.content && email.content.toLowerCase().includes(searchQuery.toLowerCase()))
            );
            setFilteredEmails(filtered);
        } else {
            setFilteredEmails(emailsToDisplay);
            // filteredEmails will have emailsToDisplay
        }
    }, [searchQuery, emailsToDisplay]); 

    return (
        <Box>
            {filteredEmails.map(email => (
                <Box key={email.id} onClick={() => onEmailSelect(email)}
                    sx={{ display: 'flex', alignItems: 'center', p: 2, borderBottom: '1px solid #eee', bgcolor: email.read ? 'transparent' : '#f8f8f8', '&:hover': { boxShadow: '0 4px 24px 0 rgba(34,41,47,.1)', transform: 'translateY(-1px)', transition: 'all 0.2s', cursor: 'pointer' } }} onMouseEnter={() => setHoveredEmail(email.id)} onMouseLeave={() => setHoveredEmail(null)} >
                    <Checkbox size="small" />
                    <IconButton size="small">
                        <StarBorder fontSize="small" />
                    </IconButton>
                    {email.avatar ? (
                        <Avatar src={email.avatar} sx={{ width: 32, height: 32, mx: 1 }} />
                    ) : (
                        <Avatar sx={{ width: 32, height: 32, mx: 1, bgcolor: '#7367f0' }}>
                            {email.initials}
                        </Avatar>
                    )}
                    <Box sx={{ flex: 1, ml: 1 }}>
                        <Typography variant="body2" sx={{ fontWeight: email.read ? 400 : 600 }}>
                            {email.sender}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" noWrap>
                            {email.subject}
                        </Typography>
                    </Box>
                    {email.hasAttachment && (
                        <IconButton size="small" sx={{ mr: 1 }}>
                            <AttachFile fontSize="small" />
                        </IconButton>
                    )}
                    {hoveredEmail === email.id ? (
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton size="small">
                                <Mail fontSize="small" />
                            </IconButton>
                            <IconButton size="small">
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                            <IconButton size="small">
                                <Info fontSize="small" />
                            </IconButton>
                        </Box>
                    ) : (
                        <Typography variant="caption" color="text.secondary">
                            {email.time}
                        </Typography>
                    )}
                </Box>
            ))}
        </Box>
    );
};


const EmailView = ({ email, onClose }) => {
    if (!email) return null;

    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'calc(100% - 260px)',
                bgcolor: '#e9e9e9',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                animation: 'slideUp 0.3s ease-out',
                '@keyframes slideUp': {
                    from: { transform: 'translateY(100%)' },
                    to: { transform: 'translateY(0)' }
                }
            }}
        >
            {/* Email Header ----------------------------------------------*/}
            <Box sx={{ p: 2, bgcolor: 'white', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={onClose}>
                    <ArrowBack />
                </IconButton>
                <Box sx={{ ml: 2, flex: 1 }}>
                    <Typography variant="h6">{email.subject}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Chip
                            label="Important"
                            size="small"
                            sx={{
                                bgcolor: '#ffe4e5',
                                color: '#ea5455',
                                height: '24px'
                            }}
                        />
                        <Typography variant="caption" color="text.secondary">
                            {`Inbox`}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <IconButton>
                        <StarBorder />
                    </IconButton>
                    <IconButton>
                        <Reply />
                    </IconButton>
                    <IconButton>
                        <Forward />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </Box>
            </Box>

            {/* Email Content ---------------------------------------------*/}
            <Box sx={{ p: 3, flex: 1, overflow: 'auto' }}>
                <Card sx={{ mb: 3, bgcolor: 'white' }}>
                    <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Avatar src={email.avatar} sx={{ width: 40, height: 40 }}>
                                {email.initials}
                            </Avatar>
                            <Box sx={{ ml: 2 }}>
                                <Typography variant="subtitle1">
                                    {email.sender}
                                    <Typography component="span" variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                        {`<${email.senderEmail || 'email@example.com'}>`}
                                    </Typography>
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {`to me - ${email.time}`}
                                </Typography>
                            </Box>
                        </Box>

                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {email.content || "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more or less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."}
                        </Typography>

                        {email.hasAttachment && (
                            <Box sx={{ mt: 3, p: 2, bgcolor: '#f8f9fa', borderRadius: 1 }}>
                                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                    Attachments
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <AttachFile sx={{ mr: 1 }} />
                                    <Typography variant="body2">
                                        report.xlsx
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </CardContent>
                </Card>

                {/* Reply Box -----------------------------------------------*/}
                <Card sx={{ bgcolor: 'white' }}>
                    <CardContent>
                        <Typography variant="subtitle2" sx={{ mb: 2 }}>
                            Reply to {email.sender}
                        </Typography>
                        <Box sx={{ mb: 2 }}>
                            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                <IconButton size="small">
                                    <FormatBold fontSize="small" />
                                </IconButton>
                                <IconButton size="small">
                                    <FormatItalic fontSize="small" />
                                </IconButton>
                                <IconButton size="small">
                                    <FormatUnderlined fontSize="small" />
                                </IconButton>
                                <Divider orientation="vertical" flexItem />
                                <IconButton size="small">
                                    <FormatListBulleted fontSize="small" />
                                </IconButton>
                                <IconButton size="small">
                                    <FormatListNumbered fontSize="small" />
                                </IconButton>
                                <IconButton size="small">
                                    <InsertLink fontSize="small" />
                                </IconButton>
                                <IconButton size="small">
                                    <FunctionsIcon fontSize="small" />
                                </IconButton>
                            </Box>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                placeholder="Write your message..."
                                variant="outlined"
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: '#fff',
                                    }
                                }}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <IconButton>
                                <AttachFile />
                            </IconButton>
                            <Button
                                variant="contained"
                                endIcon={<Send />}
                                sx={{
                                    bgcolor: '#7367f0',
                                    '&:hover': {
                                        bgcolor: '#5e50ee'
                                    }
                                }}
                            >
                                Send
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

const EmailDashboard = () => {
    const [composeOpen, setComposeOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('inbox');
    const [selectedEmail, setSelectedEmail] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const handleEmailSelect = (email) => {
        setSelectedEmail(email);
    };

    const handleEmailClose = () => {
        setSelectedEmail(null);
    };
    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Box sx={{ height: '70vh', display: 'flex', position: 'relative' }}>
            <Sidebar setComposeOpen={setComposeOpen} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 2, borderBottom: '1px solid #eee', bgcolor: '#fff' }}>
                    <TextField
                        fullWidth
                        placeholder="Search mail"
                        variant="outlined"
                        size="small"
                        value={searchQuery}
                        onChange={handleSearch}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '50px',
                                backgroundColor: '#fff'
                            }
                        }}
                    /></Box>
                <EmailToolbar sx={{ bgcolor: '#fff' }} />
                <Box sx={{ flex: 1, overflow: 'auto' }}>
                    <EmailList
                        selectedOption={selectedOption}
                        onEmailSelect={handleEmailSelect}
                        searchQuery={searchQuery} 
                    />
                </Box>
            </Box>
            <ComposeBox open={composeOpen} onClose={() => setComposeOpen(false)} />
            <EmailView email={selectedEmail} onClose={handleEmailClose} />

        </Box>
    );
};

export default EmailDashboard;