<template>
  <div>
    <nav-bar/>
    <aside-menu/>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src
import NavBar from "../components/base/NavBar";
import AsideMenu from "../components/base/AsideMenu";


export default {
  name: 'Home',
  components: {
    NavBar,
    AsideMenu
  }
}
</script>
