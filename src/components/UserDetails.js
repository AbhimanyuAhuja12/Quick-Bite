import React, { useState, useEffect } from 'react';

const UserFunction = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'dummy',
    location: 'dummy',
    avatar_url: '',
    url: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.github.com/users/abhimanyuahuja12');
      const json = await data.json();
      setUserInfo(json);
    };

    fetchData();
  }, []);

  const { name, location, avatar_url, html_url } = userInfo;

  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 m-4 text-center">
      <img src={avatar_url} alt={`${name}'s avatar`} className="w-24 h-24 rounded-full mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
      <h2 className="text-lg text-gray-600">{location}</h2>
      <div className="mt-4">
        <a href={html_url}><h3 className="text-gray-700">Github: {html_url}</h3></a> 
        <h4 className="text-gray-700">Contact: abhimanyuahuja12@gmail.com</h4>
      </div>
    </div>
  );
};

export default UserFunction;
