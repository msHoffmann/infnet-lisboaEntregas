import { GoogleMap, Marker, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { LoadGoogleScript } from "../../Components/LoadingGoogleScript";
import { selectCurrentEstimate } from "../../store/slices/EstimateSlice";
import pinA from '../../assets/img/pin-a.svg';
import pinB from '../../assets/img/pin-b.svg';
import styled from "styled-components";

export function EstimateMap() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const handleLoadMap = (map: google.maps.Map) => {
        if (!currentEstimate) {
            return
        }
        const bounds = new google.maps.LatLngBounds()
        bounds.extend({
            lat: currentEstimate.pickupAddress.lat,
            lng: currentEstimate.pickupAddress.lng
        })
        bounds.extend({
            lat: currentEstimate.deliveryAddress.lat,
            lng: currentEstimate.deliveryAddress.lng
        })
        map.setCenter(bounds.getCenter())
        map.fitBounds(bounds)
    }
    if (!currentEstimate) {
        return null
    }
    return (
        <LoadGoogleScript>
            <WrapStyled>
                <GoogleMap
                    mapContainerStyle={{
                        minHeight: 180
                    }}
                    center={{ lat: 0, lng: 0 }}
                    zoom={16}
                    onLoad={handleLoadMap}
                    options={{
                        disableDefaultUI: true,
                        disableDoubleClickZoom: true,
                        gestureHandling: 'none'
                    }}
                >
                    <MarkerF
                        position={{
                            lat: currentEstimate.pickupAddress.lat,
                            lng: currentEstimate.pickupAddress.lng
                        }}
                        icon={pinA}
                    />
                    <MarkerF
                        position={{
                            lat: currentEstimate.deliveryAddress.lat,
                            lng: currentEstimate.deliveryAddress.lng
                        }}
                        icon={pinB}
                    />
                </GoogleMap>
            </WrapStyled>
        </LoadGoogleScript>
    )
}

const WrapStyled = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    display: flex;
    flex-direction: column;
    & > div {
        flex: 1;
    }
    a[href^="http://maps.google.com/maps"]{display:none !important}
    a[href^="https://maps.google.com/maps"]{display:none !important}
    .gmnoprint a, .gmnoprint span, .gm-style-cc {
        display:none;
    }
    .gmnoprint div {
        background:none !important;
    }
`