<template>
  <div>
    <!-- <div v-for="(user, index) in users" :key="index">
      <p>User: {{ user.name }}, Age: {{ user.age }}</p>
    </div> -->
    <p>Count is {{ counts }}</p>
    <v-text-field v-model="number">enter the number</v-text-field>
    <v-btn @click.stop="incrementRandom({amount:10})" >submit</v-btn>
    <v-btn @click="changeNumber" >increase</v-btn>
    <v-btn @click="decreaseCount" >deccrease</v-btn>

  </div>
</template>

<script>
import {mapGetters, mapMutations,mapActions} from 'vuex'
export default {
  computed: {
  ...mapGetters({
    counts:'counter/getCounter'
  })
  },
  methods: {
    ...mapMutations({
      increaseCount: 'counter/increaseCount',
      decreaseCount: 'counter/decreaseCount'
    }),
    
    ...mapActions({
      changeNumber: 'counter/changeNumber',
      incrementRandom: 'counter/incrementRandom'
    })
   
  },
  data() {
    return {
      amount: undefined,
      number: 0
    }
  },
}
</script>

<style lang="scss" scoped></style>
