<template>
<div class="h-screen max-h-screen " >
<div class="flex  h-full flex-col justify-around items-center text-center" >
  <div>
  <h2>Loft Story est dans la place !</h2>
  <img class="absolute right-0 top-0" src="../assets/styles/images/maincote.svg"/>
  <div>
    <p>Tu peux récupérer ton lien d'invitation maintenant ou le récupérer plus tard dans la section "Colocation"</p>
  <div>https://stov.space/NcXedl</div> <button>Partager</button>
  </div>
  </div>
  <button @click="createTask()" > commencer à créer mes tâches</button>

</div>
</div>
</template>

<script>
export default {

  methods:{
    createTask(){
       this.$router.push("/tasks/create");
    }
  }
}
</script>

<style>

</style>