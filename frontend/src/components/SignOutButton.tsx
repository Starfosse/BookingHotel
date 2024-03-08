import { useMutation, useQueryClient } from "react-query"
import * as apiClient from "../api-client"
import { useAppContext } from "../contexts/AppContext"

const SignOutButton = () => {
  const queryClient = useQueryClient()
  const { showToast } = useAppContext()
  const mutation = useMutation(apiClient.signOut, {
    onSuccess: async () => {
      await queryClient.invalidateQueries("validateToken")
      showToast({ message: "Déconnecté!", type: "SUCCESS" })
    },
    onError: (error: Error) => {
      showToast({ message: error.message, type: "ERROR" })
    },
  })

  const handleClick = () => {
    mutation.mutate()
  }

  return (
    <button
      onClick={handleClick}
      className="text-blue-600 px-2 font-bold bg-white hover:bg-gray-100">
      Se déconnecter
    </button>
  )
}

export default SignOutButton
