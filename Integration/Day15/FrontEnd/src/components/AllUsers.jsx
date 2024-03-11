import { useEffect, useState } from 'react';
import getAllUsers from '../apifolder/Api';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const userListResponse = await getAllUsers();
        const userList = userListResponse.data; // Access the 'data' property
        console.log('User list from API:', userList);
        if (Array.isArray(userList)) {
          setUsers(userList);
        } else {
          setError('Invalid user data received from the server.');
        }
      } catch (error) {
        setError('Error fetching users. Please try again later.');
      }
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="user-list-container">
      <h2>All Users</h2>
      {error && <div className="error-message">{error}</div>}
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} style={userItemStyle}>
            <p style={usernameStyle}>Username: {user.username}</p>
            <p style={emailStyle}>Email: {user.email}</p>            
          </li>
        ))}
      </ul>
    </div>
  );
};

const userItemStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderBottom: '1px #ccc dotted',
  margin:'30px',
  float:'left'
};

const usernameStyle = {
  fontWeight: 'bold',
  color: 'blue',
};

const emailStyle = {
  fontStyle: 'italic',
  color: 'green',
};

export default AllUsers;
