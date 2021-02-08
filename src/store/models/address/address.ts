import { makeObservable, observable } from 'mobx';
import { Coordinates } from 'ts';

export class Address {
  street = '';

  country = '';

  city = '';

  neighborhood = '';

  zipCode = '';

  coordinates: Nullable<Coordinates> = null;

  constructor(
    street = '',
    country = '',
    city = '',
    neighborhood = '',
    zipCode = '',
    coordinates?: Nullable<Coordinates>
  ) {
    makeObservable(this, {
      street: observable,
      country: observable,
      city: observable,
      neighborhood: observable,
      zipCode: observable,
      coordinates: observable,
    });

    this.street = street || '';
    this.country = country || '';
    this.city = city || '';
    this.neighborhood = neighborhood || '';
    this.zipCode = zipCode || '';
    this.coordinates = null;

    if (
      coordinates != null &&
      typeof coordinates === 'object' &&
      coordinates.lat != null &&
      coordinates.lng != null &&
      !Number.isNaN(Number(coordinates.lat)) &&
      !Number.isNaN(Number(coordinates.lng))
    ) {
      this.coordinates = {
        lat: Number(coordinates.lat),
        lng: Number(coordinates.lng),
      };
    }
  }
}
