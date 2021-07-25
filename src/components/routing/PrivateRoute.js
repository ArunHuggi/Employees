import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'



const PrivateRoute = ({ component : Component , ...rest}) => {
   const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
   const loading = useSelector(state => state.auth.loading)

    return (
        <Route {...rest} 
        render={props => !isAuthenticated && !loading ? (<Redirect to ='/' />) : 
        (<Component {...props} />)} 
        />
    );
}

PrivateRoute.propTypes = {
    auth : PropTypes.object.isRequired
};


export default PrivateRoute;