import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Spinner from '../components/Spinner';
import frame from '../assets/icon/Frame.png';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // const loading = true;
  const location = useLocation();
  const isAdmin = location.pathname.split('/'); 
  // console.log(isAdmin[1]);

  if (loading && isAdmin[1] === 'admin') {
    console.log('Admin Dashboard');
    return <div className='w-screen h-[200vh]'>
      <img src={frame} className='w-full h-full' />
    </div>
  }

  else if (loading) {
    return <div className='h-screen flex items-center'>
      <Spinner />
    </div>
  }

  else if (user) {
    return children;
  }

  return <Navigate to='/authentication/log-in' state={{ from: location }} replace />;

}
export default ProtectedRoute;
