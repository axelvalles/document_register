<template>
  <main class="container">
    <p class="mt-4">
      LLenando este formulario podras brindarnos los datos necesarios para poder
      realizar tu documento , llena los campos vacios y haz click en el botton
      "enviar"
    </p>
    <hr />
    <div class="container">
      <ValidationObserver v-slot="{ invalid }">
        <form ref="form" @submit.prevent="onSubmit">
          <div class="row justify-content-center">
            <h1 class="d-flex justify-content-center">
              Informacion de Contacto
            </h1>
            <div class="col-12 col-md-10 col-lg-6">
              <div class="row g-3">
                <label for="Name" class="form-label mt-5">Nombre del solicitante</label>
                <div class="col">
                  <ValidationProvider v-slot="{ errors }" rules="required|alpha" name="firtsName">
                    <input
v-model="firtsName" type="text" class="form-control mb-2"
                      :class="{ 'border-danger shadow-none': errors[0] }" placeholder="Nombre"
                      aria-label="First name" />
                    <span class="text-danger"> {{ errors[0] }} </span>
                  </ValidationProvider>
                </div>
                <div class="col">
                  <ValidationProvider v-slot="{ errors }" rules="required|alpha" name="secondName">
                    <input
v-model="secondName" type="text" class="form-control mb-2"
                      :class="{ 'border-danger shadow-none': errors[0] }" placeholder="Apellido"
                      aria-label="Last name" />
                    <span class="text-danger"> {{ errors[0] }} </span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="form-group">
                <label for="Email" class="form-label mt-4">Numero de telefono</label>
                <ValidationProvider v-slot="{ errors }" rules="required|numeric">
                  <input
id="Number" v-model="number" type="text" class="form-control mb-2"
                    :class="{ 'border-danger shadow-none': errors[0] }" aria-describedby="emailHelp"
                    placeholder="+1 012-345-6789" />
                  <span class="text-danger"> {{ errors[0] }} </span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="Email" class="form-label mt-4">Correo electronico</label>
                <ValidationProvider v-slot="{ errors }" rules="required|email">
                  <input
id="Email" v-model="email" type="email" class="form-control mb-2"
                    :class="{ 'border-danger shadow-none': errors[0] }" aria-describedby="emailHelp"
                    placeholder="Correo@ejemplo.com" />
                  <span class="text-danger"> {{ errors[0] }}</span>
                </ValidationProvider>
              </div>
            </div>
          </div>

          <hr />

          <div class="row justify-content-center">
            <h1 class="d-flex justify-content-center">
              Informacion del documento
            </h1>
            <div class="col-12 col-md-10 col-lg-6">
              <div class="form-group">
                <label for="Email" class="form-label mt-4">Vin</label>
                <ValidationProvider v-slot="{ errors }" rules="required|alpha_num|length:17">
                  <input
id="Vin" v-model="vin" type="text" class="form-control mb-2"
                    :class="{ 'border-danger shadow-none': errors[0] }" aria-describedby="emailHelp"
                    placeholder="Vin" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="Email" class="form-label mt-4">Año del vehiculo</label>
                <ValidationProvider v-slot="{ errors }" rules="required|numeric">
                  <input
id="year" v-model="year" type="text" class="form-control mb-2"
                    :class="{ 'border-danger shadow-none': errors[0] }" aria-describedby="emailHelp"
                    placeholder="Año" />
                  <span class="text-danger"> {{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="model" class="form-label mt-4">Marca y modelo del vehiculo</label>
                <ValidationProvider v-slot="{ errors }" rules="required|alpha">
                  <input
id="Marca-y-modelo" v-model="model" type="text" class="form-control mb-2"
                    :class="{ 'border-danger shadow-none': errors[0] }" aria-describedby="emailHelp"
                    placeholder="Marca y modelo" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="Email" class="form-label mt-4">Body Style</label>
                <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
                  <input
id="style" v-model="bodyStyle" type="text" class="form-control"
                    :class="{ 'border-danger shadow-none': errors[0] }" aria-describedby="bodyStyle"
                    placeholder="Body Style" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="Color" class="form-label mt-4">Color del vehiculo</label>
                <ValidationProvider v-slot="{ errors }" rules="required|alpha">
                  <input
id="Color" v-model="color" type="text" class="form-control mb-2"
                    :class="{ 'border-danger shadow-none': errors[0] }" aria-describedby="emailHelp"
                    placeholder="Color" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="Combustible" class="form-label mt-4">Combustible del vehiculo</label>
                <ValidationProvider v-slot="{ errors }" rules="required|alpha">
                  <input
id="fuel" v-model="fuel" type="text" class="form-control"
                    :class="{ 'border-danger shadow-none': errors[0] }" aria-describedby="emailHelp"
                    placeholder="Combustible utilizado" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <legend class="mt-4">Estado del vehiculo</legend>
              <div class="form-check">
                <label class="form-check-label">
                  <input
id="optionsRadios1" v-model="isnew" value="true" type="radio" class="form-check-input"
                    name="optionsRadios" />
                  Nuevo
                </label>
              </div>
              <div class="form-check">
                <label class="form-check-label">
                  <input
id="optionsRadios2" v-model="isnew" value="false" type="radio" class="form-check-input"
                    name="optionsRadios" />
                  Usado
                </label>
              </div>

              <div class="row g-3 mt-4">
                <label for="Email" class="form-label mb-0">Dirección completa con código postal (ZIP)</label>
                <div class="col-sm-7">
                  <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
                    <input
v-model="city" type="text" class="form-control mb-2"
                      :class="{ 'border-danger shadow-none': errors[0] }" placeholder="City" aria-label="City" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-sm">
                  <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
                    <input
v-model="state" type="text" class="form-control mb-2"
                      :class="{ 'border-danger shadow-none': errors[0] }" placeholder="State" aria-label="State" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
                <div class="col-sm">
                  <ValidationProvider v-slot="{ errors }" rules="required|alpha_num">
                    <input
v-model="zip" type="text" class="form-control mb-2"
                      :class="{ 'border-danger shadow-none': errors[0] }" placeholder="Zip" aria-label="Zip" />
                    <span class="text-danger">{{ errors[0] }}</span>
                  </ValidationProvider>
                </div>
              </div>
              <div class="form-group">
                <label for="formFile" class="form-label mt-4">Foto del titulo anterior</label>
                <ValidationProvider v-slot="{ errors, validate }" rules="image">
                  <input
id="formFile" class="form-control" :class="{ 'border-danger shadow-none': errors[0] }"
                    type="file" @change="(e) => handleImage(e, validate)" />
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>

              <button type="button" class="btn btn-primary mt-5" :disabled="invalid || loading">
                {{ loading ? 'Procesando...' : 'Enviar' }}
              </button>
            </div>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </main>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      image: null,
      firtsName: '',
      secondName: '',
      number: '',
      email: '',
      vin: '',
      year: '',
      model: '',
      color: '',
      bodyStyle: '',
      fuel: '',
      city: '',
      state: '',
      zip: '',
      isnew: '',
      loading: false,
    }
  },
  head() {
    return {
      title: "Titulos | TemporaryEngine",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Aquí podemos ayudarte a la titulación de tu vehículo, a su vez te brindaremos la información necesaria a la hora de realizar la transacción del mismo, con total seguridad'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'placas y titulos, titulos, titulos de carros, titulos y placas'
        }
      ],
    }
  },
  methods: {
    async handleImage(evt, validate) {
      const { valid } = await validate(evt)
      if (valid) {
        this.image = evt.target.files
      }
    },

    async onSubmit() {
      this.loading = true
      const formData = new FormData()
      formData.append('address', `${this.city} ${this.state}`)
      formData.append('fullName', `${this.firtsName} ${this.secondName}`)
      formData.append('email', this.email)
      formData.append('phone', this.number)
      formData.append('postCode', this.zip)
      formData.append('color', this.color)
      formData.append('vin', this.vin)
      formData.append('model', this.model)
      formData.append('bodyStyle', this.bodyStyle)
      formData.append('fuelType', this.fuel) //
      formData.append('image', this.image)
      formData.append('isNew', this.isnew)

      const res = await fetch(
        'https://documentregisterbackend-production.up.railway.app/api/title',
        {
          method: 'POST',
          body: formData,
        }
      )

      const data = await res.json()
      console.log(data)

      this.loading = false

      this.$nextTick(() => {
        this.$refs.form.reset()

        this.$swal({
          toast: true,
          title: 'Proceso exitoso',
          text: 'Tus datos se han procesado con exito, revisa tu correo electronico para mas informacion',
          icon: 'success',
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 6000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', this.$swal.stopTimer)
            toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          },
        })
      })
    },
  },
}
</script>
