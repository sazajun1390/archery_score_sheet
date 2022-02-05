<template>
  <v-col cols="12" sm12 md6>
    <v-form 
      ref="Mail"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
      v-model="setMail"
      label="MailAdress"
      :rules="emailRules"
      hide-details="auto"
      >
      </v-text-field>
    </v-form>
    <v-form ref="Pass">
      <v-text-field
      v-model="setPass"
      label="Password"
      :rules="passRules"
      hide-details="auto"
      >
      </v-text-field>
    </v-form>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SignField',
  data () {
    return {
      valid: true,
      setMail: '',
      setPass: '',
      success: false,
      emailRules: [
        (v:string) => !!v || 'E-mail is required',
        (v:string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passRules: [
        (v:string) => !!v || 'Passward is required',
        (v:string) => /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d)[a-zA-Z\\d]{8,32}$/.test(v) || 'error message'
      ],
    }
  },
  computed: {
    get () {
      
    }
  }
})
</script>