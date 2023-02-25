import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import data from '../assets/data.json';

import { Detail, Loader } from '../components'

const GymDetail = () => {
  const [gymDetail, setGymDetail] = useState({});
  const [loading, setLoading] = useState(true);

  const id = useParams();

  useEffect(() => {
    const fetchGymData = async () => {
      const gymDetailData = data.map((element) => {
        if (element.id === id.id)
          return element;        
      });

      setGymDetail(gymDetailData);
      setLoading(false)
    }

    fetchGymData();
  }, [id]);

  const handleCard = () => {
    if (loading) {
      return (
        <Loader />
      );
    } else {
      return (
        <Detail gymDetail={gymDetail} />
      );
    }
  };

  return (
    <div>
      {handleCard()}
    </div>
  )
}

export default GymDetail