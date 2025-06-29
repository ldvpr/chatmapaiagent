import { mapvar } from "./storage";
import markerIcon from "../../node_modules/leaflet/dist/images/marker-icon.png";


export function addGpsControl () {

    var gpsControl = L.control({position:'bottomright'});

    gpsControl.onAdd = function() {
        var _div = L.DomUtil.create('div', 'gpsControl_class');
        L.DomEvent.disableClickPropagation(_div);
        L.DomEvent.disableScrollPropagation(_div);
        _div.innerHTML = `
            <div class="bg-white rounded m-0 px-0 leaflet-control leaflet-bar">
                <a href="#" class=""  
                    title="Go to your location "
                >
                <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-crosshair2" viewBox="0 0 16 16">
                    <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0m-.5 2.02A6 6 0 0 0 2.02 7.5h1.005A5 5 0 0 1 7.5 3.025zm1 1.005A5 5 0 0 1 12.975 7.5h1.005A6 6 0 0 0 8.5 2.02zM12.975 8.5A5 5 0 0 1 8.5 12.975v1.005a6 6 0 0 0 5.48-5.48zM7.5 12.975A5 5 0 0 1 3.025 8.5H2.02a6 6 0 0 0 5.48 5.48zM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0"/>
                    </svg>
                </i>  
                </a>
            </div>
        `;
        L.DomEvent.on(_div, 'click', function() {
            mapvar.map.locate()
        }); 

        mapvar.map.on('locationfound', function(event) {
            mapvar.map.flyTo(event.latlng, 15); 

           
        })

        return _div;

    }
    
    gpsControl.addTo(mapvar.map);

};


