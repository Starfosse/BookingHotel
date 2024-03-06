import { Link } from "react-router-dom"
import { useAppContext } from "../contexts/AppContext"

const Header = () => {
  const {isLoggedIn} = useAppContext()
  return (
    <div className="bg-blue-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">BookHotel.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ?? <>
          <Link to="/my-bookings">Mes réservations</Link> </>
          <Link to="/my-hotels">Mes hôtels</Link> </>
          <button>Se déconnecter</button>
          }
          <Link
            to="/sign-in"
            className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100">
            Se connecter
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Header
