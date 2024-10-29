import { useAppSelector, useAppDispatch } from '../../lib/store/hooks';
import { logout, modify } from '../../lib/slices/userSlice';
import {  useEffect,useState,useRef } from 'react';

import { useRouter } from 'next/router';
import React from 'react';

function Dashboard() {
 
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.user.user);
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
  
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [gender, setGender] = useState(user?.gender || '');
  const [contact, setContact] = useState(user?.contact || '');
  const alertShown = useRef(false);

  const handleUpdate = () => {
    dispatch(modify({ name, email, gender, contact }));
    alert("Your details are updated");
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/');
  };
  useEffect(() => {
    if (isLoggedIn && !alertShown.current) {
     
      const timer = setTimeout(() => {
        alert("Login successful!");
        alertShown.current = true; 
      }, 100); 

      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);
  if (!isLoggedIn) {
    return <p>Please log in to access</p>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1 className="dashboard-title">Dashboard</h1>
       
        <input
          className="dashboard-input"
          id="name-input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="dashboard-input"
          id="email-input"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="dashboard-input"
          id="gender-input"
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          className="dashboard-input"
          id="contact-input"
          type="number"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button className="dashboard-button" onClick={handleUpdate}>Update</button>
        <br /> <br />
        <button className="dashboard-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
