import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('users', () => {
  const user = ref(null)
  const errorMessage = ref("")

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {}

  const handleSignup = (credentials) => {
    const { email, password, username } = credentials

    if (password.length < 6) {
      console.log("Password length is to short")
      return errorMessage.value = "Password length is to short"
    }

    if (username.length < 4) {
      console.log("Username length is to short")
      return errorMessage.value = "Username length is to short"
    }

    if (!validateEmail(email)) {
      console.log("Email is not valid")
      return errorMessage.value = "Email is not valid"
    }

    errorMessage.value = ""

  }
  
  const handleLogout = () => {}

  const getUser = () => {}

  return {
    user,
    errorMessage,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser
  }

})
