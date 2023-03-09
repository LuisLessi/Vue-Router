<template>
    <div>
        <li>
            <span>{{ contato.nome }}</span>
             <router-link 
            :to="{ path: `/contatos/${contato.id}` }"            
            class="btn btn-info btn-sm float-right">Detalhes</router-link>

            <!--<button class="btn btn-info btn-sm float-right" @click="verDetalhes">
                Detalhes
            </button> -->
        </li>
    </div>
</template>

<script>
export default {
    props: {
        contato: {
            type: Object,
            required: true
        }
    },

    methods: {
        verDetalhes() {
            //this.$router.push(`/contatos/${this.contato.id}`) 
            //this.$router.push({ path: `/contatos/${this.contato.id}` })
            //this.$router.push({name: 'contatoDetalhes', params: { id: this.contato.id }})
            //this.$router.replace({name: 'contatoDetalhes', params: { id: this.contato.id }})           
        }
    }
}

</script>

<style></style>