<template>
  <div>
    <div
      class="p-5 bg-image d-flex align-items-center"
      :style="{
        backgroundImage: `url(${heroImgContact})`,
        height: '400px',
        marginTop: '58px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }"
    >
      <div>
        <h1 class="mb-3 text-white">Tienes algunas duda? Contactanos !!</h1>
        <h4 class="mb-3 text-white">Nos alegrara poder ayudarte !</h4>
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
  </div>
</template>

<script>
import heroImgContact from 'assets/hero-img-contact.jpg'
export default {
  layout: 'default',
  data() {
    return {
      heroImgContact,
    }
  },
}
</script>
