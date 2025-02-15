import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, Button, Checkbox, Divider, FormControlLabel, FormGroup, Paper, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./Calendar.css";
import { Plus } from "lucide-react";

const AppCalender = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    // Default events list
    const [currentEvents, setCurrentEvents] = useState([
        {
            id: "1",
            title: "Dinner",
            start: "2025-02-15T00:00:00",
            allDay: false,
        },
        {
            id: "2",
            title: "Dart Game?",
            start: "2025-02-15T10:25:00",
            allDay: true,
        },
        {
            id: "3",
            title: "Meditation",
            start: "2025-02-15T13:00:00",
            allDay: true,
        },
        {
            id: "4",
            title: "Product Review",
            start: "2025-02-15T15:00:00",
            allDay: true,
        },
        {
            id: "5",
            title: "Design Review",
            start: "2025-02-15T12:53:00",
            start: "2025-02-15T00:00:00",
            allDay: true,
        },
    ]);

    const handleDateClick = (selected) => {
        const title = prompt("Please enter a new title for your event");
        const calendarApi = selected.view.calendar;
        calendarApi.unselect();

        if (title) {
            const newEvent = {
                id: `${selected.dateStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay,
            };

            calendarApi.addEvent(newEvent);
            setCurrentEvents(prevEvents => [...prevEvents, newEvent]); // Update state properly
        }
    };

    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'?`)) {
            selected.event.remove();
            setCurrentEvents(prevEvents => prevEvents.filter(event => event.id !== selected.event.id)); // Remove event properly
        }
    };

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between">
                {/* Calendar Sidebar */}
                <Box flex="1 1 20%">
                    <Paper>
                        <Box sx={{ padding: "14px 15px" }}>
                            <Button
                                startIcon={<Plus />}
                                fullWidth
                                variant="contained"
                                sx={{ bgcolor: "#7367f0", "&:hover": { bgcolor: "#6054e6" }, textTransform: "none" }}
                            >
                                Add Event
                            </Button>
                        </Box>
                        <Divider sx={{ mb: 0 }} />
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={["DateRangeCalendar", "DateRangeCalendar"]}>
                                <DemoItem>
                                    <DateRangeCalendar calendars={1} />
                                </DemoItem>
                            </DemoContainer>
                        </LocalizationProvider>
                        <Divider sx={{ mb: 0 }} />
                        <FormGroup sx={{ p: 2 }}>
                            <Typography variant="h6" sx={{ mb: 1, color: "#444050" }}>
                                Event Filters
                            </Typography>
                            {[
                                { label: "View All", color: "default" },
                                { label: "Personal", color: "error" },
                                { label: "Business", color: "primary" },
                                { label: "Family", color: "success" },
                                { label: "Holiday", color: "warning" },
                                { label: "ETC", color: "info" },
                            ].map(filter => (
                                <FormControlLabel
                                    key={filter.label}
                                    control={<Checkbox defaultChecked color={filter.color} />}
                                    label={filter.label}
                                    sx={{ color: "#444050" }}
                                />
                            ))}
                        </FormGroup>
                    </Paper>
                </Box>

                {/* Calendar */}
                <Box flex="1 1 100%" ml="15px">
                    <FullCalendar
                        height="100vh"
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
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
                        events={currentEvents}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default AppCalender;
