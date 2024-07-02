import { useEffect } from 'react';

// Custom hook definition
const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
};

export default useScrollToTop;

/*
* Use it every pages/routes in react project
* To use this hook just import and call the function like this
* useScrollToTop(); 
*/
