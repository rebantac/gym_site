import React, { useEffect, useState } from 'react';

import data from '../assets/data.json'

const Dashboard = () => {
  const [id, setId] = useState('');
  const [gymDetail, setGymDetail] = useState({});
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setId(localStorage.getItem('gym_id'));

    const fetchGymData = async () => {
      const gymDetailData = data.map((element) => {
        if (element.id === id.id)
          return element;   
        console.log("Dashboard : ", id)
        console.log("Element Id : ", element.id)     
      });

      setGymDetail(gymDetailData);
      console.log(gymDetail)
      setLoading(false)
    }

    console.log("Dashboard outside: ", id)
    fetchGymData();
  }, [])
  

  return (
    <div></div>
  )
}

export default Dashboard