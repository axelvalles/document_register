<template>
  <main>
    <!-- Slide -->
    <div
      class="p-5 text-center bg-image"
      :style="{
        backgroundImage: `url(${heroLandingImg})`,
        height: '400px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }"
    >
      <div>
        <div class="d-flex justify-content-center">
          <div>
            <h1 class="mb-3 text-light">Permisos temporales</h1>
            <h4 class="mb-3 text-light">
              para todo tipo de vehiculos en el estado que necesites!
            </h4>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container mt-5 mb-5 ms-4">
      <h2>¿Que son los Permisos temporales?</h2>
      <p>
        Válido por dos meses, el permiso temporario expedido por el DMV le
        permite a los conductores operar un vehículo que aún no forma parte de
        una flota
      </p>
      <p>
        En Estados Unidos, las leyes de tránsito exigen que todos los vehículos
        formen parte del Plan de Registro Internacional para poder operar en
        varias jurisdicciones.
      </p>
      <h2>¿Como Funciona?</h2>
      <p>
        El permiso temporal te permitira circular con tu vehiculo en el estado
        en el que te encuentres sin problemas durante un plazo de dos meses ,
        luego de esto el documento expira y en caso de necesitarlo nuevamente
        podras solicitarlo , aqui te damos todas las opciones que necesitas para
        obtener el tuyo
      </p>
      <h2>Cosas que debes tomar en cuenta</h2>
      <p>
        Si el vehículo viajará fuera del estado, verifique que el permiso
        temporal sea válido para operar en ese estado. El permiso solo puede
        autorizar la operación del vehículo en el estado del cual se solicito.
      </p>
      <p>
        Acontinuacion te daremos varias opciones para que puedas obtener tus
        documentos:
      </p>
    </div>

    <!-- Cards -->
    <div class="container d-flex justify-content-center">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card bg-dark text-white border-0">
            <img
              class="card-img"
              src="~/assets/car_red_img_1.jpg"
              alt="Card image"
            />
            <div
              class="card-img-overlay"
              style="background-color: rgba(0, 0, 0, 0.6)"
            >
              <h5 class="card-title">Permisos temporales</h5>
              <p class="card-text">
                Obten aqui tu permiso temporal por dos meses
              </p>

              <nuxt-link to="/permisos" class="btn btn-primary"
                >Permisos</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-4 float-md-start">
          <div class="card bg-dark text-white border-0">
            <img
              class="card-img"
              src="~/assets/car_black_img_1.jpg"
              alt="Card image"
            />
            <div
              class="card-img-overlay"
              style="background-color: rgba(0, 0, 0, 0.6)"
            >
              <h5 class="card-title">Titulos</h5>
              <p class="card-text">
                Necesitas un Titulo ? , no busque mas aqui podemos brindartelo!
              </p>

              <nuxt-link to="/titulos" class="btn btn-primary"
                >Titulos</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card bg-dark text-white border-0">
            <img
              class="card-img"
              src="~/assets/car_white_img_1.jpg"
              alt="Card image"
            />
            <div
              class="card-img-overlay"
              style="background-color: rgba(0, 0, 0, 0.6)"
            >
              <h5 class="card-title">Seguros</h5>
              <p class="card-text">
                Quieres obtener un seguro para tu vehiculo ? aqui podemos
                ayudarte!!
              </p>

              <nuxt-link to="/seguros" class="btn btn-primary"
                >Seguros</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container mt-5 mb-5 ms-4">
      <h2>Un poco mas de informacion</h2>
      <p>
        Estamos al tanto de el problema de estafas y demas , hay que tomar en
        cuenta que la venta de documentos falsos acarrea grabes concecuencias
        tanto para el vendedor como para el comprador.
      </p>
      <p>
        Puedes revisar si tu documento es verdadero consultandolo en el DMV ,
        alli podras ver las caracteristicas de tu vehiculo otorgados en el
        momento.
      </p>
    </div>
  </main>
</template>

<script>
import heroLandingImg from '~/assets/hero_landing.jpg'
export default {
  layout: 'default',
  data() {
    return {
      heroLandingImg,
    }
  },
  head() {
    return {
      title: 'Inicio | TemporaryEngine',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'author', content: 'Temporary Engine Team' },
        {
          hid: 'description',
          name: 'description',
          content:
            '¡Conduce con seguridad, te brindamos nuestro servicio de seguros vehicular, permisos temporales, titulación para tu vehículo y asesoramiento, todo esto a tu alcance!',
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'permisos temporales de vehiculos, permisos temporales de autos a mexico, permisos temporales para vehiculos americanos, permisos temporales, permisos temporales para carros americanos, placas temporales, placas temporales cerca de mi, placas temporales texas, placas temporales near me, placas y titulos',
        },
      ],
    }
  },
}
</script>
