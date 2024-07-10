import React, { useState, useEffect } from 'react';

const UserProfileCard = () => {
  const [userProfile, setUserProfile] = useState({
    id: '',
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  useEffect(() => {
    // Simulate fetching user profile data (replace with actual fetch logic)
    fetchUserProfile();
  }, []);

  const fetchUserProfile = () => {
    // Simulate fetching user profile data from an API
    // Replace with actual API endpoint and handling
    setUserProfile({
      id: 1, // Example user ID
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      address: '123 Main St, Anytown, USA',
    });
  };

  const handleInputChange = (e) => {
    setUserProfile({
      ...userProfile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate updating user profile (replace with actual API call logic)
    console.log('Saving profile:', userProfile);
    // Optionally, you can add logic to update state or display success message
  };

  const handleDeleteAccount = () => {
    // Simulate deleting user account (replace with actual API call logic)
    console.log('Deleting account:', userProfile.id);
    // Optionally, you can add logic to redirect or display a confirmation message
    setUserProfile({
      id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
    });
  };

  return (
    <div
      style={{
        maxWidth: '400px',
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={userProfile.name}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              marginTop: '5px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userProfile.email}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              marginTop: '5px',
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="phone" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={userProfile.phone}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              marginTop: '5px',
            }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="address" style={{ fontWeight: 'bold', display: 'block', marginBottom: '5px' }}>
            Address:
          </label>
          <textarea
            id="address"
            name="address"
            value={userProfile.address}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '10px',
              fontSize: '16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              boxSizing: 'border-box',
              minHeight: '100px',
            }}
          ></textarea>
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            marginRight: '10px',
          }}
        >
          Save Profile
        </button>
        <button
          type="button"
          onClick={handleDeleteAccount}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          Delete Account
        </button>
      </form>
    </div>
  );
};

export default UserProfileCard;
