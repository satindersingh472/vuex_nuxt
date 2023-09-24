<template>
    <div>
<v-btn to="/inspire">
inspire
</v-btn>

<p>Count is {{counts}}</p>
<v-btn to="dogs" >Dogs</v-btn>
<div>
    
</div>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters({
                image:'animal/getImageUrl',
                counts:'counter/getCounter'
            })
        },
        methods: {
            ...mapActions({
                obtainUrl: 'animal/obtainUrl'
            })
        },
    }
</script>

<style lang="scss" scoped>

</style>