<template>
    <div v-show="this.$store.state.indGlobal" class="m-2">
        <div class="card mb-3">
        <div class="card-header">
            Connexité de réseau
        </div>
        <div class="card-body">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Indice de connexité simple (IC1)</th>
                <th scope="col">Indice de connexité pondéré (IC2)</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>100%</td>
                <td>100%</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div class="card mb-3">
        <div class="card-header">
            Connectivité de réseau
        </div>
        <div class="card-body">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Indice de connectivité simple (β)</th>
                <th scope="col">Indice de connectivité (γ)</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1.0769</td>
                <td>17.94%</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div class="card">
            <div class="card-header">
                Autres Indicateurs
            </div>
            <div class="card-body">
                <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Nombre cyclomatique (μ)</th>
                <th scope="col">Indice de connectivité standard (α)</th>
                
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>2</td>
                <td>3.03%</td>
                </tr>
            </tbody>
                </table>
                <div>
                    <p class="h5">Résultats et Interprétation:</p>
                    <p>La connexité dans un réseau mesure le degré de fragmentation en composants principales. Puisque le réseau à une composante connexe et les indices de connexité simple et pondéré sont à 100%. On remarque que notre réseau est bien connexe.</p>
                    <p>La connectivité dans un réseau mesure la densité et la variété des relations possibles directs ou indirects entre les sommets d'un graphe. L'indice de connectivité simple est supérieure à 1, ce qui montre l'existence de circuits dans un graphe (2 cycles considérant le nombre cyclomatique). Notre réseau est 17.94% connecté.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IndGlobal',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
