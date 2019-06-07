<template>
  <v-app>
    <v-navigation-drawer app clipped fixed v-model="leftDrawer" :mini-variant="leftMiniVariant">
      <v-list>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>ダッシュボード</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/prefs">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>設定</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/about">
          <v-list-tile-action>
            <v-icon>store</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>その他</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app clipped-left clipped-right>
      <v-toolbar-side-icon @click.stop="leftDrawer = !leftDrawer"></v-toolbar-side-icon>
      <v-toolbar-title>The Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ $store.state.user ? $store.state.user : '未ログイン' }}</v-toolbar-title>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>account_circle</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-tile @click="logout">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>ログアウト</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      leftMiniVariant: false,
      leftDrawer: false,
      rightDrawer: false
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
      this.$router.push('login')
    },
  },
};
</script>