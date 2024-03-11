import { useQuery } from "react-query"
import * as apiClient from "../api-client"
import LatestDestinationCard from "../components/LastestDestinationCard"

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () => apiClient.fetchHotels())

  const topROwHotels = hotels?.slice(0, 2) || []
  const bottomRowHotels = hotels?.slice(2) || []

  return (
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">Dernières destinations</h2>
      <p> Les destinations les plus récentes ajoutées par nos hôtes</p>
      <div className="grid gap-4">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
          {topROwHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}{" "}
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {bottomRowHotels.map((hotel) => (
            <LatestDestinationCard hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
