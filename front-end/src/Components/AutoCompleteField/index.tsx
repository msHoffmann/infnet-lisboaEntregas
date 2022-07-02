import { LoadGoogleScript } from "../LoadingGoogleScript";
import { Autocomplete } from "@react-google-maps/api";
import { FormFieldView, FormFieldProps } from "../FormField";
import { useRef } from "react";
import { Address } from "../entities/Address";

type Props = {
  value: null | Address
  onChange: (address: null | Address) => void
} & Omit<FormFieldProps, 'value'| 'onChange'>

export function AutoCompleteField ({value, onChange, ...fieldProps}: Props) {
    const autocompleteRef = useRef<null | google.maps.places.Autocomplete>(null)
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
      autocompleteRef.current = autocomplete
      autocomplete.setBounds(new google.maps.LatLngBounds(
        new google.maps.LatLng(38.69698049309091, -9.423336182371083),
        new google.maps.LatLng(38.83187718954952, -9.17173338487593)
      ))
    }
    const handleChange = () => {
      const place = autocompleteRef.current?.getPlace()
      if (place && place.formatted_address && place.geometry?.location) {
        const address: Address = {
          address: place.formatted_address,
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng()
        }
        onChange(address)
      }
    }
    return (
      <LoadGoogleScript>
        <Autocomplete
          onLoad={handleLoad}
          onPlaceChanged={handleChange}
          options={{
            strictBounds: true
          }}
          restrictions={{
            country: 'pt'
          }}
        >
          <FormFieldView {...fieldProps}
          onChange={() => onChange(null)}
          />
        </Autocomplete>
      </LoadGoogleScript>
    )
  }