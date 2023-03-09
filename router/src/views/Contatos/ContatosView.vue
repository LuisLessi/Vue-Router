<template>
  <div>
    <ContatosLista :busca="busca"/>
    <router-view/>
    <router-view name="contato-detalhes" />
  </div>
</template>

<script>
import ContatosLista from '../../components/contatos/ContatosLista.vue';

export default {
  methods: {
    voltar() {
      //this.$router.push('/')
      //this.$router.replace('/')
      //this.$router.go(-3)
      //this.$router.forward()
      this.$router.back()
    } 
  },
  components: {
    ContatosLista
  },
  props: ['busca']
}
</script>

<style></style>