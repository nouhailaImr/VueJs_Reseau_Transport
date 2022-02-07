<template>
    <div v-show="this.$store.state.indDistance" class="m-2">
        <div class="card mb-3">
        <div class="card-header">
            Routes et Distance
        </div>
        <div class="card-body">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">N° de Route</th>
                <th scope="col">Nom de Route</th>
                <th scope="col">Distance en km</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Route N1</td>
                <td>0.54</td>
                </tr>

                <tr>
                <th scope="row">2</th>
                <td>Ave. Sidi Mohamed Ben Abdellah</td>
                <td>0.47</td>
                </tr>
                <tr>

                <th scope="row">3</th>
                <td>Route N1</td>
                <td>0.26</td>
                </tr>

                <tr>
                <th scope="row">4</th>
                <td>Ave. Ludwig Van Beethoven</td>
                <td>0.42</td>
                </tr>

                <tr>
                <th scope="row">5</th>
                <td>Ave. Mohammed V</td>
                <td>0.22</td>
                </tr>

                <tr>
                <th scope="row">6</th>
                <td>Ave. Ludwig Van Beethoven</td>
                <td>0.26</td>
                </tr>

                <tr>
                <th scope="row">7</th>
                <td>Ave. Mohammed V</td>
                <td>0.20</td>
                </tr>
                <tr>

                <th scope="row">8</th>
                <td>Ave Mohammed V</td>
                <td>0.69</td>
                </tr>

                <tr>
                <th scope="row">9</th>
                <td>Ave. Espagne</td>
                <td>0.39</td>
                </tr>

                <tr>
                <th scope="row">10</th>
                <td>Route de L'Abattoir</td>
                <td>0.39</td>
                </tr>
                
                <tr>
                <th scope="row">11</th>
                <td>Route N2</td>
                <td>0.54</td>
                </tr>

                <tr>
                <th scope="row">12</th>
                <td>Ave. Idriss 1er</td>
                <td>0.48</td>
                </tr>
                <tr>

                <th scope="row">13</th>
                <td>Rue Abi Jarir Tabari</td>
                <td>0.32</td>
                </tr>

                <tr>
                <th scope="row">14</th>
                <td>Rue Abi Jarir Tabari</td>
                <td>0.68</td>
                </tr>          
            </tbody>
            </table>
        </div>
        </div>
        <div class="card mb-3">
        <div class="card-header">
            Indice Topologique
        </div>
        <div class="card-body">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Indice Numérique i (longueur)</th>
                <th scope="col">Indice Topologique (N° de Liens)</th>
                <th scope="col">Indice Topologique (N° de Noeuds)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>5.86 Km</td>
                <td>14</td>
                <td>13</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div class="card">
             <h5 class="card-header">Efficacité de réseau</h5>
            <div class="card-body">
                <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Indice d'éloignement</th>
                    <th scope="col">Indice d'éfficacité</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>0.037</td>
                    <td>0.0010</td>
                    </tr>
                </tbody>
                </table>
                <div>
                    <p class="h5">Résultats et Interprétation:</p>
                    <p>Les indices topologiques montrent que le réseau est d'une longeur basse à moyenne avec 13 Noeuds et 14 Liens. On remarque aussi que l'indice d'éloignement est d'une valeur basse ce qui montre l'efficacité du réseau.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'IndDistance',
  props: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
