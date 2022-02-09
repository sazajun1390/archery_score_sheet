<template>
  <v-contaier>
    <v-row justify="center" align="center">
      <v-col cols="12" sm='40' >
        <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
          <v-text-field
          dense
          outlined
          v-model="setMail"
          label="Mail"
          hide-details="auto"
          :style="{background: $vuetify.theme.themes.dark.headBackgrouund}"
          :rules="emailRules"
          :value="mailValue"
          @blur="tapCount++"
          >
          </v-text-field>
          <v-text-field
          dense
          outlined
          v-model="setPass"
          label="Password"
          hide-details="auto"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          :rules="passRules"
          :style="{background: $vuetify.theme.themes.dark.headBackgrouund}"
          :value="passValue"
          @click:append= "showPass = !showPass"
          @input="tapCount++"
          class="mt-1"
          >
          </v-text-field>
        </v-form>
      </v-col>
      <v-col cols="12" justify="end">
        <v-btn
          elevation="8"
          @click="overlay = !overlay"
          opacity="0.5"
          class="mt-2"
          color="primary"
          :disabled="!valid || (tapCount < 2)"
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
import VeeValidate from 'vee-validate';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
*/

export default {
  name: 'SignUpPage',
  data: () => ({
    tapCount: 0,
    overlay: false,
    disabled: true,
    valid: true,
    valueJudge: false, 
    mailValue: undefined,
    passValue: undefined,
    setMail: null,
    setPass: null,
    success: false,
    showPass: false,
    submit: true,
    emailRules: [
      (v:string) => !!v || 'E-mail is required',
      (v:string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passRules: [
      (v:string) => !!v || 'Passward is required',
      (v:string) => /.+@.+\..+/.test(v) || 'error message'
    ]
  }),
  watch: {
    overlay (val:any) {
      val && setTimeout(() => {
        this.overlay = false
      }, 2000)
    },
    mailValue (val) {

    }
  },
  methods: {
    
  },
}
</script>
