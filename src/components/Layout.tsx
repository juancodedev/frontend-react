import React from 'react';
import { Container, AppBar, Toolbar, Typography, Button, Link as MuiLink} from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
    return (
        <Container>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <MuiLink component={RouterLink} to="/" underline="none" style={{color: "white"}}>
                    Aplicación de Blog
                    </MuiLink>
                    </Typography>
                    <Button color="inherit" component={RouterLink} to="/posts/create">
                    Crear Post
                    </Button>
                </Toolbar>
            </AppBar>
            <Outlet />

        </Container>
    );
};

export default Layout;
