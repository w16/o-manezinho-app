import { toJS } from 'mobx';
import { Place } from 'store';

describe('Place', () => {
  it('new instance: Should create a new Place', () => {
    expect(toJS(new Place())).toStrictEqual({
      id: '',
      name: '',
      category: '',
      type: '',
      tags: [],
      description: '',
      address: {
        street: '',
        contry: '',
        city: '',
        neighborhood: '',
        zipCode: '',
        coordinates: null,
      },
      socialNetworks: {
        instagram: '',
        site: '',
      },
      prices: {
        perPerson: {
          default: 0,
          withBeverages: 0,
        },
      },
    });
  });
});
