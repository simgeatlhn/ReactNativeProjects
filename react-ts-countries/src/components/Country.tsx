import React, { FunctionComponent } from 'react'
import { CountryType } from '../types'

//proparı alacağımız sistem typescript ile
interface ICountryProps {
    country: CountryType
}

const Country: FunctionComponent<ICountryProps> = (props) => {

    const { country } = props
    return (
        <div>
            {country.name}-{country.capital}
        </div>
    )
}

export default Country

