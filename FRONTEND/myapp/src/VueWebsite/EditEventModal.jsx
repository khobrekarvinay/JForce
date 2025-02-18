import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, FormControlLabel, Switch, Button, Box, Select, MenuItem, FormControl, styled, Typography, Checkbox } from "@mui/material";

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

    const StyledSelect = styled(Select)({
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
        },
    });

    const InputLabel = styled(Typography)({
        fontSize: '0.875rem',
        color: 'rgba(0, 0, 0, 0.7)',
        marginBottom: '6px',
        fontFamily: '"Public Sans", sans-serif',
    });

const EditEventModal = ({ open, onClose, eventData, onUpdateEvent, onDeleteEvent }) => {
    const [formData, setFormData] = useState(eventData || {});

    useEffect(() => {
        if (eventData) {
            setFormData({
                ...eventData,
                category: eventData.category || "Business", // Default value if missing
                startDate: eventData.startDate || new Date().toISOString().split("T")[0],
                endDate: eventData.endDate || new Date().toISOString().split("T")[0],
            });
        }
    }, [eventData]);


    const handleChange = (event) => {
        const { name, value, checked } = event.target;
        setFormData((prev) => ({
            ...prev,
            [name]: name === "allDay" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateEvent(formData);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            PaperProps={{
                sx: {
                    width: "400px",
                    height: "100vh",
                    position: "fixed",
                    right: 0,
                    m: 0,
                    borderRadius: 0,
                },
            }}
        >
            <DialogTitle>Update Event</DialogTitle>
            <DialogContent>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 0, mt: 1 }}>
                    <InputLabel>Title</InputLabel>
                    <StyledTextField name="title" placeholder="Title" fullWidth value={formData.title} onChange={handleChange} />

                    <FormControl fullWidth>
                        <InputLabel sx={{ mt: 2 }}>Label</InputLabel>
                        <StyledSelect name="category" value={formData.category} onChange={handleChange} displayEmpty
                            sx={{ height: '40px', fontSize: '0.875rem', fontFamily: '"Public Sans", sans-serif', mb: 2 }} >
                            <MenuItem value="Business">Business</MenuItem>
                            <MenuItem value="Personal">Personal</MenuItem>
                            <MenuItem value="Family">Family</MenuItem>
                            <MenuItem value="Holiday">Holiday</MenuItem>
                            <MenuItem value="ETC">ETC</MenuItem>
                        </StyledSelect>
                    </FormControl>

                    <InputLabel sx={{ mt: 1 }}>Start Date</InputLabel>
                    <StyledTextField name="startDate" type="date" fullWidth value={formData.startDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />

                    <InputLabel sx={{ mt: 2 }}>End Date</InputLabel>
                    <StyledTextField name="endDate" type="date" fullWidth value={formData.endDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />

                    <FormControlLabel sx={{ my: 2 }} control={<Switch name="allDay" checked={formData.allDay} onChange={handleChange} />} label="All Day" />

                    <InputLabel sx={{ mt: 2 }}>Event URL</InputLabel>
                    <StyledTextField name="eventUrl" placeholder="Event URL" fullWidth value={formData.eventUrl} onChange={handleChange} />

                    <InputLabel sx={{ mt: 2 }}>Add Guests</InputLabel>
                    <StyledTextField name="guest" placeholder="Add Guest" fullWidth value={formData.guest} onChange={handleChange} />

                    <InputLabel sx={{ mt: 2 }}>Location</InputLabel>
                    <StyledTextField name="location" placeholder="Location" fullWidth value={formData.location} onChange={handleChange} />

                    <InputLabel sx={{ mt: 2 }}>Description</InputLabel>
                    <StyledTextField name="description" fullWidth multiline rows={4} value={formData.description} onChange={handleChange} />

                    <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 2 }}>
                        <Button onClick={onClose} color="inherit">Cancel</Button>
                        <Button color="error" onClick={() => onDeleteEvent(formData.id)}>Delete</Button>
                        <Button type="submit" variant="contained" color="primary">Update</Button>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default EditEventModal;
