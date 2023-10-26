import { Box, Typography, Grid } from "@mui/material";
import UserCard from "./UserCard";

const UsersList = ({users}) => {


    return (
        <Box sx={{ mt: '32px' }}>
            <Grid container sx={{justifyContent:'space-between', flexWrap:'wrap'}}>
                {users.map((user, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <UserCard user={user} />
                    </Grid>
                ))}
            </Grid>
            {users.length === 0 && <Typography>Nothing here...</Typography>}
        </Box>
    );
}

export default UsersList;
