import { useMutation, useQuery } from "react-query"
import { useParams } from "react-router"
import * as apiClient from "../api-client"
import ManageHotelForm from "../forms/ManageHotelForm/ManageHotelForm"
import { useAppContext } from "../contexts/AppContext"

const EditHotel = () => {
  const { showToast } = useAppContext()
  const { hotelId } = useParams()

  const { data: hotel } = useQuery(
    "fetchMyHotelById",
    () => apiClient.fetchMyHotelById(hotelId || ""),
    {
      enabled: !!hotelId,
    }
  )

  const { mutate, isLoading } = useMutation(
    apiClient.updateMyHotelById,
    {
      onSuccess: () => {
        showToast({
          message: "Hôtel Sauvegardé !",
          type: "SUCCESS",
        })
      },
      onError: () => {
        showToast({
          message:
            "Erreur lors de la sauvegarde de l'hôtel",
          type: "ERROR",
        })
      },
    }
  )

  const handleSave = (hotelFormData: FormData) => {
    mutate(hotelFormData)
  }

  return (
    <ManageHotelForm
      hotel={hotel}
      onSave={handleSave}
      isLoading={isLoading}
    />
  )
}

export default EditHotel
