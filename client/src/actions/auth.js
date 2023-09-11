import * as api from '../api/';
import { setCurrentUser } from './currentUser';

export const login = (authData, setIsLoading, navigate) => async (dispatch) => {
    try {
        const { data } = await api.login(authData);
        dispatch({ type: 'AUTH', data});
        setIsLoading(false);
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/notes');
    } catch (error) {
        setIsLoading(false);
        console.log(error);
    }
}

export const signup = (authData,  setIsLoading, navigate) => async(dispatch) => {
    try {
        const {data} = await api.signUp(authData);
        dispatch({type: 'AUTH', data});
        setIsLoading(false);
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))));
        navigate('/notes');
    } catch (error) {
        setIsLoading(false);
    }
}