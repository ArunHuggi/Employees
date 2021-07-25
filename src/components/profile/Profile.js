import React,{Fragment, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {getProfileById} from '../../actions/profile'
import { useSelector,useDispatch } from 'react-redux'
import Spinner from '../layout/Spinner'
import ProfileTop from './ProfileTop'



const Profile = ({match}) => {

  const user_profile = useSelector(state => state.profile)
  console.log({user_profile})
  const dispatch = useDispatch()
  useEffect(()=>{
    console.log(match.params.id)

    dispatch(getProfileById(match.params.id))
  
},[getProfileById, match.params.id])

    
    return (
      <Fragment>
        {user_profile?.profile === null ? (
          <Spinner />
        ) : (
          <Fragment>
            <div className="btn btn-secondary employee_profile">
              <Link to="/profiles"> <i class="fas fa-arrow-left"></i> Back to Profiles</Link>
            </div>
            <ProfileTop profile={user_profile.profile} />
          </Fragment>
        )}
      </Fragment>
    );


}


export default Profile ;