<template>   
  <div>
    <v-tabs v-model="active" dark grow slider-color="yellow">
      <v-tab>Aグループ</v-tab>
      <v-tab>Bグループ</v-tab>
      <v-tab>Cグループ</v-tab>
      <v-tab>Dグループ</v-tab>
      <v-tab>Eグループ</v-tab>
      <v-tab>購入済み</v-tab>
    </v-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: null,
    };
  }
};
</script>
  