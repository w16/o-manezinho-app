import { toJS } from 'mobx';
import { Address } from 'store';

describe('Address', () => {
  it('new instance: Should create a new Address', () => {
    expect(toJS(new Address())).toStrictEqual({
      street: '',
      country: '',
      city: '',
      neighborhood: '',
      zipCode: '',
      coordinates: null,
    });
  });
});
