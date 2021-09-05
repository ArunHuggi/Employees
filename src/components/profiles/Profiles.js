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
    let showEmployees = []

    console.log(employeeData)

    if(profiles && profiles.data){
     Object.values(profiles.data).map((value,index)=>{
      value.email = `${value.firstName}${Math.floor(Math.random()*(999-100+1)+100)}@ahfc.com`
      employeeData.push(value)
     })
    }
    const [pageNo, setPageNo] = useState(1)
    
    
    useEffect(()=>{
      dispatch(getAllProfiles())
    },[])
  console.log(pageNo)
  showEmployees = employeeData.slice(10*(pageNo - 1),pageNo*10)
  console.log({showEmployees})

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
            {/*<th>Company</th>*/}
            </tr>
            {showEmployees.length > 0 ? showEmployees.map((profile,index)=> (
            <tr>
              <td>{pageNo * 10 + index+1 - 10}</td>
              <td className="name">
              <img style={{width:"3rem",height:"3rem",borderRadius:"50%"}} src={profile.picture} alt="dp" />
               <Link to={`/profile/${profile.id}`} > <span> {profile.title.charAt(0).toUpperCase()+profile.title.substring(1)} {profile.firstName} {profile.lastName}</span></Link>
              </td>
              {/* <td>{profile.id}</td> */}
              <td>{profile.email}</td>
              {/*<td>Google</td>*/}
              </tr> 
             
             
            )) : <div className="ml-5 spin" ><Spinner /></div>
            }
          </table>
          </div>
          <div className="pagination">
          <button disabled={pageNo === 1 ? true : false} onClick={()=>setPageNo(pageNo=>pageNo - 1)}>
          <i class="fas fa-arrow-left"></i> Prev Page</button>
          <p className="page-container">{[1,2,3,4,5].map(num=> (
           <span> {num === pageNo ? <span className="current-page">{pageNo}</span> : <span className="pages" onClick={()=>setPageNo(num)}>{num}</span>}</span>
          ))}</p>
          <button disabled={pageNo === 5 ? true : false} onClick={()=>setPageNo(pageNo=>pageNo + 1)}>Next Page <i class="fas fa-arrow-right"></i></button>
          </div>
          </div>
        )
        }
      </Fragment>
    );

}

export default Profiles;