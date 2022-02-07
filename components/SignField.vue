<template>
  <div>
    <v-col cols="12" sm='40' >
      <v-form
        ref="Mail"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          dense
          outlined
          value=''
          v-model="setMail"
          label="Mail"
          hide-details="auto"
          :style="{background: $vuetify.theme.themes.dark.headBackgrouund}"
          :rules="emailRules"
        >
        </v-text-field>
      </v-form>
    </v-col>
    <v-col cols="12" sm='40'>
      <v-form ref="Pass" style="margin-top: 20px;">
        <v-text-field
          dense
          outlined
          value=''
          v-model="setPass"
          label="Password"
          hide-details="auto"
          :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPass ? 'text' : 'password'"
          :rules="passRules"
          :style="{background: $vuetify.theme.themes.dark.headBackgrouund}"
          @click:append= "showPass = !showPass"
        >
        </v-text-field>
      </v-form>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SignField',
  data: () => {
    return {
      valid: true,
      setMail: '',
      setPass: '',
      success: false,
      showPass: false,
      emailRules: [
        (v:string) => !!v || 'E-mail is required',
        (v:string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passRules: [
        (v:string) => !!v || 'Passward is required',
        (v:string) => /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\\d)[a-zA-Z\\d]{8,32}$/.test(v) || 'error message'
      ]
    }
  }
})
</script>

<style scoped lang="sass">

</style>
