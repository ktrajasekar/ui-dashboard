import React from 'react';
import MainCard from 'components/MainCard';
import { useSelector } from 'react-redux';

const ReactAPIDisplay = () => {
    const peopleData = useSelector((state) => state.api.peopleData);
    return (
        <MainCard>
            {peopleData.length > 0
                ? peopleData.map(({ id, title }) => (
                      <div style={{ textTransform: 'capitalize', margin: '10px' }} key={id}>
                          {title}
                      </div>
                  ))
                : 'No Data in state'}
        </MainCard>
    );
};

export default ReactAPIDisplay;
