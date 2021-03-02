<template>
  <div class="min-h-screen flex bg-gray-50">
    <div class="max-w-md mx-auto">
      <img class="header-image" src="../../assets/images/header-2.png" />
      <div class="rounded-t-xl bg-white w-full h-screen content">
        <h1 class="text-center text-2xl font-bold">Tu ne fais partie <br />d’aucune coloc ...</h1>
        <div class="card">
          <div>
            <h2>Rejoins ta colocation</h2>
            <p>
              Si tes colocs ont déjà préparé un Støv, alors il te suffit de récupérer le lien et de le coller juste
              après.
            </p>
          </div>
          <img src="../../assets/images/illu-1.png" />
        </div>
        <div class="card card--orange" @click="goToNextPage">
          <div>
            <h2>Crée ta colocation</h2>
            <p>Tu souhaites mettre de l’ordre dans ta coloc ? Commence par la créer !</p>
          </div>
          <img src="../../assets/images/illu-2.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageOnboarding",
  methods: {
    goToNextPage() {
      this.$router.push("/onboarding/one");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-image {
  height: 184px;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.content {
  transform: translateY(-14px);
  padding: 23px 24px 16px 24px;

  h1 {
    margin-bottom: 20px;
  }

  .card {
    display: flex;
    background: #ffffff;
    border-radius: 16px;
    padding: 17px 0 20px 20px;
    margin-bottom: 28px;
    filter: drop-shadow(2px 4px 6px rgba(20, 20, 20, 0.08));

    &--orange {
      background: #fc8256;
      box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.35);
    }

    h2 {
      font-weight: 600;
      font-size: 18px;
      margin-bottom: 8px;
    }

    p {
      font-weight: 300;
    }

    img {
      object-fit: contain;
      margin-left: 11px;
    }
  }
}
</style>
