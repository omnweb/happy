import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarker from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'



function orphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Marcação do mapa" />
                    <h2>Escolha um orfanato no mapa!</h2>
                    <p>Muitas crianças estão esperando sua visita</p>
                </header>
                <footer>
                    <strong>Barra Bonita</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            <Map
                center={[-22.4803303, -48.5784707]}
                zoom={13}
                style={{ width: '100%', height: '100%' }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}

export default orphanagesMap;