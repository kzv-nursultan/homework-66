import React, {useState, useEffect} from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';

const withErrorHandler = (WrappedComponent, axios) => {
    return function WithErrorHandler (props) {

        const [error, setError] = useState(null);

        const interceptor = React.useMemo(()=>{
            return(
             axios.interceptors.request.use(request => {
              setError(true);                  
              return request;                  
             }),
             axios.interceptors.response.use(response => {
                setError(false);
                return response}, 
                error => {
                console.log(error);                  
                throw error;          
              })
            );   
        });
        
        useEffect(() => {
            return axios.interceptors.response.eject(interceptor);
          }, [interceptor]);
          
        const modalClose = () => {
            setError(null);
        };

     return (
       <>
        <Spinner show={!!error} closed={modalClose}/>
        <WrappedComponent {...props}/>
       </>
     )
    };
};

export default withErrorHandler;