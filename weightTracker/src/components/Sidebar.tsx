import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryIcon from '@mui/icons-material/History';
import BusinessIcon from '@mui/icons-material/Business';
import MapIcon from '@mui/icons-material/Map';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const drawerWidth = 240;
    const location = useLocation();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: (theme) => theme.palette.primary.main,
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <List sx={{ p: 0, color: 'white' }}>
                <ListItem disablePadding>
                    <ListItemButton
                        className={`header-button ${location.pathname === '/' ? 'active' : ''
                            }`}
                        component={Link}
                        to="/"
                    >
                        <ListItemIcon>
                            <HomeIcon sx={{ height: 30, width: 30, color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={'Home'}
                            primaryTypographyProps={{ fontSize: 'large' }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: 1 }}>
                    <ListItemButton
                        className={`header-button ${location.pathname === '/Booking' ? 'active' : ''
                            }`}
                        component={Link}
                        to="/Booking"
                    >
                        <ListItemIcon>
                            <CalendarMonthIcon
                                sx={{ height: 30, width: 30, color: 'white' }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={'Strength'}
                            primaryTypographyProps={{ fontSize: 'large' }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: 1 }}>
                    <ListItemButton
                        className={`header-button ${location.pathname === '/Sites' ? 'active' : ''
                            }`}
                        component={Link}
                        to="/Sites"
                    >
                        <ListItemIcon>
                            <BusinessIcon sx={{ height: 30, width: 30, color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={'Cardio'}
                            primaryTypographyProps={{ fontSize: 'large' }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: 1 }}>
                    <ListItemButton
                        className={`header-button ${location.pathname === '/Map' ? 'active' : ''
                            }`}
                        component={Link}
                        to="/Map"
                    >
                        <ListItemIcon>
                            <MapIcon sx={{ height: 30, width: 30, color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={'Map'}
                            primaryTypographyProps={{ fontSize: 'large' }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ mt: 1 }}>
                    <ListItemButton
                        className={`header-button ${location.pathname === '/History' ? 'active' : ''
                            }`}
                        component={Link}
                        to="/History"
                    >
                        <ListItemIcon>
                            <HistoryIcon sx={{ height: 30, width: 30, color: 'white' }} />
                        </ListItemIcon>
                        <ListItemText
                            primary={'Settings'}
                            primaryTypographyProps={{ fontSize: 'large' }}
                        />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;