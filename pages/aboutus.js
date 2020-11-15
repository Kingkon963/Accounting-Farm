import Layout from '../components/layout'
import Map from '../components/Map'

export default function AboutUs() {
    return (
        <Layout>
            <h1>About</h1>
            <Map
                location={{
                    address: '20, Sukrabad, Dhaka.',
                    lat: 23.752683,
                    lng: 90.379913,
                }}
                zoomLevel={15}
            />
        </Layout>
    )
}