<template>
<div>
  <h2>Create Coloc Form work</h2>
    <form>
    <label>Rentrer le nom de votre coloc</label>
    <input type="text" v-model="colocName">
    <button v-if="colocName" @click.prevent="successCreate()" > Créer la collocation </button> 
  </form>

</div>
</template>

<script>
export default {
  data(){
  return{
    colocName:"",
  }

},
methods:{
  successCreate(){

    this.$emit("trigger-succes")

  }
}

}
</script>

<style>

</style>