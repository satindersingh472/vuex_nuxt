<template>
  <div>
    <v-img :src="imageUrl" width="500px" height="500px" class="ma-5" ></v-img>
    <v-btn @click="obtainUrl">Get Image</v-btn>
    <v-btn> Counts:  {{counts}}</v-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      imageUrl: 'animal/getImageUrl',
      counts:'counter/getCounter'
    }),
    },
    methods: {
      ...mapActions({
        obtainUrl: 'animal/obtainUrl',
        changeNumber: 'counter/changeNumber'
      }),
  },
}
</script>

<style lang="scss" scoped></style>
