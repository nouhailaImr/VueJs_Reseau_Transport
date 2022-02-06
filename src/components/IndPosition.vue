<template>
    <div v-show="this.$store.state.indPosition">
        <div class="card mb-3">
        <div class="card-header">
            Indicateur de position
        </div>
        <div class="card-body">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Centralité de dégrée (Cd)</th>
                <th scope="col">Centralité d'éloignement moyen(Ce)</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>to add</td>
                <td>to add</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IndPosition',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
