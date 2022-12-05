<template>
  <div class="status-container">
    <img :src="imgPath" />
  </div>
</template>

<script lang="ts">
import { acceptedStatuses } from '@/utils/constants'

export default {
  computed: {
    status() {
      const statusParam = Number(this.$route.params?.status) ?? 404

      return acceptedStatuses.includes(statusParam) ? statusParam : 404
    },
    imgPath() {
      return require(`../static/images/${this.status}.png`)
    },
  },
}
</script>

<style>
.status-container img {
  max-width: 50%;
}
</style>
