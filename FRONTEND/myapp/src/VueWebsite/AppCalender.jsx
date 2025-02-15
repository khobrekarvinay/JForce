import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";

import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormGroup,
    List,
    ListItem,
    ListItemText,
    Paper,
    styled,
    Typography,
    useTheme,
} from "@mui/material";
import { tokens } from "../theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import Header from "../components/Header";
import './Calendar.css'
import { Plus } from "lucide-react";


const AppCalender = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState([]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            calendarApi.addEvent({
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            });
        }
    };

    const handleEventClick = (selected) => {
        if (
            window.confirm(
                `Are you sure you want to delete the event '${selected.event.title}'`
            )
        ) {
            selected.event.remove();
        }
    };

    return (
        <Box m="20px">
            {/* <Header title="Calendar" subtitle="Full Calendar Interactive Page" /> */}

            <Box display="flex" justifyContent="space-between">
                {/* CALENDAR SIDEBAR */}
                <Box
                    flex="1 1 20%"
                >
                    {/* <Box sx={{ display: 'flex', gap: 2 }}> */}
                    <Paper sx={{}}>
                        <Box sx={{ padding:'10px 15px' }}>
                            <Button startIcon={<Plus />} fullWidth variant="contained" sx={{ bgcolor: '#7367f0', '&:hover': { bgcolor: '#6054e6' }, textTransform: 'none' }}>
                                Add Event
                            </Button>
                        </Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>
                                <DemoItem>
                                    <DateRangeCalendar calendars={1} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                        <Divider sx={{ mb: 5 }} />
                        <FormGroup sx={{ p: 2 }}>
                            <Typography variant="h6" sx={{ mb: 1, color: '#444050' }}>
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
                                    sx={{ color: '#444050' }}
                                />
                            ))}
                        </FormGroup>
                    </Paper>
                    {/* </Box> */}

                </Box>

                {/* CALENDAR */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="75vh"
                        plugins={[
                            dayGridPlugin,
                            timeGridPlugin,
                            interactionPlugin,
                            listPlugin,
                        ]}
                        headerToolbar={{
                            left: "prev,next",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
                        }}
                        initialView="dayGridMonth"
                        editable={true}
                        selectable={true}
                        selectMirror={true}
                        dayMaxEvents={true}
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events) => setCurrentEvents(events)}
                    // initialEvents={[
                    //     {
                    //         id: "12315",
                    //         title: "All-day event",
                    //         date: "2022-09-14",
                    //     },
                    //     {
                    //         id: "5123",
                    //         title: "Timed event",
                    //         date: "2022-09-28",
                    //     },
                    // ]}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default AppCalender;
