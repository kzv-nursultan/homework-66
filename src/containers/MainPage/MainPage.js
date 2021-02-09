import {React, useState, useEffect} from 'react';
import { nanoid } from 'nanoid'
import axiosGet from '../../axios-get';
import withErrorHandler from '../hoc/withErrorHandler';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';


const MainPage = () => {
    const [responseData, setResponseData] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await axiosGet.get('/.json');
            setResponseData(response.data);
        };
        fetchData().catch(console.error);
    },[]);

    const throwError = () => {
        throw new Error('Well, this happened.');
    };


    return (
        <ErrorBoundary key={nanoid()}>
        {Object.keys(responseData).map(data=>
            <div key={data}>
                <h2>{responseData[data]['title']}</h2>
                <p>{responseData[data]['content']}</p>
            </div>
        )}
        <button onClick={throwError} className='bg-danger text-white'>
            Throw error
        </button>
        </ErrorBoundary>
    );
};

export default withErrorHandler( MainPage, axiosGet );