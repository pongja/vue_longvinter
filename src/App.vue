<template>
  <ToHeader />
  <router-view />
  <ToFooter />
</template>
<script setup>
import ToHeader from '~/components/ToHeader.vue'
import ToFooter from '~/components/ToFooter.vue'

</script>
<style>
body{
  margin: 0;
  padding: 0;
}
</style>
