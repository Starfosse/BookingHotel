import { HotelType } from "../../../backend/src/shared/type"

type Props = {
  checkIn: Date
  checkOut: Date
  adultCount: number
  childCount: number
  numberOfNights: number
  hotel: HotelType
}

const BookingDetailsSummary = ({
  checkIn,
  checkOut,
  adultCount,
  childCount,
  numberOfNights,
  hotel,
}: Props) => {
  return (
    <div className="grid gap-4 rounded-lg border border-slate-300 p-5 h-fit">
      <h2 className="text-xl font-bold">Les détails de votre réservation</h2>
      <div className="border-b py-2">
        Location :
        <div className="font-bold">
          {`${hotel.name}, ${hotel.city}, ${hotel.country}`}{" "}
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          Début
          <div className="font-bold">{checkIn.toDateString()} </div>
        </div>
        <div>
          Fin
          <div className="font-bold">{checkOut.toDateString()} </div>
        </div>
      </div>
      <div className="border-t border-b py-2">
        Durée totale du séjour :<div className="font-bold">{numberOfNights} nuits </div>
      </div>

      <div>
        Invités
        <div className="font-bold">
          {adultCount} adultes & {childCount} enfants{" "}
        </div>
      </div>
    </div>
  )
}

export default BookingDetailsSummary
