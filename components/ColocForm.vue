<template>
<div class="h-screen max-h-screen ">

<div class="h-full flex flex-col justify-evenly items-center text-center">
<img  src="../assets/styles/images/mainrock.svg"/>

  
  <h2>Crée ta coloc !</h2>
      <div> Pour commencer, il te faut un nom de colocation pour ton Støv </div>
      <div>
    <label>Choisis un nom stylé</label>
    <input class="text-center" placeholder="La loft Story" type="text" v-model="colocName">
      </div>
    <button @click.prevent="successCreate()" > C'est partie ! </button> 

</div>
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