<template>
    <div v-show="this.$store.state.indPosition" class="m-2">
        <div class="card mb-3">
        <div class="card-header">
            Routes et Distance
        </div>
        <div class="card-body">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">N° de Sommet</th>
                <th scope="col">Nom de Place/ Rond point</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Place de la Ligue Arabe</td>
                
                </tr>

                <tr>
                <th scope="row">2</th>
                <td>Place Roudani - Nejma</td>
                
                </tr>
                <tr>

                <th scope="row">3</th>
                <td>Place d'Helvetie</td>
                
                </tr>

                <tr>
                <th scope="row">4</th>
                <td>Place Hamama</td>
                
                </tr>

                <tr>
                <th scope="row">5</th>
                <td>Place Attabari</td>
                
                </tr>

                <tr>
                <th scope="row">6</th>
                <td>Place Louis</td>
                
                </tr>

                <tr>
                <th scope="row">7</th>
                <td>Place Yousef Bnou Tachafine</td>
                
                </tr>
                <tr>

                <th scope="row">8</th>
                <td>Place Mohammed VI</td>
                
                </tr>

                <tr>
                <th scope="row">9</th>
                <td>Place Sidi Mohamed Ben Abdellah</td>
                
                </tr>

                <tr>
                <th scope="row">10</th>
                <td>Place Route N1</td>
                
                </tr>
                
                <tr>
                <th scope="row">11</th>
                <td>Place Tétouan</td>
                
                </tr>

                <tr>
                <th scope="row">12</th>
                <td>Place Abattoir</td>
                
                </tr>
                <tr>

                <th scope="row">13</th>
                <td>Place d'Espagne</td>
                </tr>
         
            </tbody>
            </table>
        </div>
        </div>
        <div class="card mb-3">
        <div class="card-header">
            Centralité de dégrée (Cd)
        </div>
        <div class="card-body">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Sommet</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
                <th scope="col">11</th>
                <th scope="col">12</th>
                <th scope="col">13</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="col">Cd</th>
                <td>5</td>
                <td>4</td>
                <td>4</td>
                <td>2</td>
                <td>3</td>
                <td>3</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                <td>1</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div class="card mb-3">
        <div class="card-header">
            Centralité d'éloignement moyen(Ce)
        </div>
        <div class="card-body">
            <table class="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Sommet</th>
                <th scope="col">1</th>
                <th scope="col">2</th>
                <th scope="col">3</th>
                <th scope="col">4</th>
                <th scope="col">5</th>
                <th scope="col">6</th>
                <th scope="col">7</th>
                <th scope="col">8</th>
                <th scope="col">9</th>
                <th scope="col">10</th>
                <th scope="col">11</th>
                <th scope="col">12</th>
                <th scope="col">13</th>
                <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="col">Ce</th>
                <td>2</td>
                <td>2.0833</td>
                <td>2.0833</td>
                <td>2.416</td>
                <td>1.916</td>
                <td>1.916</td>
                <td>3</td>
                <td>3</td>
                <td>2.916</td>
                <td>2.916</td>
                <td>2.916</td>
                <td>3</td>
                <td>3</td>
                <td>33.16667</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        <div class="card">
            <div class="card-header">
                Résultats et Interprétations
            </div>
            <div class="card-body">
                
                <p>Les indices de position mesure le degré d'accessibilité/centralité des differents sommets dans le réseau. Pour l'indice 'Centralité de degré (Cd)', on trouve que le sommet numéro 1 est le plus proche de ses territoires voisines, fesant de lui un point priviligé dans le réseau.</p>
                <p>L'indice de centralité d'éloignement moyene (Ce) mesure le distance moyenne entre un sommet et les autres sommets. On observe que les sommets numéro 5, 6 et 10 sont les moins accessibles dans le réseau, et les sommets 7, 8, 12 et 13 sont les plus accessibles.</p>
                
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
