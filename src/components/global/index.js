import Vue from 'vue'
import { upperFirst, camelCase } from 'lodash'

const reqComponent = require.context('.', false, /\.(vue)$/)

reqComponent.keys().forEach(fileName => {
  const compConfig = reqComponent(fileName)
  const compName = upperFirst(
    camelCase(
      fileName.split('/').pop().replace(/\.\w+$/, '')
    )
  )
  Vue.component(compName, compConfig.default || compConfig)
})
