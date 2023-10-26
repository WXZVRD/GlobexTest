import React from "react";
import {Modal, Paper, Typography, Box, IconButton} from "@mui/material";
import CloseIcon from '../assets/CloseIcon.svg'

const UserModal = ({ open, onClose, user }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Paper sx={{
                p: '24px',
                maxWidth: '500px',
                width:'100%',
                minHeight:'468px',
                borderRadius:'16px'
            }}>
                <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', mb: '40px'}}>
                    <Typography variant={"h2"}>
                        {user.name}
                    </Typography>

                    <IconButton onClick={onClose}>
                        <img src={CloseIcon} alt={"Close button"}/>
                    </IconButton>
                </Box>

                <Box sx={{mb: '40px'}}>
                    <Box sx={{display:'flex', mb:'14px'}}>
                        <Typography sx={{width:'137px', mr:'40px'}} variant={"body1"}>Телефон: </Typography>
                        <Typography sx={{width:'275px'}}  variant={"body2"}>{user.phone}</Typography>
                    </Box>

                    <Box sx={{display:'flex', mb:'14px'}}>
                        <Typography sx={{width:'137px', mr:'40px'}} variant={"body1"}>Почта: </Typography>
                        <Typography sx={{width:'275px'}} variant={"body2"}>{user.email}</Typography>
                    </Box>

                    <Box sx={{display:'flex', mb:'14px'}}>
                        <Typography sx={{width:'137px', mr:'40px'}} variant={"body1"}>Дата приема: </Typography>
                        <Typography sx={{width:'275px'}}  variant={"body2"}>{user.hire_date}</Typography>
                    </Box>

                    <Box sx={{display:'flex', mb:'14px'}}>
                        <Typography sx={{width:'137px', mr:'40px'}} variant={"body1"}>Должность: </Typography>
                        <Typography sx={{width:'275px'}} variant={"body2"}>{user.position_name}</Typography>
                    </Box>

                    <Box sx={{display:'flex'}}>
                        <Typography sx={{width:'137px', mr:'40px'}} variant={"body1"}>Подразделение: </Typography>
                        <Typography sx={{width:'275px'}}  variant={"body2"}>{user.department}</Typography>
                    </Box>
                </Box>

                <Box sx={{mb:'40px'}}>
                    <Typography sx={{mb:'12px'}} variant={"body1"}>Дополнительная информация</Typography>
                    <Typography variant={"body2"}>
                        Разработчики используют текст в качестве заполнителя макта страницы. Разработчики используют текст в качестве заполнителя макта страницы.
                    </Typography>
                </Box>
            </Paper>
        </Modal>
    );
};

export default UserModal;
