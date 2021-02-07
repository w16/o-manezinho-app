import { toJS } from 'mobx';
import { Place, PlaceBuilder } from 'store';

describe('PlaceBuilder', () => {
  it('Should return an instance of Place', () => {
    expect(new PlaceBuilder().build()).toBeInstanceOf(Place);
  });

  it('Should create a place with values', () => {
    const place = new PlaceBuilder()
      .id('1')
      .name("John Doe's Tacos")
      .tags("Mexican's food", 'Spicy food')
      .build();

    expect(toJS(place)).toStrictEqual({
      id: '1',
      name: "John Doe's Tacos",
      category: '',
      type: '',
      tags: ["Mexican's food", 'Spicy food'],
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
        facebook: '',
        instagram: '',
        site: '',
        twitter: '',
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
