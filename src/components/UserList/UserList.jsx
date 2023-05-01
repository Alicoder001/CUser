/** @format */

import React from 'react';
import './UserList.css';
const UserList = ({ users, deleteF }) => {
  return (
    <div>
      <div className='container userList-container'>
        {users.map((item) => {
          const { url, firstName, lastName, age, from, job, gender, id } = item;
          return (
            <div
              key={id}
              className='card-inner'
            >
              <img
                src={url}
                alt=''
              />
              <h4>
                <span>
                  {firstName} {lastName}
                </span>{' '}
                , <span>{age} age</span>
              </h4>
              <p>From: {from}</p>
              <p>Job: {job}</p>
              <p>Gender: {gender}</p>
              <button
                onClick={() => {
                  deleteF(id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;
