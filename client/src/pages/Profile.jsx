import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import userData from '../assets/userData.json'

import { UserNavbar, Loader, UserDetail } from '../components';

const Profile = () => {
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const id = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      const userDetailData = userData.map((element) => {
        if (element.id === id.id)
          return element;        
      });

      setUserDetail(userDetailData);
      setLoading(false)
    }

    fetchUserData();
  }, [id]);

  const handleCard = () => {
    if (loading) {
      return (
        <Loader />
      );
    } else {
      return (
        <UserDetail userDetail={userDetail} />
      );
    }
  }

  return (
    <section>
      <UserNavbar />

      {handleCard()}
    </section>
  )
}

export default Profile