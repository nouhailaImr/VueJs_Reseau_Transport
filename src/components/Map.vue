<template>
  
  <div class="mapContainer" v-show="this.$store.state.map">
    <div class="cell cell-mapping" id="mapContainer"></div>
    <div class="optionsContainer cell cell-map-side">
      <div class="cell cell-options" style="font-size: 12px">
        <label style="grid-column-start: 1;
                      grid-column-end: 2;
                      grid-row-start: 1;
                      grid-row-end: 2; font-weight:700" for="timeRange" class="form-label" id="rangeValue">Temps de journée</label>
        <div style="grid-column-start: 2;
                    grid-column-end: 3;
                    grid-row-start: 1;
                    grid-row-end: 2;">
            <datalist id="tickmarks" style="display: flex; color: red; width: 85%; justify-content: space-around;">
                <option value="1" label="08h"></option>
                <option value="2" label="12h"></option>
                <option value="3" label="18h"></option>
            </datalist>
            <input style="width:85%" type="range" class="form-range" min="1" max="3" step="1" id="timeRange" list="tickmarks" v-model="calcTime">
        </div>
        <label style="grid-column-start: 1;
                      grid-column-end: 2;
                      grid-row-start: 2;
                      grid-row-end: 3;
                      font-weight:700" class="form-label">Catégorie
                      de flux:</label>
        <div style="grid-column-start: 2;
                    grid-column-end: 3;
                    grid-row-start: 2;
                    grid-row-end: 3;">

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" v-model="catPicked" value="Total">
              <label class="form-check-label" for="inlineRadio1">Total</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" v-model="catPicked" value="Pers">
              <label class="form-check-label" for="inlineRadio2">Personnel</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" v-model="catPicked" value="Taxi">
              <label class="form-check-label" for="inlineRadio3">Taxi</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" v-model="catPicked" value="Bus">
              <label class="form-check-label" for="inlineRadio3">Bus</label>
            </div>  
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" v-model="catPicked" value="Ouvr">
              <label class="form-check-label" for="inlineRadio3">Ouvrier</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" v-model="catPicked" value="Serv">
              <label class="form-check-label" for="inlineRadio3">Services</label>
            </div>        
        </div>
      </div>
      <div id="graph-one" class="cell cell-graph-one"></div>
      <div id="graph-two" class="cell cell-graph-two"></div>
      </div>

  </div>
  
</template>

<script>
// import Leaflet and Leaflet CSS
import "leaflet/dist/leaflet.css";
import L from 'leaflet'
import * as echarts from 'echarts';
import * as smoothGradient from 'smooth-gradient';
import prp_points from '../assets/data/points.json'
import prp_roads from '../assets/data/roads.json'
import sub_points from '../assets/data/sub_points.json'
import sub_roads from '../assets/data/sub_roads.json'





export default {
  name: 'Map',
  data(){
    return{
      map: null,
      temps:1
    }
  },
  methods:{

  },
  computed:{

    calcTime: {
      get: function(){
        return this.temps
      },
      set: function (newValue) {
        console.log("expected")
        if(newValue == 1){
          this.$store.commit("changeTime", "08h" );
        }else if (newValue == 2){
          this.$store.commit("changeTime", "12h" );
        }else{
          this.$store.commit("changeTime", "18h" );
        }
      }
    },
    catPicked: {
        get: function(){
          return this.temps
        },
        set: function (newValue) {
          this.$store.commit("changeCat", newValue );
        }
    }

  },
  
  mounted() {


    var grad = new smoothGradient.Spectrum("#1E9600", "#FFF200", "#FF0000");
    

    function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
      if (feature.properties && feature.properties.name) {
          console.log("hello")
          layer.bindPopup(feature.properties.name);
      }
    }

    function onEachRoad(feature, layer) {
    // does this feature have a property named popupContent?
      if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name);
      }
    }

    function ColorToHex(color) {
      var hexadecimal = color.toString(16);
      return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
    }

    function getColor(value){
      return "#" + ColorToHex(grad.getColor(value)["r"]) + ColorToHex(grad.getColor(value)["g"]) + ColorToHex(grad.getColor(value)["b"])
    }

    var prpPointsOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    var subPointsOptions = {
        radius: 6,
        fillColor: "#47B3D7",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };

    

    var subRoadStyle = {
        "color": "#47B3D7",
        "weight": 5,
        "opacity": 0.65
    };

    //Map creation
    this.map = L.map('mapContainer', {
        center: [35.77442, -5.79731],
        zoom: 15,
        
    });
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
      
    var sub_Noeuds = L.geoJSON(sub_points, {
          onEachFeature: onEachFeature,
          pointToLayer: function (feature, latlng) {
              return L.circleMarker(latlng, subPointsOptions);
          }
          });
    
    var sub_Routes = L.geoJSON(sub_roads, {style: subRoadStyle});

    var sub_Network = L.layerGroup([sub_Noeuds, sub_Routes]);

    var overlayMaps = {
        "Sub Network": sub_Network
    };
      
    L.geoJSON(prp_roads, {
        onEachFeature: onEachRoad,
        style: function (feature) {
        return {
         "color": getColor(feature.properties.data["12h"]["Bus"]*10),
         "weight": 10,
         "opacity": 1,
        }}
    }).addTo(this.map);

    L.geoJSON(prp_points, {
        onEachFeature: onEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, prpPointsOptions);
        }
    }).addTo(this.map);

    L.control.layers(null, overlayMaps).addTo(this.map);

    ////////////////////////////////////////////////////
    //graph one creation
    var chartOneDom = document.getElementById('graph-one');
    var chartOne = echarts.init(chartOneDom);
    var optionOne;
    optionOne = {
      title: {
        text: 'Flux de transport',
        subtext: "Route de L'Abattoir"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        left: "right",
      },
      grid: {
        left: '3%',
        right: '10%',
        bottom: '4%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['08AM', '12PM', '06PM']
      },
      series: [
        {
          name: '8AM',
          type: 'bar',
          data: [459, 455, 505]
        },
      ]
    };

    optionOne && chartOne.setOption(optionOne);

    //////////////////////////////
    //graph two creation
    var chartTwoDom = document.getElementById('graph-two');
    var chartTwo = echarts.init(chartTwoDom);
    var optionTwo;

    optionTwo = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center'
      },
      tooltip: {
        trigger: 'item'
      },
      legend: {
        bottom: '1%',
        left: 'center'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['20%', '40%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 357, name: 'Personnal' },
            { value: 51, name: 'Taxi' },
            { value: 12, name: 'Bus' },
            { value: 17, name: 'Ouvrier' },
            { value: 18, name: 'Service' }
          ]
        }
      ]
    };

    optionTwo && chartTwo.setOption(optionTwo);



  },
  beforeDestroy() {
    if (this.map) {
      this.map.remove();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.mapContainer{
  font-family: Helvetica, Arial, sans-serif;
  height: 100vh;
  display: grid;
  grid-template-columns: auto auto auto 30%;
  box-sizing: border-box;
}

.optionsContainer{
  height: 100vh;
  display: grid;
  grid-template-rows:20% 40% 40%;
}

.cell {
    border-radius: 4px;
    background-color: white;
  }

  .cell-mapping{
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .cell-map-side {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .cell-options{
    grid-row-start: 1;
    grid-row-end:2;
    
    height: 20vh;
    padding:10px;
    gap: 5px;
    display: grid;
    grid-template-rows:auto auto;
    grid-template-columns:30% auto;
  }
  .cell-graph-one{
    padding:1px;
    grid-row-start: 2;
    grid-row-end:3;
    
  }
  .cell-graph-two{
    grid-row-start: 3;
    grid-row-end:4;
    
  }
</style>
