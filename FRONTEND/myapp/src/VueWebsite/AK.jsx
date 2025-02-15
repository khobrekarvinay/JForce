import React, { useState } from 'react';
import { Box, Typography, IconButton, Button, Tabs, Tab, Paper, Checkbox, FormControlLabel, FormGroup, styled, useTheme, Divider } from '@mui/material';
import { ChevronLeft, ChevronRight, Plus, Clock } from 'lucide-react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

// Styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
}));

const CalendarGrid = styled(Box)(({ theme }) => ({
    boxShadow:'0 .1875rem .75rem 0 rgba(47, 43, 61, .14)',
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 1fr)',
    gap: theme.spacing(1),
    flexGrow: 1
}));

const DayCell = styled(Box)(({ theme, isCurrentMonth }) => ({
    minHeight: '100px',
    padding: theme.spacing(1),
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: isCurrentMonth ? theme.palette.background.paper : theme.palette.grey[50]
}));

const EventChip = styled(Box)(({ theme, eventType }) => {
    const colors = {
        business: theme.palette.primary.light,
        personal: theme.palette.error.light,
        family: theme.palette.success.light,
        etc: theme.palette.grey[300]
    };

    return {
        padding: theme.spacing(0.5, 1),
        borderRadius: theme.shape.borderRadius,
        fontSize: '0.75rem',
        marginTop: theme.spacing(0.5),
        backgroundColor: colors[eventType] || colors.etc,
        color: theme.palette.getContrastText(colors[eventType] || colors.etc)
    };
});

const AppCalendar = () => {
    const theme = useTheme();
    const [view, setView] = useState('month');
    const [currentDate, setCurrentDate] = useState(new Date(2025, 1, 14));

    const events = [
        { id: 1, title: 'Design Review', start: '2025-02-14 10:47', end: '2025-02-14 12:00', type: 'business' },
        { id: 2, title: 'Dinner', start: '2025-02-15 12:00', type: 'personal' },
        { id: 3, title: 'Dart Game?', start: '2025-02-15', allDay: true, type: 'etc' },
        { id: 4, title: 'Doctor\'s Appointment', start: '2025-02-17 12:00', type: 'personal' },
        { id: 5, title: 'Meeting With Client', start: '2025-02-17', allDay: true, type: 'business' },
        { id: 6, title: 'Family Trip', start: '2025-02-19', end: '2025-02-20', allDay: true, type: 'family' }
    ];

    const timeSlots = Array.from({ length: 24 }, (_, i) =>
        `${i.toString().padStart(2, '0')}:00`
    );

    const handleChangeView = (event, newValue) => {
        setView(newValue);
    };

    const renderMonthView = () => {
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const days = [];
        const startDate = new Date(firstDay);
        startDate.setDate(startDate.getDate() - startDate.getDay());

        for (let i = 0; i < 42; i++) {
            const currentDay = new Date(startDate);
            currentDay.setDate(startDate.getDate() + i);
            days.push(currentDay);
        }

        return (
            <CalendarGrid>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <Box key={day} sx={{ p: 1, textAlign: 'center' }}>
                        <Typography variant="subtitle2">{day}</Typography>
                    </Box>
                ))}
                {days.map((day, index) => (
                    <DayCell key={index} isCurrentMonth={day.getMonth() === currentDate.getMonth()}>
                        <Typography variant="body2">{day.getDate()}</Typography>
                        {events
                            .filter(event => new Date(event.start).toDateString() === day.toDateString())
                            .map(event => (
                                <EventChip key={event.id} eventType={event.type}>
                                    {event.title}
                                </EventChip>
                            ))}
                    </DayCell>
                ))}
            </CalendarGrid>
        );
    };

    const renderWeekView = () => {
        const weekDays = Array.from({ length: 7 }, (_, i) => {
            const day = new Date(currentDate);
            day.setDate(currentDate.getDate() - currentDate.getDay() + i);
            return day;
        });

        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: '100px repeat(7, 1fr)', borderBottom: 1, borderColor: 'divider' }}>
                    <Box sx={{ p: 1 }} />
                    {weekDays.map(day => (
                        <Box key={day.toISOString()} sx={{ p: 1, textAlign: 'center', borderRight: 1, borderColor: 'divider' }}>
                            <Typography variant="subtitle2">
                                {day.toLocaleDateString('en-US', { weekday: 'short' })}
                            </Typography>
                            <Typography variant="body2">{day.getDate()}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                    {timeSlots.map(time => (
                        <Box key={time} sx={{ display: 'grid', gridTemplateColumns: '100px repeat(7, 1fr)', borderBottom: 1, borderColor: 'divider' }}>
                            <Box sx={{ p: 1, borderRight: 1, borderColor: 'divider' }}>
                                <Typography variant="caption">{time}</Typography>
                            </Box>
                            {weekDays.map(day => (
                                <Box key={day.toISOString()} sx={{ p: 1, borderRight: 1, borderColor: 'divider', minHeight: '60px' }}>
                                    {events
                                        .filter(event => {
                                            const eventDate = new Date(event.start);
                                            return (
                                                eventDate.toDateString() === day.toDateString() &&
                                                eventDate.getHours() === parseInt(time.split(':')[0])
                                            );
                                        })
                                        .map(event => (
                                            <EventChip key={event.id} eventType={event.type}>
                                                {event.title}
                                            </EventChip>
                                        ))}
                                </Box>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    };

    const renderDayView = () => {
        return (
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <Box sx={{ p: 2, textAlign: 'center', borderBottom: 1, borderColor: 'divider' }}>
                    <Typography variant="h6">
                        {currentDate.toLocaleDateString('en-US', { weekday: 'long' })}
                    </Typography>
                    <Typography variant="subtitle1">
                        {currentDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </Typography>
                </Box>
                <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
                    {timeSlots.map(time => (
                        <Box key={time} sx={{ display: 'flex', borderBottom: 1, borderColor: 'divider' }}>
                            <Box sx={{ width: '100px', p: 1, borderRight: 1, borderColor: 'divider' }}>
                                <Typography variant="caption">{time}</Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1, p: 1, minHeight: '60px' }}>
                                {events
                                    .filter(event => {
                                        const eventDate = new Date(event.start);
                                        return (
                                            eventDate.toDateString() === currentDate.toDateString() &&
                                            eventDate.getHours() === parseInt(time.split(':')[0])
                                        );
                                    })
                                    .map(event => (
                                        <EventChip key={event.id} eventType={event.type}>
                                            {event.title}
                                        </EventChip>
                                    ))}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    };

    const renderListView = () => {
        const sortedEvents = [...events].sort((a, b) => new Date(a.start) - new Date(b.start));

        return (
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {sortedEvents.map(event => {
                    const startDate = new Date(event.start);
                    return (
                        <Box
                            key={event.id}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                p: 2,
                                borderBottom: 1,
                                borderColor: 'divider',
                                '&:hover': { bgcolor: 'action.hover' }
                            }}
                        >
                            <Box sx={{ width: '150px' }}>
                                <Typography variant="subtitle2">
                                    {startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                                </Typography>
                                {!event.allDay && (
                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Clock size={16} style={{ marginRight: theme.spacing(0.5) }} />
                                        <Typography variant="caption">
                                            {startDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                                        </Typography>
                                    </Box>
                                )}
                            </Box>
                            <EventChip eventType={event.type} sx={{ flexGrow: 1 }}>
                                <Typography variant="subtitle2">{event.title}</Typography>
                                {event.allDay && (
                                    <Typography variant="caption">All day</Typography>
                                )}
                            </EventChip>
                        </Box>
                    );
                })}
            </Box>
        );
    };

    // top bar and side section
    return (
        <Box sx={{ p: 3, maxWidth: 1200, margin: '0 auto' }}>

            {/* top section */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 25 }}>
                    <Button startIcon={<Plus />} fullWidth variant="contained" sx={{ bgcolor: '#7367f0', '&:hover': { bgcolor: '#6054e6' }, textTransform: 'none' }}>
                        Add Event
                    </Button>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton>
                            <ChevronLeft />
                        </IconButton>
                        <IconButton>
                            <ChevronRight />
                        </IconButton>
                        <Typography variant="h6" sx={{ ml: 0 }}>
                            February 2025
                        </Typography>
                    </Box>
                </Box>
                <Tabs value={view} onChange={handleChangeView}>
                    <Tab label="Month" value="month" />
                    <Tab label="Week" value="week" />
                    <Tab label="Day" value="day" />
                    <Tab label="List" value="list" />
                </Tabs>
            </Box>

            {/* calender section */}
            <Box sx={{ display: 'flex', gap: 2 }}>
                <Paper sx={{ width: 320, p: 2 }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
                            <DemoItem>
                                <DateRangeCalendar calendars={1} />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                    <Divider sx={{ mb:5 }} />
                    <FormGroup>
                        <Typography variant="h6" sx={{ mb: 1, color:'#444050' }}>
                            Event Filters
                        </Typography>
                        {[
                            { label: 'View All', color: 'default' },
                            { label: 'Personal', color: 'error' },
                            { label: 'Business', color: 'primary' },
                            { label: 'Family', color: 'success' },
                            { label: 'Holiday', color: 'warning' },
                            { label: 'ETC', color: 'info' }
                        ].map(filter => (
                            <FormControlLabel
                                key={filter.label}
                                control={<Checkbox defaultChecked color={filter.color} />}
                                label={filter.label}
                                sx={{ color:'#444050' }}
                            />
                        ))}
                    </FormGroup>
                </Paper>

                <StyledPaper>
                    {view === 'month' && renderMonthView()}
                    {view === 'week' && renderWeekView()}
                    {view === 'day' && renderDayView()}
                    {view === 'list' && renderListView()}
                </StyledPaper>
            </Box>
        </Box>
    );
};

export default AppCalendar;