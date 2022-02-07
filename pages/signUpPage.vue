<template>
  <v-contaier>
    <v-row justify="center" align="center">
      <SignField />
      <v-col cols="12" justify="end">
        <v-btn
          elevation="8"
          @click="overlay = !overlay"
          opacity="0.5"
          style="margin-top: 10px;"
          color="primary"
          :disabled="disabled"
        >Submit
        </v-btn>
      </v-col>
      <v-overlay :value="overlay">
        <v-progress-circular
          indeterminate
          size="64"
        ></v-progress-circular>
      </v-overlay>
    </v-row>
  </v-contaier>
</template>

<script lang="ts">

/*
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
*/

export default {
  name: 'SignUpPage',
  data: () => ({
    overlay: false,
    disabled: false
  }),
  watch: {
    overlay (val:any) {
      val && setTimeout(() => {
        this.overlay = false
      }, 2000)
    }
  }
}
</script>
