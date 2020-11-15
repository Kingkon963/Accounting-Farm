import GoogleMapReact from 'google-map-react'

import styles from '../styles/Map.module.css'

const LocationPin = ({ text }) => (
  <div className={styles.pin}>
    <span className={`fa fa-map-marker ${styles.pinIcon}`}></span>
    <p className={styles.pinText}>{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <div className={styles.map}>
    <h2 className={styles.mapH2}>Come Visit Us At Our Office</h2>

    <div className={styles.googleMap}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_API_KEY }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
)

export default Map