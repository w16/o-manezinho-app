import { Address } from '../address';
import { Place } from './place';

export class PlaceBuilder {
  _id?: string;

  _name?: string;

  _category?: string;

  _type?: string;

  _description?: string;

  _tags?: string[];

  _address?: Address;

  id(id: string): PlaceBuilder {
    this._id = id;

    return this;
  }

  name(name: string): PlaceBuilder {
    this._name = name;

    return this;
  }

  category(category: string): PlaceBuilder {
    this._category = category;

    return this;
  }

  type(type: string): PlaceBuilder {
    this._type = type;

    return this;
  }

  description(description: string): PlaceBuilder {
    this._description = description;

    return this;
  }

  tags(...tags: string[]): PlaceBuilder {
    this._tags = [...tags];

    return this;
  }

  address(address: Address): PlaceBuilder {
    this._address = address;

    return this;
  }

  build(): Place {
    return new Place(
      this._id,
      this._name,
      this._category,
      this._type,
      this._description,
      this._tags,
      this._address
    );
  }
}
