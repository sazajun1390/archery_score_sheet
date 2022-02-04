<template>
  <v-row justify-center align-center>
    <SignField />
    <v-overlay :value="overlay">
    <v-progress-circular
      indeterminate
      size="64"
    ></v-progress-circular>
    </v-overlay>
  </v-row>
</template>
<script lang="ts">

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import Store from '../store/store'

export default {
  name: 'SignUpPage'
}

const auth = getAuth()
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user
    // ...
  })
  .catch((error) => {
    const errorCode = error.code
    const errorMessage = error.message
    // ..
  }
)
</script>
