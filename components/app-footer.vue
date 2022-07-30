<template>
  <div>
    <!-- Footer -->
    <hr />
    <footer class="text-center text-lg-start bg-light text-muted">
      <!-- Section: Links  -->
      <section class="">
        <div class="container text-center text-md-start mt-5">
          <!-- Grid row -->
          <div class="row mt-3">
            <!-- Grid column -->
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3">TemporaryEngine</i>
              </h6>
              <p>
                Tratamos de brindarte el mejor servicio de la forma mas rapida y
                confiable!
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <nuxt-link to="/permisos" class="text-reset"
                  >Permisos</nuxt-link
                >
              </p>
              <p>
                <nuxt-link to="/seguros" class="text-reset">seguros</nuxt-link>
              </p>
              <p>
                <nuxt-link to="/titulos" class="text-reset">Titulos</nuxt-link>
              </p>
            </div>
            <!-- Grid column -->

            <!-- Grid column -->
            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>

              <p>
                <i class="fas fa-envelope me-3"></i>
                TemporaryEngine1@gmail.com
              </p>
              <p><i class="fas fa-phone me-3"></i> +1 (512) 952-6557</p>
            </div>
            <!-- Grid column -->
          </div>
          <!-- Grid row -->
        </div>
      </section>
      <!-- Section: Links  -->

      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2021 Copyright:
        <a class="text-reset fw-bold" href="https://mdbootstrap.com/"
          >MDBootstrap.com</a
        >
        <hr />
        <a href="https://www.freepik.es/fotos/auto-estacionado">
          www.freepik.es</a
        >
      </div>
      <!-- Copyright -->
    </footer>
    <!-- Footer -->
  </div>
</template>
