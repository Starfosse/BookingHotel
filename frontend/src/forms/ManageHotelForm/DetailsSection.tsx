import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<HotelFormData>()

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">
        Ajouter un hôtel
      </h1>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Nom
        <input
          type="text"
          className="border rounded w-full py-1 px-2 text-normal"
          {...register("name", {
            required: "Ce champs est requis",
          })}></input>
        {errors.name && (
          <span className="text-red-500">
            {errors.name.message}
          </span>
        )}
      </label>

      <div className="flex gap-4">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Ville
          <input
            type="text"
            className="border rounded w-full py-1 px-2 text-normal"
            {...register("city", {
              required: "Ce champs est requis",
            })}></input>
          {errors.city && (
            <span className="text-red-500">
              {errors.city.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Pays
          <input
            type="text"
            className="border rounded w-full py-1 px-2 text-normal"
            {...register("country", {
              required: "Ce champs est requis",
            })}></input>
          {errors.country && (
            <span className="text-red-500">
              {errors.country.message}
            </span>
          )}
        </label>
      </div>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Description
        <textarea
          rows={10}
          className="border rounded w-full py-1 px-2 text-normal"
          {...register("description", {
            required: "Ce champs est requis",
          })}></textarea>
        {errors.description && (
          <span className="text-red-500">
            {errors.description.message}
          </span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Prix par nuit
        <input
          type="number"
          min={1}
          className="border rounded w-full py-1 px-2 text-normal"
          {...register("pricePerNight", {
            required: "Ce champs est requis",
          })}></input>
        {errors.pricePerNight && (
          <span className="text-red-500">
            {errors.pricePerNight.message}
          </span>
        )}
      </label>

      <label className="text-gray-700 text-sm font-bold max-w-[50%]">
        Avis
        <select
          className="border rounded w-full p-2 text-gray-700 font-normal"
          {...register("starRating", {
            required: "Ce champs est requis",
          })}>
          <option value="" className="text-sm font-bold">
            Sélectionnez
          </option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option value={num}>{num}</option>
          ))}
        </select>
        {errors.starRating && (
          <span className="text-red-500">
            {errors.starRating.message}
          </span>
        )}
      </label>
    </div>
  )
}

export default DetailsSection
