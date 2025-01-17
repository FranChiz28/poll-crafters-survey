import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from '../contexts/ContextProvider';

export default function GuestLayout() {
  const { currentUser, userToken } = useStateContext();

  if (userToken) {
    return <Navigate to="/" />
  }

  return (
    <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="../../public/brain-storm-website-favicon---color.png"
              alt="Your Company"
            />
            
          </div>

          <Outlet />
        </div>
    </div>
  )
}
