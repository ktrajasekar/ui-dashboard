import React from 'react';
import MainCard from 'components/MainCard';
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from 'utils/custom-fetch';
import { useDispatch, useSelector } from 'react-redux';
import { savePeopleData } from 'store/reducers/api';

const ReactTookitAPIPapge = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos', []);
    const dispatch = useDispatch();

    return (
        <MainCard>
            <button aria-label="Increment value" onClick={() => dispatch(savePeopleData(data))}>
                Save API value to State
            </button>
            {loading === true ? (
                <CircularProgress />
            ) : (
                data.map(({ id, title }) => (
                    <div style={{ textTransform: 'capitalize', margin: '10px' }} key={id}>
                        {title}
                    </div>
                ))
            )}
        </MainCard>
    );
};

export default ReactTookitAPIPapge;
