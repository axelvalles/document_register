<template>
  <main>
    <div class="bg-image d-flex align-items-center hero__container">
      <div class="hero__inside pt-5 px-5">
        <h1 class="display-4 mb-4 text-white text-md-left text-center">
          ¿Tienes algunas duda? ¡Contactanos!
        </h1>
        <h4 class="mb-3 text-white text-md-left text-center">
          ¡Nos alegrara poder ayudarte!
        </h4>
      </div>
    </div>
    <hr />
    <div class="container">
      <h1>Contacto</h1>
      <div>
        <p>
          <i class="fas fa-envelope me-3"></i>
          TemporaryEngine1@gmail.com
        </p>
        <p><i class="fas fa-phone me-3"></i> +1 (512) 952-6557</p>
      </div>
    </div>
  </main>
</template>

<script>
import heroImgContact from '~/assets/hero-img-contact.jpg'
export default {
  layout: 'default',
  data() {
    return {
      heroImgContact,
    }
  },
  head() {
    return {
      title: 'Contáctanos | TemporaryEngine',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Aquí podemos ayudarte a la titulación de tu vehículo, a su vez te brindaremos la información necesaria a la hora de realizar la transacción del mismo, con total seguridad',
        },
      ],
    }
  },
}
</script>

<style scoped>
.hero__container {
  position: relative;
  width: 100%;
  height: 600px;
}

.hero__container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(~/assets/hero-img-contact.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  filter: blur(2px) saturate(100%) brightness(40%);
}

.hero__inside {
  position: relative;
}
</style>
