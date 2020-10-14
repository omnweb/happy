import React from 'react'
import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarker from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

const mapIcon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68], // Colocando tamanho do ícone com largura x altura
    iconAnchor: [29, 68], // Definindo a parte do ícone que representa o ponto no mapa (58/2) para a achar o meio  e 68 que é a base
    popupAnchor: [170, 2]
})

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
                {/* Usando para colocar a logo no mapa */}
                <Marker
                    icon={mapIcon}
                    position={[-22.4803303, -48.5784707]}
                >
                    <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                        Lar das meninas
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#fff" />
                        </Link>
                    </Popup>
                </Marker>
            </Map>
            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#fff" />
            </Link>

        </div>
    )
}

export default orphanagesMap;