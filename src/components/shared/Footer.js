import {
    Box,
    Button,
    Container,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";

// Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";

const Footer = () => {
    const navItems = [
        {
            route: "Home",
            pathname: "/",
        },
        {
            route: "Pages",
            pathname: "/pages",
        },
        {
            route: "Category",
            pathname: "/category",
        },
        {
            route: "News",
            pathname: "/news",
        },
        {
            route: "About",
            pathname: "/about",
        },
        {
            route: "Contact",
            pathname: "/contact",
        },
    ];

    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box
                    className="w-full text-center"
                    sx={{
                        "& svg": {
                            color: "white",
                        },
                    }}
                >
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                </Box>

                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathname}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>

                <Typography variant="body2" color="gray" textAlign="center">
                    Copyright &copy; {new Date().getUTCFullYear()} The Dragon News | All Rights Reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;  