import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ItemList = ( {users}) => {
  const navigate = useNavigate();


  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
  //     setUsers(response.data);

  //   });
  // }, [ setUsers]);

  const handleClick = () => {
    navigate('/create');
  };

  return (
    <>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
          </tr>
        </thead>
        {users.map((user, index) => (
          <tr key={user.id}>
            <th scope="row">{index + 1}</th>
            <td>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </td>
          </tr>
        ))}
      </table>
      <button onClick={handleClick}>Create New User</button>
    </>
  );
};

export default ItemList;
