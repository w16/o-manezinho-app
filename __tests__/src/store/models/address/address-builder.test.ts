import { toJS } from 'mobx';
import { Address, AddressBuilder } from 'store';

describe('AddressBuilder', () => {
  it('Should return an instance of Address', () => {
    expect(new AddressBuilder().build()).toBeInstanceOf(Address);
  });

  it('Should create an Address', () => {
    expect(toJS(new AddressBuilder().build())).toStrictEqual({
      street: '',
      country: '',
      city: '',
      neighborhood: '',
      zipCode: '',
      coordinates: null,
    });
  });

  it('Should create an Address with coordinates', () => {
    expect(toJS(new AddressBuilder().coordinates(0, 0).build())).toStrictEqual({
      street: '',
      country: '',
      city: '',
      neighborhood: '',
      zipCode: '',
      coordinates: {
        lat: 0,
        lng: 0,
      },
    });
  });
});
