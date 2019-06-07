<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="ユーザID" required></v-text-field>

    <v-text-field v-model="password" :rules="passwordRules" label="パスワード" required></v-text-field>

    <v-checkbox v-model="checkbox" label="パスワードを保存する" required></v-checkbox>

    <v-btn :disabled="!valid" color="success" @click="validate">ログイン</v-btn>
  </v-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "ユーザIDを入力してください"],
    password: "",
    passwordRules: [v => !!v || "パスワードを入力してください"],
    checkbox: false
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log("ログイン")
        this.$store.dispatch('auth/login')
        this.$router.push('/')
      }
    },
  },
};
</script>