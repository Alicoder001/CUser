/** @format */

import React, { useState } from 'react';
import { v4 as uid } from 'uuid';
import './NewUserForm.css';
const NewsUsers = ({ setShowModal, setUsers }) => {
  const [user, setUser] = useState({
    url: '',
    firstName: '',
    lastName: '',
    age: '',
    from: '',
    job: '',
    gender: undefined,
    id: uid(),
  });
  const updateUser = (key, value) => {
    setUser((data) => {
      return { ...data, [key]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers((data) => {
      return [...data, user];
    });
    setShowModal(false);
  };

  return (
    <div className='modal-wrapper'>
      <div className='overlay'>
        <div className='modal'>
          <form
            action=''
            onSubmit={handleSubmit}
          >
            <label>
              <span>Img url:</span>
              <input
                onChange={(e) => {
                  updateUser('url', e.target.value);
                }}
                type='url'
                placeholder='image link'
                required
              />
            </label>
            <label>
              <span>First Name:</span>
              <input
                onChange={(e) => {
                  updateUser('firstName', e.target.value);
                }}
                type='text'
                placeholder='First name'
                required
              />
            </label>
            <label>
              <span>Last Name:</span>

              <input
                onChange={(e) => {
                  updateUser('lastName', e.target.value);
                }}
                type='text'
                placeholder='Last name'
                required
              />
            </label>
            <label>
              <span>Age:</span>
              <input
                onChange={(e) => {
                  updateUser('age', e.target.value);
                }}
                type='number'
                placeholder='Age:'
                required
              />
            </label>
            <label>
              <span>From:</span>
              <input
                onChange={(e) => {
                  updateUser('from', e.target.value);
                }}
                type='text'
                placeholder='From'
                required
              />
            </label>
            <label>
              <span>Job:</span>
              <input
                onChange={(e) => {
                  updateUser('job', e.target.value);
                }}
                type='text'
                placeholder='Job'
                required
              />
            </label>
            <div className='gender'>
              <span>Gender:</span>
              <label htmlFor=''>
                <small>Male</small>
                <input
                  onChange={(e) => {
                    updateUser('gender', e.target.value);
                  }}
                  type='radio'
                  required
                  name='gender'
                  value='male'
                />
              </label>
              <label htmlFor=''>
                <small>Female</small>
                <input
                  type='radio'
                  required
                  name='gender'
                  value='female'
                />
              </label>
            </div>
            <button className='modal-btn'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsUsers;
