import React,{ Fragment,useEffect,useRef ,useState,useCallback} from 'react';
import {Link} from 'react-router-dom'
import {getAllProfiles} from '../../actions/profile'
import { useSelector,useDispatch } from 'react-redux'

import Spinner from '../layout/Spinner' 


const Profiles = () => {
  const profiles = useSelector(state => state.profile.profiles)
  const loading = useSelector(state => state.profile.loading)
  const dispatch = useDispatch()
    const employeeData = []

    if(profiles && profiles.data){
      for (const value of Object.values(profiles.data)) {
        employeeData.push(value)
      }
    }
    const [pageNo, setPageNo] = useState(1)
    
    
    useEffect(()=>{
      dispatch(getAllProfiles(pageNo))
  },[getAllProfiles,pageNo])
  


    return (
      <Fragment>
        {loading ? (
          <Spinner />
        ) : (
          <div className="profiles-container">
            <div className="employees-data">
              <h1 className="large text-primary">Employees List</h1>
              <p className="lead">
              <i className="fab fa-connectdevelop"></i> Browse and Explore Employees
              </p>
            </div>
           
            <div className="table-contaner">
          <table className="table">
            <tr>
            <th>Sl No</th>
            <th>Name</th>
            {/* <th>Employee Id</th> */}
            <th>Email</th>
            <th>Company</th>
            </tr>
            {employeeData.length >0 ? employeeData.map((profile,index)=> (
            <tr>
              <td>{pageNo * 10 + index+1 - 10}</td>
              <td className="name">
              <Link to={`/profile/${profile.id}`} > <img style={{width:"3rem",height:"3rem",borderRadius:"50%"}} src={profile.picture} alt="dp" />
               </Link>
             <span> {profile.title.charAt(0).toUpperCase()+profile.title.substring(1)} {profile.firstName} {profile.lastName}</span>
              </td>
              {/* <td>{profile.id}</td> */}
              <td>{profile.email}</td>
              <td>TCS</td>
              </tr> 
             
             
            )) : <div className="ml-5 spin" ><Spinner /></div>
            }
          </table>
          </div>
          <div className="pagination">
          <button disabled={pageNo === 1 ? true : false} onClick={()=>setPageNo(pageNo=>pageNo - 1)}>
          <i class="fas fa-arrow-left"></i> Prev Page</button>
          {/* <p>Page No : {pageNo}</p> */}
          <p className="page-container">{[1,2,3,4,5,6,7,8,9].map(num=> (
           <span> {num === pageNo ? <span className="current-page">{pageNo}</span> : <span className="pages" onClick={()=>setPageNo(num)}>{num}</span>}</span>
          ))}</p>
          <button disabled={pageNo === 9 ? true : false} onClick={()=>setPageNo(pageNo=>pageNo + 1)}>Next Page <i class="fas fa-arrow-right"></i></button>
          </div>
          </div>
        )
        }
      </Fragment>
    );

}

export default Profiles;