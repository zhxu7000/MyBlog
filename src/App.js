import React, { useState } from 'react';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'Zhenke Xu',
    Edu: 'SDUT(Optoelectronic information science and Engineering),USYD(software engineering)',
    description: 'I am excited to start my career!',
    image: 'profile.jpeg'
  });



  return (
      <div>
        <div>
          <img src={user.image} alt={user.name} />
          <h1>{user.name}</h1>
          <h2>{user.Edu}</h2>
        </div>
        <p>{user.description}</p>
      </div>


  );
};

export default ProfilePage;
