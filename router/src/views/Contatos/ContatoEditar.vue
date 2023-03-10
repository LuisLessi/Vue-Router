<template>
    <div>
        <h3 class="font-weight-light">Editar contato com id: {{ id }}</h3>
        <button class="btn btn-secondary mt-4 mb-4" @click="$router.back()">Voltar</button>
   </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            curso: 'Curso de vueJs'
        }
    },
    beforeRouteEnter(to, from, next) {
        /* if (to.query.autenticado === 'true') {
              return next((vm => {
                console.log('Curso:', vm.curso)
              }))
            }
            next('/contatos')*/
            next()
          },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave')
        const confirmar = window.confirm('Deseja sair da rota de editar ?')
        next(confirmar)
    }
}
</script>

<style>

</style>