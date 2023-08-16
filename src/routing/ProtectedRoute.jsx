import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Spinner from '../components/Spinner';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className='h-screen flex items-center'>
      <Spinner />
    </div>
  }

  if (user) {
    return children;
  }

  return <Navigate to='/authentication/log-in' state={{ from: location }} replace />;

}
export default ProtectedRoute;
