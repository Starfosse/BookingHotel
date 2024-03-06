import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "react-query"
import * as apiClient from "../api-client"
import { useAppContext } from "../contexts/AppContext"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"

export type SignInFormData = {
  email: string
  password: string
}

const SigIn = () => {
  const queryClient = useQueryClient()
  const { showToast } = useAppContext()
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignInFormData>()

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      showToast({
        message: "Connexion réussie !",
        type: "SUCCESS",
      })
      await queryClient.invalidateQueries("validateToken")
      navigate("/")
      console.log("user logged")
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" })
    },
  })

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data)
  })

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-5">
      <h2 className="text-3xl font-bold">Se connecter</h2>

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
      <span className="flex items-center justify-between">
        <span className="text-sm">
          Pas de compte ?
          <Link className="underline" to="/register">
            Creer un compte ici
          </Link>{" "}
        </span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">
          Se connecter
        </button>
      </span>
    </form>
  )
}

export default SigIn
