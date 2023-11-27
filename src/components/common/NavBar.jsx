import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

const pages = ["Mis Frutas", "Favoritas", "Registrar Fruta", "Perfiles"];
const settings = ["Mi Perfil", "Cerrar Sesión"];

export const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const navigate = useNavigate();
    const { setIsAuth, myProfile } = useContext(DataContext);
    const [myPhoto, setMyPhoto] = useState("");

    useEffect(() => {
        if (myProfile.length !== 0) {
            setMyPhoto(myProfile.userinstance.photo_url)
        }
    }, [myProfile])

    function HandleCloseSession() {
        localStorage.setItem("session", false)
        localStorage.setItem("access_token", "")
        localStorage.setItem("id", "")
        setIsAuth(false)
        navigate("/")
    }

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <HomeIcon
                        sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    />
                    <Link to="/">
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                display: { xs: "none", md: "flex" },
                                fontFamily: "monospace",
                                fontWeight: 700,
                                letterSpacing: ".3rem",
                                color: "white",
                                textDecoration: "none",
                            }}
                        >
                            FDD
                        </Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            <Link to="mis-frutas">
                                <MenuItem key={pages[0]}>
                                    <Typography
                                        textAlign="center"
                                        sx={{ color: "white" }}
                                    >
                                        {pages[0]}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to="favoritas">
                                <MenuItem key={pages[1]}>
                                    <Typography
                                        textAlign="center"
                                        sx={{ color: "white" }}
                                    >
                                        {pages[1]}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to="registrar-fruta">
                                <MenuItem key={pages[2]}>
                                    <Typography
                                        textAlign="center"
                                        sx={{ color: "white" }}
                                    >
                                        {pages[2]}
                                    </Typography>
                                </MenuItem>
                            </Link>
                            <Link to="perfiles">
                                <MenuItem key={pages[3]}>
                                    <Typography
                                        textAlign="center"
                                        sx={{ color: "white" }}
                                    >
                                        {pages[3]}
                                    </Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: "flex", md: "none" },
                            flexGrow: 1,
                            fontFamily: "monospace",
                            fontWeight: 700,
                            letterSpacing: ".3rem",
                            color: "inherit",
                            textDecoration: "none",
                        }}
                    >
                        FDD
                    </Typography>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        <Link to="mis-frutas">
                            <Button
                                key={pages[0]}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {pages[0]}
                            </Button>
                        </Link>
                        <Link to="favoritas">
                            <Button
                                key={pages[1]}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {pages[1]}
                            </Button>
                        </Link>
                        <Link to="registrar-fruta">
                            <Button
                                key={pages[2]}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {pages[2]}
                            </Button>
                        </Link>
                        <Link to="perfiles">
                            <Button
                                key={pages[3]}
                                sx={{ my: 2, color: "white", display: "block" }}
                            >
                                {pages[3]}
                            </Button>
                        </Link>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{ p: 0 }}
                            >
                                <Avatar alt="Remy Sharp" src={myPhoto} />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: "45px" }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem key={settings[0]}>
                                <Link to="mi-perfil">
                                    <Typography
                                        textAlign="center"
                                        sx={{ color: "white" }}
                                    >
                                        {settings[0]}
                                    </Typography>
                                </Link>
                            </MenuItem>
                            <MenuItem
                                onClick={HandleCloseSession}
                                key={settings[1]}
                            >
                                <Typography
                                    textAlign="center"
                                    sx={{ color: "white" }}
                                >
                                    {settings[1]}
                                </Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
