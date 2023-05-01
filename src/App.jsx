/** @format */

import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NewsUsers from './components/NewUsers/NewsUsers';
import UserList from './components/UserList/UserList';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const len = users.length;
  const closeModal = (e) => {
    if (e.target.className === 'overlay' || e.key === 'Escape') {
      setShowModal(false);
    }
  };
  const deleteF = (id) => {
    setUsers((data) => {
      const newArr = data.filter((item) => item.id !== id);
      return newArr;
    });
  };
  return (
    <div
      onClick={closeModal}
      onKeyDown={closeModal}
      className='App'
    >
      <Navbar len={len} />
      <main>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className='create-user'
        >
          Create
        </button>
        {!len && <h2 className='no-users'>No users</h2>}
        <UserList
          users={users}
          deleteF={deleteF}
        />
      </main>
      {showModal && (
        <NewsUsers
          setShowModal={setShowModal}
          setUsers={setUsers}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
