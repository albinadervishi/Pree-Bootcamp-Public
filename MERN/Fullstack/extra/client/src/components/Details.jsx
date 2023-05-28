import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Details = (props) => {
  const { update, setUpdate } = props;
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const onCheck = (property) => {
    const updatedValue = !user[property];
    const payload = {
      [property]: updatedValue,
    };
    axios
      .patch(`http://localhost:8000/api/users/edit/${id}`, payload)
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          [property]: updatedValue,
        }));
        setUpdate((prevUpdate) => !prevUpdate);
      })
      .catch((err) => console.log(err));
  };

  const goToEdit = () => {
    navigate(`/users/edit/${id}`);
  };

  return (
    <div>
      <h2>
        <img
          width="70px"
          height="70px"
          src={user.imgURL}
          alt="Profile"
          className="rounded-circle"
        />
      </h2>
      <h2>{user.firstName}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>
        <label htmlFor="belt">BetaPlan Belt</label>
        <br />
        <input
          id="belt"
          type="checkbox"
          checked={user.belt}
          onChange={() => onCheck('belt')}
        />
      </p>
      <p>
        <label htmlFor="degree">College Degree</label>
        <br />
        <input
          id="degree"
          type="checkbox"
          checked={user.degree}
          onChange={() => onCheck('degree')}
        />
      </p>
      <button onClick={goToEdit}>Go to Edit Page</button>
    </div>
  );
};

export default Details;
