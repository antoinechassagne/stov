<template>
  <div>

    <Colocform v-if="showCreate"  @trigger-succes="toggleCreate()"  />
  <Colocsucces v-else />
  </div>

</template>

<script>
import Colocform from '../../components/ColocForm';
import Colocsucces from '../../components/ColocSuccess'


export default {
    components:{
        Colocform,
        Colocsucces
    },
    data(){
        return{
            showCreate: true
        }
    },
    methods:{
        toggleCreate(){
            this.showCreate = false
        }
    }

}
</script>

<style>

</style>