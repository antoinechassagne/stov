<template>
<div>
  <h2>Create Coloc Succes work</h2>
  <div>
    <p>Bravo vous avez créer votre collocation n'hésitez pas a le partager grace a ce lien incroyable</p>
  <div>Ceci est le lien incroyable</div> <button>copier le lien</button>
  </div>
  <button  > Maintenant crée votre premiere tâches </button>

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