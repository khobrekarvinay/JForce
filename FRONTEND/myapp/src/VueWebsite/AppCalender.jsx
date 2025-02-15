import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { Box, Button, Paper, Divider, Typography, Drawer, IconButton, FormControlLabel, Checkbox, FormGroup, } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Menu, Plus } from "lucide-react";
import AddEventModal from "./AddEventModal";
import "./Calendar.css";

const AppCalendar = () => {

    // event filters
    const [filters, setFilters] = useState({
        all: true,
        personal: true,
        business: true,
        family: true,
        holiday: true,
        etc: true,
    });

    // Event List
    const [currentEvents, setCurrentEvents] = useState([
        { id: "1", title: "Dinner", start: "2025-02-15T00:00:00", allDay: false, category: "personal" },
        { id: "2", title: "Dart Game?", start: "2025-02-15T10:25:00", allDay: true, category: "personal" },
        { id: "3", title: "Meditation", start: "2025-02-15T13:00:00", allDay: true, category: "personal" },
        { id: "4", title: "Product Review", start: "2025-02-15T15:00:00", allDay: true, category: "business" },
        { id: "5", title: "Doctors Appointment", start: "2025-02-17T00:00:00", allDay: false, category: "family" },
        { id: "6", title: "Meeting With Client", start: "2025-02-17T00:00:00", allDay: true, category: "business" },
        { id: "7", title: "Family Trip", start: "2025-02-19T00:00:00", end: "2025-02-20T00:00:00", allDay: true, category: "family" },
    ]);

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    // Date Click
    const handleDateClick = (selected) => {
        setSelectedDate(selected.startStr);
        setModalOpen(true);
    };

    // Handle Click (Delete)
    const handleEventClick = (selected) => {
        if (window.confirm(`Are you sure you want to delete '${selected.event.title}'?`)) {
            selected.event.remove();
            setCurrentEvents((prev) => prev.filter((event) => event.id !== selected.event.id));
        }
    };

    // Adding New Event
    const handleAddEvent = (eventData) => {
        const newEvent = {
            id: `${eventData.startDate}-${eventData.title}`,
            title: eventData.title,
            start: eventData.startDate,
            end: eventData.endDate,
            allDay: eventData.allDay,
            category: eventData.category,
        };
        setCurrentEvents((prev) => [...prev, newEvent]);
        setModalOpen(false);
    };

    // Filter Events Based on Selected Categories
    const filteredEvents = currentEvents.filter(event => filters.all || filters[event.category]);

    // Handle Filter Change
    const handleFilterChange = (category) => {
        setFilters((prev) => {
            const newFilters = { ...prev, [category]: !prev[category] };
            if (category === "all") {
                Object.keys(newFilters).forEach((key) => {
                    newFilters[key] = newFilters.all;
                });
            } else {
                newFilters.all = Object.values(newFilters).slice(1).every(Boolean);
            }
            return newFilters;
        });
    };

    return (
        <Box m="20px">
            {/* Toggle Button */}
            <IconButton onClick={() => setSidebarOpen(true)} sx={{ display: { md: "none" }, mb: 2 }}>
                <Menu size={24} />
            </IconButton>

            <Box display="flex" justifyContent="space-between">
                {/* Sidebar Drawer for small screens */}
                <Drawer
                    anchor="left"
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                    sx={{ display: { md: "none" } }}
                >
                    <SidebarContent setModalOpen={setModalOpen} filters={filters} handleFilterChange={handleFilterChange} />
                </Drawer>

                {/* Sidebar for larger screens */}
                <Box flex="1 1 20%" sx={{ display: { xs: "none", md: "block" } }}>
                    <SidebarContent setModalOpen={setModalOpen} filters={filters} handleFilterChange={handleFilterChange} />
                </Box>

                {/* Calendar */}
                <Box flex="1 1 100%" ml={{ md: "15px" }}>
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
                        events={filteredEvents} // Apply filtered events

                        eventDidMount={(eventInfo) => {
                            // Define color mapping for categories
                            const categoryColors = { personal: "#ff5722", business: "#3f51b5", family: "#4caf50", holiday: "#ffeb3b", etc: "#9c27b0", };

                            const bgColor = categoryColors[eventInfo.event.extendedProps.category] || "#007bff";

                            if (!eventInfo.view.type.includes("list")) {
                                eventInfo.el.style.backgroundColor = bgColor; eventInfo.el.style.borderColor = bgColor; eventInfo.el.style.color = "#fff";
                            }
                        }}
                    />
                </Box>
            </Box>

            {/* Add Event Modal */}
            <AddEventModal open={modalOpen} onClose={() => setModalOpen(false)} selectedDate={selectedDate} onAddEvent={handleAddEvent} />
        </Box>
    );
};

// Sidebar Component with Filters
const SidebarContent = ({ setModalOpen, filters, handleFilterChange }) => (
    <Paper sx={{ width: "300px", height: "96vh", padding: "14px 15px", display: "flex", flexDirection: "column" }}>
        <Button
            startIcon={<Plus />}
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#7367f0", "&:hover": { bgcolor: "#6054e6" }, textTransform: "none" }}
            onClick={() => setModalOpen(true)}
        >
            Add Event
        </Button>
        <Divider sx={{ mb: 1, width: "100%" }} />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangeCalendar calendars={1} sx={{ width: "100%", maxHeight: "300px", overflow: "hidden" }} />
        </LocalizationProvider>

        <Divider sx={{ mt: 2 }} />

        <FormGroup sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 1, color: "#444050" }}>Event Filters</Typography>
            {[
                { label: "View All", key: "all", color: "default" },
                { label: "Personal", key: "personal", color: "error" },
                { label: "Business", key: "business", color: "primary" },
                { label: "Family", key: "family", color: "success" },
                { label: "Holiday", key: "holiday", color: "warning" },
                { label: "ETC", key: "etc", color: "info" },
            ].map((filter) => (
                <FormControlLabel
                    key={filter.key}
                    control={<Checkbox color={filter.color} checked={filters[filter.key]} onChange={() => handleFilterChange(filter.key)} />}
                    label={filter.label}
                    sx={{ color: "#444050" }}
                />
            ))}
        </FormGroup>
    </Paper>
);

export default AppCalendar;
