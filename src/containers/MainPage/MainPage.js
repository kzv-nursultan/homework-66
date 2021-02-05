import {React, useState, useEffect} from 'react';
import axios from 'axios';


const MainPage = () => {
    const [responseData, setResponseData] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await axios.get('');
            console.log(response);
        };
    });

    return (
        <>
        MainPage
        </>
    );
};

export default MainPage;