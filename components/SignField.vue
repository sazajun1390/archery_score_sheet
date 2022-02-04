<template>
  <v-col cols="12" sm12 md6>
    <v-text-field
      v-model="setMail"
      label="MailAdress"
      :rules="[rules.required, rules.email]"
      hide-details="auto"
      >
    </v-text-field>
    <v-text-field
      v-model="setPass"
      label="Password"
      :rules="[rules.required, rules.pass]"
      hide-details="auto"
    >
    </v-text-field>
  </v-col>
</template>

<script>
export default {
  name: 'SignField',
  data () {
    return {
      rules: {
        required: value => !!value || 'This field is required.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Not an email address.'
        }
      }
    }
  },
  computed: {
    get () {
      
    }
  }
}
</script>
