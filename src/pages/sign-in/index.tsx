
import { useState } from 'react';
import { useAppDispatch } from '../../lib/store/hooks';
import { login } from '../../lib/slices/userSlice';
import { useRouter } from 'next/router';
import React from 'react';

function Sign_in() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleLogin = () => {
    dispatch(login({ name, email, gender, contact }));
    if (name && email && gender && contact) {
      router.push('/dashboard');
    } else {
      alert("Please fill all details");
    }
  };

  return (
    <div className="container">
      
       
        <div id='sub-container'>
        <h1 id='sign-title'>Sign In</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="number"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        </div>
      
    
    </div>
  );
}

export default Sign_in;

