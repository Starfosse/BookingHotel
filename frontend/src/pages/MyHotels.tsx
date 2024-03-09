import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import * as apiClient from "../api-client"
import { useAppContext } from "../contexts/AppContext"
const MyHotels = () => {
  const showToast = useAppContext()
  const { data: hotelData } = useQuery(
    "fetchMyHotels",
    apiClient.fetchMyHotels,
    {
      onError: () => {
        showToast
      },
    }
  )
  if (!hotelData) return <span>Aucun hôtel trouvé</span>
  return (
    <div className="space-y-5">
      <span className="flex justify-between">
        <h1 className="text-3xl font-bold">Mes hôtels</h1>
        <Link
          to="/add-hotel"
          className="flex bg-blue-600 text-white font-bold p-2 hover:bg-blue-500">
          Ajouter un hôtel
        </Link>
      </span>
      <div className="grid grid-cols-1 gap-8">
        {hotelData.map((hotel) => (
          <div className="flex flex-col justify-between border border-slate-300 rounded-lg p-8 gap-5"></div>
        ))}
      </div>
    </div>
  )
}

export default MyHotels
