import { AppBar, Grid, IconButton, Toolbar, Typography, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    const findLocation = (path: string) => {
        if (path === "/") return "Home";
        else return path.replace('/', '')
    }

    return (
        <Box>
            <AppBar
                sx={{
                    position: 'fixed',
                    width: '100%',
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: (theme) => theme.palette.primary.main,
                    height: '4rem',
                }}
            >
                <Toolbar>
                    <Grid container alignItems="center">
                        {/* Left side: Name of the page */}
                        <Grid item xs={2} textAlign="left">
                            <Typography variant="h5" component="h1" fontWeight="bold" letterSpacing={2}>
                                Benji's Fitness App
                            </Typography>
                        </Grid>

                        {/* Middle: Current router location */}
                        <Grid item xs={8} textAlign="center">
                            <Typography variant="h5">
                                {findLocation(location.pathname)}
                            </Typography>
                        </Grid>

                        {/* Right side: Login icon or something */}
                        <Grid item xs={2} textAlign="right">
                            <IconButton color="inherit">
                                <AccountCircle sx={{ fontSize: 32 }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;