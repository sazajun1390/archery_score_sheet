<template>
    <v-row justify-center align-center>
      <SignField />
      <v-btn
        elevation="8"
        @click="overlay = !overlay"
        opacity="0.5"
        style="margin-top: 10px;"
      >Submit
      </v-btn>
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

export default {
  name: 'SignUpPage',
  data: () => ({
      overlay: false,
  }),
  methods: {
    
  },
  watch: {
    overlay (val:any) {
      val && setTimeout(() => {
        this.overlay = false
      }, 2000)
    },
  },
}
</script>
