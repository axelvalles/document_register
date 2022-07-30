import { extend } from 'vee-validate'
import {
  required,
  alpha,
  numeric,
  email,
  alpha_num as alphaNum,
  length,
  image,
} from 'vee-validate/dist/rules'

extend('length', {
  ...length,
  message: 'el Vin no es valido',
})

extend('alpha_num', {
  ...alphaNum,
  message: 'solo deber tener numeros y letras',
})

extend('email', {
  ...email,
  message: 'el Email no es valido',
})

extend('numeric', {
  ...numeric,
  message: ' Solo debe contener numeros',
})

extend('alpha', {
  ...alpha,
  message: ' Solo debe contener letras',
})

extend('required', {
  ...required,
  message: 'Este campo es necesario',
})

extend('image', {
  ...image,
  message: 'Este campo es necesario',
})
