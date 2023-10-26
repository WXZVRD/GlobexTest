import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: 'Arial, sans-serif',
        h2: {
            fontWeight: 700,
            fontSize: '24px',
            lineHeight: '30px',
            color: '#262C40'
        },
        body1: {
            fontHeight: 400,
            fontSize: '18px',
            lineHeight: '24px',
            color: '#262C40'
        },
        body2: {
            fontHeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#8189A3'
        }
    },
    palette: {
        primary: {
            main: "#D4DEFE",
        },
        secondary: {
            main: "#D4DEFE",
        },
    },
    components: {
        MuiBackdrop: {
            styleOverrides:{
                root: {
                    backgroundColor: 'rgba(188, 195, 208, 0.30)',
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    padding:"3px 0",
                    borderRadius: "30px",
                    border: '1px solid #D4DEFE',
                    '& label.Mui-focused': {
                        borderRadius: "30px",
                        border: '1px solid #D4DEFE',
                    },
                    '& .MuiInput-underline:after': {
                        borderBottom: 'none',
                    },
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none',
                        },
                        '&:hover fieldset': {
                            border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            border: 'none',
                        },
                    }
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.10)',
                }
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    padding: 'none'
                }
            }
        }
    }
});

export default theme;
