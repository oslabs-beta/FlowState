import React, { useCallback, useState, useEffect } from 'react';
import AnalyticsTile from './AnalyticsTile.jsx';

const LossAnalytics = ({ socket }) => {

  const [ lossData, setLossData ] = useState();

  useEffect(() => {
    socket.on('sentLossDataAnalytics', (lossData) => {
      setLossData(lossData[lossData.length - 1].loss.toFixed(6).toString().slice(1));
    });
    return () => {
      socket.off('sentLossDataAnalytics');
    }
  }, []);
    
    return (
      <AnalyticsTile info={
        {
          type:'Loss',
          value: lossData,
          description: ' shows how well your algorithm models your data.',
          color: '#F4B400',
          boldName: 'Loss'}}/>
    );
};

export default LossAnalytics;