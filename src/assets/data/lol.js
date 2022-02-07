//Setting up graph one data strcture

var dataFeatures = prp_roads.features
var newData = {}

for (let i = 0; i < dataFeatures.length; i++) {
  console.log()
  newData[dataFeatures[i].properties.id] = {}
  newData[dataFeatures[i].properties.id]["nom"]= dataFeatures[i].properties.name
  newData[dataFeatures[i].properties.id]["08h"]= []

  newData[dataFeatures[i].properties.id]["08h"][0] = {}
  newData[dataFeatures[i].properties.id]["08h"][0]["name"] = "Total"
  newData[dataFeatures[i].properties.id]["08h"][0]["value"]=dataFeatures[i].properties.data["08h"]["Total"]
  newData[dataFeatures[i].properties.id]["08h"][1] = {}
  newData[dataFeatures[i].properties.id]["08h"][1]["name"]="Pers"
  newData[dataFeatures[i].properties.id]["08h"][1]["value"]=dataFeatures[i].properties.data["08h"]["Pers"]
  newData[dataFeatures[i].properties.id]["08h"][2] = {}
  newData[dataFeatures[i].properties.id]["08h"][2]["name"]="Taxi"
  newData[dataFeatures[i].properties.id]["08h"][2]["value"]=dataFeatures[i].properties.data["08h"]["Taxi"]
  newData[dataFeatures[i].properties.id]["08h"][3] = {}
  newData[dataFeatures[i].properties.id]["08h"][3]["name"]="Bus"
  newData[dataFeatures[i].properties.id]["08h"][3]["value"]=dataFeatures[i].properties.data["08h"]["Bus"]
  newData[dataFeatures[i].properties.id]["08h"][4] = {}
  newData[dataFeatures[i].properties.id]["08h"][4]["name"]="Ouvr"
  newData[dataFeatures[i].properties.id]["08h"][4]["value"]=dataFeatures[i].properties.data["08h"]["Ouvr"]
  newData[dataFeatures[i].properties.id]["08h"][5] = {}
  newData[dataFeatures[i].properties.id]["08h"][5]["name"]="Serv"
  newData[dataFeatures[i].properties.id]["08h"][5]["value"]=dataFeatures[i].properties.data["08h"]["Serv"]

  
  newData[dataFeatures[i].properties.id]["12h"]= []

  newData[dataFeatures[i].properties.id]["12h"][0] = {}
  newData[dataFeatures[i].properties.id]["12h"][0]["name"]="Total"
  newData[dataFeatures[i].properties.id]["12h"][0]["value"]=dataFeatures[i].properties.data["12h"]["Total"]
  newData[dataFeatures[i].properties.id]["12h"][1] = {}
  newData[dataFeatures[i].properties.id]["12h"][1]["name"]="Pers"
  newData[dataFeatures[i].properties.id]["12h"][1]["value"]=dataFeatures[i].properties.data["12h"]["Pers"]
  newData[dataFeatures[i].properties.id]["12h"][2] = {}
  newData[dataFeatures[i].properties.id]["12h"][2]["name"]="Taxi"
  newData[dataFeatures[i].properties.id]["12h"][2]["value"]=dataFeatures[i].properties.data["12h"]["Taxi"]
  newData[dataFeatures[i].properties.id]["12h"][3] = {}
  newData[dataFeatures[i].properties.id]["12h"][3]["name"]="Bus"
  newData[dataFeatures[i].properties.id]["12h"][3]["value"]=dataFeatures[i].properties.data["12h"]["Bus"]
  newData[dataFeatures[i].properties.id]["12h"][4] = {}
  newData[dataFeatures[i].properties.id]["12h"][4]["name"]="Ouvr"
  newData[dataFeatures[i].properties.id]["12h"][4]["value"]=dataFeatures[i].properties.data["12h"]["Ouvr"]
  newData[dataFeatures[i].properties.id]["12h"][5] = {}
  newData[dataFeatures[i].properties.id]["12h"][5]["name"]="Serv"
  newData[dataFeatures[i].properties.id]["12h"][5]["value"]=dataFeatures[i].properties.data["12h"]["Serv"]


  newData[dataFeatures[i].properties.id]["18h"]= []

  newData[dataFeatures[i].properties.id]["18h"][0] = {}
  newData[dataFeatures[i].properties.id]["18h"][0]["name"]="Total"
  newData[dataFeatures[i].properties.id]["18h"][0]["value"]=dataFeatures[i].properties.data["18h"]["Total"]
  newData[dataFeatures[i].properties.id]["18h"][1] = {}
  newData[dataFeatures[i].properties.id]["18h"][1]["name"]="Pers"
  newData[dataFeatures[i].properties.id]["18h"][1]["value"]=dataFeatures[i].properties.data["18h"]["Pers"]
  newData[dataFeatures[i].properties.id]["18h"][2] = {}
  newData[dataFeatures[i].properties.id]["18h"][2]["name"]="Taxi"
  newData[dataFeatures[i].properties.id]["18h"][2]["value"]=dataFeatures[i].properties.data["18h"]["Taxi"]
  newData[dataFeatures[i].properties.id]["18h"][3] = {}
  newData[dataFeatures[i].properties.id]["18h"][3]["name"]="Bus"
  newData[dataFeatures[i].properties.id]["18h"][3]["value"]=dataFeatures[i].properties.data["18h"]["Bus"]
  newData[dataFeatures[i].properties.id]["18h"][4] = {}
  newData[dataFeatures[i].properties.id]["18h"][4]["name"]="Ouvr"
  newData[dataFeatures[i].properties.id]["18h"][4]["value"]=dataFeatures[i].properties.data["18h"]["Ouvr"]
  newData[dataFeatures[i].properties.id]["18h"][5] = {}
  newData[dataFeatures[i].properties.id]["18h"][5]["name"]="Serv"
  newData[dataFeatures[i].properties.id]["18h"][5]["value"]=dataFeatures[i].properties.data["18h"]["Serv"]
}


//Setting up graph  two data

var dataFeatures = prp_roads.features
var newData = {}

for (let i = 0; i < dataFeatures.length; i++) {
  console.log()
  newData[dataFeatures[i].properties.id] = {}
  newData[dataFeatures[i].properties.id]["nom"]= dataFeatures[i].properties.name
  newData[dataFeatures[i].properties.id]["Total"]= []
  newData[dataFeatures[i].properties.id]["Total"][0]= {}
  newData[dataFeatures[i].properties.id]["Total"][0]["name"] = "08h"
  newData[dataFeatures[i].properties.id]["Total"][0]["value"] = dataFeatures[i].properties.data["08h"]["Total"]
  newData[dataFeatures[i].properties.id]["Total"][1]= {}
  newData[dataFeatures[i].properties.id]["Total"][1]["name"] = "12h"
  newData[dataFeatures[i].properties.id]["Total"][1]["value"] = dataFeatures[i].properties.data["12h"]["Total"]
  newData[dataFeatures[i].properties.id]["Total"][2]= {}
  newData[dataFeatures[i].properties.id]["Total"][2]["name"] = "18h"
  newData[dataFeatures[i].properties.id]["Total"][2]["value"] = dataFeatures[i].properties.data["18h"]["Total"]

  newData[dataFeatures[i].properties.id]["Pers"]= []
  newData[dataFeatures[i].properties.id]["Pers"][0]= {}
  newData[dataFeatures[i].properties.id]["Pers"][0]["name"] = "08h"
  newData[dataFeatures[i].properties.id]["Pers"][0]["value"] = dataFeatures[i].properties.data["08h"]["Pers"]
  newData[dataFeatures[i].properties.id]["Pers"][1]= {}
  newData[dataFeatures[i].properties.id]["Pers"][1]["name"] = "12h"
  newData[dataFeatures[i].properties.id]["Pers"][1]["value"] = dataFeatures[i].properties.data["12h"]["Pers"]
  newData[dataFeatures[i].properties.id]["Pers"][2]= {}
  newData[dataFeatures[i].properties.id]["Pers"][2]["name"] = "18h"
  newData[dataFeatures[i].properties.id]["Pers"][2]["value"] = dataFeatures[i].properties.data["18h"]["Pers"]

  newData[dataFeatures[i].properties.id]["Taxi"]= []
  newData[dataFeatures[i].properties.id]["Taxi"][0]= {}
  newData[dataFeatures[i].properties.id]["Taxi"][0]["name"] = "08h"
  newData[dataFeatures[i].properties.id]["Taxi"][0]["value"] = dataFeatures[i].properties.data["08h"]["Taxi"]
  newData[dataFeatures[i].properties.id]["Taxi"][1]= {}
  newData[dataFeatures[i].properties.id]["Taxi"][1]["name"] = "12h"
  newData[dataFeatures[i].properties.id]["Taxi"][1]["value"] = dataFeatures[i].properties.data["12h"]["Taxi"]
  newData[dataFeatures[i].properties.id]["Taxi"][2]= {}
  newData[dataFeatures[i].properties.id]["Taxi"][2]["name"] = "18h"
  newData[dataFeatures[i].properties.id]["Taxi"][2]["value"] = dataFeatures[i].properties.data["18h"]["Taxi"]

  newData[dataFeatures[i].properties.id]["Bus"]= []
  newData[dataFeatures[i].properties.id]["Bus"][0]= {}
  newData[dataFeatures[i].properties.id]["Bus"][0]["name"] = "08h"
  newData[dataFeatures[i].properties.id]["Bus"][0]["value"] = dataFeatures[i].properties.data["08h"]["Bus"]
  newData[dataFeatures[i].properties.id]["Bus"][1]= {}
  newData[dataFeatures[i].properties.id]["Bus"][1]["name"] = "12h"
  newData[dataFeatures[i].properties.id]["Bus"][1]["value"] = dataFeatures[i].properties.data["12h"]["Bus"]
  newData[dataFeatures[i].properties.id]["Bus"][2]= {}
  newData[dataFeatures[i].properties.id]["Bus"][2]["name"] = "18h"
  newData[dataFeatures[i].properties.id]["Bus"][2]["value"] = dataFeatures[i].properties.data["18h"]["Bus"]

  newData[dataFeatures[i].properties.id]["Ouvr"]= []
  newData[dataFeatures[i].properties.id]["Ouvr"][0]= {}
  newData[dataFeatures[i].properties.id]["Ouvr"][0]["name"] = "08h"
  newData[dataFeatures[i].properties.id]["Ouvr"][0]["value"] = dataFeatures[i].properties.data["08h"]["Ouvr"]
  newData[dataFeatures[i].properties.id]["Ouvr"][1]= {}
  newData[dataFeatures[i].properties.id]["Ouvr"][1]["name"] = "12h"
  newData[dataFeatures[i].properties.id]["Ouvr"][1]["value"] = dataFeatures[i].properties.data["12h"]["Ouvr"]
  newData[dataFeatures[i].properties.id]["Ouvr"][2]= {}
  newData[dataFeatures[i].properties.id]["Ouvr"][2]["name"] = "18h"
  newData[dataFeatures[i].properties.id]["Ouvr"][2]["value"] = dataFeatures[i].properties.data["18h"]["Ouvr"]

  newData[dataFeatures[i].properties.id]["Serv"]= []
  newData[dataFeatures[i].properties.id]["Serv"][0]= {}
  newData[dataFeatures[i].properties.id]["Serv"][0]["name"] = "08h"
  newData[dataFeatures[i].properties.id]["Serv"][0]["value"] = dataFeatures[i].properties.data["08h"]["Serv"]
  newData[dataFeatures[i].properties.id]["Serv"][1]= {}
  newData[dataFeatures[i].properties.id]["Serv"][1]["name"] = "12h"
  newData[dataFeatures[i].properties.id]["Serv"][1]["value"] = dataFeatures[i].properties.data["12h"]["Serv"]
  newData[dataFeatures[i].properties.id]["Serv"][2]= {}
  newData[dataFeatures[i].properties.id]["Serv"][2]["name"] = "18h"
  newData[dataFeatures[i].properties.id]["Serv"][2]["value"] = dataFeatures[i].properties.data["18h"]["Serv"]


  
}

console.log(newData)