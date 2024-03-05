import { useForm } from "react-hook-form"

export type RegisterFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">
        Creez un compte
      </h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          Prénom
          <input
            className="border rounded w-full py-1 px-2 text-normal"
            {...register("firstName", {
              required: "Ce champs est requis",
            })}></input>
          {errors.firstName && (
            <span className="text-red-500">
              {errors.firstName.message}
            </span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Nom
          <input
            className="border rounded w-full py-1 px-2 text-normal"
            {...register("lastName", {
              required: "Ce champs est requis",
            })}></input>
          {errors.lastName && (
            <span className="text-red-500">
              {errors.lastName.message}
            </span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 text-normal"
          {...register("email", {
            required: "Ce champs est requis",
          })}></input>
        {errors.email && (
          <span className="text-red-500">
            {errors.email.message}
          </span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Mot de passe
        <input
          type="password"
          className="border rounded w-full py-1 px-2 text-normal"
          {...register("password", {
            required: "Ce champs est requis",
            minLength: {
              value: 6,
              message:
                "Le mot de passe doit contenir au moins 6 caractères",
            },
          })}></input>
        {errors.password && (
          <span className="text-red-500">
            {errors.password.message}
          </span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Confirmez votre mot de passe
        <input
          type="password"
          className="border rounded w-full py-1 px-2 text-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "Ce champs est requis"
              } else if (watch("password") !== val) {
                return "Vos mots de passe ne correspondent pas"
              }
            },
          })}></input>
        {errors.confirmPassword && (
          <span className="text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}
      </label>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">
          Créer un compte
        </button>
      </span>
    </form>
  )
}

export default Register
