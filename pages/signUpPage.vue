<template>
   <v-row justify-center align-center>
       <v-col cols="12" sm12 md6>
           <v-text-field
            label="MailAdress"
            :rules="rules"
            hide-details="auto"
           >
           </v-text-field>
           <v-text-field
            label="Password"
            :rules="rules"
            hide-details="auto"
           >
           </v-text-field>
       </v-col>
   </v-row> 
</template>
<script lang="ts">

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default {
  name: 'InspirePage'
}
//in
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});
</script>