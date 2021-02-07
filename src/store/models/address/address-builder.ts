import { Coordinates } from 'ts';
import { Address } from 'store';

export class AddressBuilder {
  _street?: string;

  _country?: string;

  _city?: string;

  _neighborhood?: string;

  _zipCode?: string;

  _coordinates?: Nullable<Coordinates>;

  street(street: string): AddressBuilder {
    this._street = street;

    return this;
  }

  country(country: string): AddressBuilder {
    this._country = country;

    return this;
  }

  city(city: string): AddressBuilder {
    this._city = city;

    return this;
  }

  neighborhood(neighborhood: string): AddressBuilder {
    this._neighborhood = neighborhood;

    return this;
  }

  zipCode(zipCode: string): AddressBuilder {
    this._zipCode = zipCode;

    return this;
  }

  coordinates(lat: number, lng: number): AddressBuilder {
    this._coordinates = {
      lat,
      lng,
    };

    return this;
  }

  build(): Address {
    return new Address(
      this._street,
      this._country,
      this._city,
      this._neighborhood,
      this._zipCode,
      this._coordinates
    );
  }
}
