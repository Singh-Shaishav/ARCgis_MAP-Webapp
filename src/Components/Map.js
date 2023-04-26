import React, { useEffect, useRef, useState } from 'react';
import { loadModules } from 'esri-loader';
import './Style.css'

function Map(props) {
  const mapRef = useRef();
  const [basemap, setBasemap] = useState('arcgis-navigation');

  let directionsVisible = false;
  let distanceVisible = false;
  let areaVisible = false;


  useEffect(() => {
    loadModules(["esri/config",
      'esri/Map',
      'esri/views/MapView',
      'esri/widgets/Locate',
      'esri/widgets/Search',
      'esri/widgets/Directions',
      'esri/widgets/DistanceMeasurement2D',
      'esri/widgets/AreaMeasurement2D'], { css: true }).then(([esriConfig, Map, MapView, Locate, Search, Directions, AreaMeasurement2D, DistanceMeasurement2D]) => {


        
        esriConfig.apiKey = "AAPKadd18c43e72c4682b935384aa69189912Ye2wiINHHaVUOIxIWKzs1T3hLi-5_GQw0aztyBP725vYTtecZJ9m8CRSLpv0CXl";

        const map = new Map({
          basemap: basemap
        });

        const view = new MapView({
          container: mapRef.current,
          map: map,
          center: [77.20065709964116, 28.621126105362844],
          zoom: 8
        });
        const search = new Search({
          view: view
        });
        view.ui.add(search, "top-left")
        const locate = new Locate({
          view: view,
          useHeadingEnabled: false,
          goToOverride: function (view, options) {
            options.target.scale = 500;
            return view.goTo(options.target);
          }
        });
        view.ui.add(locate, "bottom-left");

        const directions = new Directions({
          view: view
        })
        const directionButton = document.createElement("button");
        directionButton.className = "btn-direction";
        directionButton.innerHTML = "Find Directions";
        directionButton.addEventListener("click", function () {
          if (!directionsVisible) {
            view.ui.add(directions, "top-right");
            directionsVisible = true;
          } else {
            view.ui.remove(directions);
            directionsVisible = false;
          }
        });
        view.ui.add(directionButton, "top-right")

        const changeBasemap = (basemap) => {
          map.basemap = basemap;
          setBasemap(basemap);
        }


        const basemapButton = document.createElement('button');
        basemapButton.className = 'basemap-button';
        basemapButton.innerHTML = `Switch to ${basemap === 'arcgis-navigation' ? 'Satellite' : 'Topographic'} View`;
        basemapButton.addEventListener('click', () => {
          changeBasemap(basemap === 'arcgis-navigation' ? 'satellite' : 'arcgis-navigation');
          basemapButton.innerHTML = `Switch to ${basemap === 'arcgis-navigation' ? 'Topographic' : 'Satellite'} View`;
        });

        view.ui.add(basemapButton, 'bottom-right');

        const areaMeasurementWidget = new AreaMeasurement2D({
          view: view
        });

        const areaButton = document.createElement("button");
        areaButton.className = "btn-dist";
        areaButton.innerHTML = "Measure Distance";
        areaButton.addEventListener("click", function () {
          if (!distanceVisible) {
            view.ui.add(areaMeasurementWidget, "top-right");
            distanceVisible = true;
          } else {
            view.ui.remove(areaMeasurementWidget);
            distanceVisible = false;
          }
          areaMeasurementWidget.viewModel.start();
        });
        view.ui.add(areaButton, "top-left");

        const distanceMeasurementWidget = new DistanceMeasurement2D({
          view: view
        });

        const distanceButton = document.createElement("button");
        distanceButton.className = "btn-area";
        distanceButton.innerHTML = "Measure Area";
        distanceButton.addEventListener("click", function () {
          if (!areaVisible) {
            view.ui.add(distanceMeasurementWidget, "top-right");
            areaVisible = true;
          } else {
            view.ui.remove(distanceMeasurementWidget);
            areaVisible = false;
          }
          distanceMeasurementWidget.viewModel.start();
        });
        view.ui.add(distanceButton, "top-left");

        


      });
  }, [basemap]);

  return <div ref={mapRef} style={{ height: '95vh', width: '100%' }}></div>;
}

export default Map;
