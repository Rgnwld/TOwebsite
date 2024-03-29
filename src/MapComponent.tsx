import React, { useState } from 'react';
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import { stringify } from 'querystring';

const MapComponent = () => {
    const initialMarkers = [
        {
            position: {
                lat: 28.625485,
                lng: 79.821091,
            },
            label: { color: 'white', text: 'P1' },
            draggable: true,
        },
        {
            position: {
                lat: 28.625293,
                lng: 79.817926,
            },
            label: { color: 'white', text: 'P2' },
            draggable: false,
        },
        {
            position: {
                lat: 28.625182,
                lng: 79.81464,
            },
            label: { color: 'white', text: 'P3' },
            draggable: true,
        },
    ];

    const [activeInfoWindow, setActiveInfoWindow] = useState('');
    const [markers, setMarkers] = useState(initialMarkers);

    const containerStyle = {
        width: '100%',
        height: '100%',
    };

    const center = {
        lat: 28.626137,
        lng: 79.821603,
    };

    const mapClicked = (event: any) => {
        console.log(event.latLng.lat(), event.latLng.lng());
    };

    const markerClicked = (marker: any, index: any) => {
        setActiveInfoWindow(index);
        console.log(marker, index);
    };

    const markerDragEnd = (event: any, index: any) => {
        console.log(event.latLng.lat());
        console.log(event.latLng.lng());
    };

    return (
        <LoadScript googleMapsApiKey="AIzaSyAKFaQdWGHwh5E-_FqvB9IWgh-5NSYA5u4">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} onClick={mapClicked}>
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        position={marker.position}
                        label={marker.label}
                        draggable={marker.draggable}
                        onDragEnd={(event) => markerDragEnd(event, index)}
                        onClick={(event) => markerClicked(marker, index)}
                    >
                        {+activeInfoWindow === index && (
                            <InfoWindow position={marker.position}>
                                <b>
                                    {marker.position.lat}, {marker.position.lng}
                                </b>
                            </InfoWindow>
                        )}
                    </Marker>
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
