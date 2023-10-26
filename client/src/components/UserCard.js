import {Box, Paper, Typography} from "@mui/material";
import Mail from '../assets/Mail.svg'
import Phone from '../assets/Phone.svg'
import UserModal from "./UserModal";
import {useState} from "react";

const UserCard = ({ user }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Paper
                sx={{ p: '24px', maxWidth: '309px', minHeight: '266px', mb:'25px' }}
                onClick={openModal}
            >
                <Typography variant={"h2"} sx={{ mb: '24px' }}>
                    {user.name}
                </Typography>

                <Box>
                    <Box sx={{ display: 'flex', mb: '12px' }}>
                        <img style={{ marginRight: '14px' }} src={Phone} alt="Phone number" />
                        <Typography variant={"body2"}>{user.phone}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                        <img style={{ marginRight: '14px' }} src={Mail} alt="Email address" />
                        <Typography variant={"body2"}>{user.email}</Typography>
                    </Box>
                </Box>
            </Paper>

            <UserModal open={isModalOpen} onClose={closeModal} user={user} />
        </>
    )
}

export default UserCard