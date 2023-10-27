import SearchInput from "./components/SearchInput";
import UsersList from "./components/UsersList";
import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);

    const fetchUser = async (text) => {
        try {
            const response = await axios.get('http://localhost:3000', {
                params: {
                    term: text
                }
            });
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    useEffect(()=> {
        const fetchUsersList = async () => {
            try {
                const response = await axios.get('http://localhost:3000');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        }

        fetchUsersList()
    }, [])

  return (
    <Box sx={{pt:'64px'}}>
        <SearchInput fetchUser={fetchUser} />
      <UsersList users={users}/>
    </Box>
  );
}

export default App;
