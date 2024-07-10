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
  const [isEditing, setIsEditing] = useState(false);
  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="relative py-20 2xl:py-40 bg-white overflow-hidden">
      {/* User image (optional) */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Edit and Save Profile Button */}
          <div className="flex justify-end p-4">
            <button
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-200"
              onClick={handleEditProfile}
            >
              {isEditing ? 'Save Profile' : 'Edit Profile'}
            </button>
          </div>

          {/* User Details Form */}
          <form onSubmit={handleSubmit} className={isEditing ? '' : 'pointer-events-none'}>
            <div className="p-4">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={userProfile.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  readOnly={!isEditing}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userProfile.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  readOnly={!isEditing}
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                  Phone:
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={userProfile.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  readOnly={!isEditing}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
                  Address:
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={userProfile.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500"
                  rows="4"
                  readOnly={!isEditing}
                ></textarea>
              </div>
              {isEditing && (
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition duration-200 mr-4"
                  >
                    Save Profile
                  </button>
                  <button
                    type="button"
                    onClick={handleDeleteAccount}
                    className="py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition duration-200"
                  >
                    Delete Account
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
