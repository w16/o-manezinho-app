import { makeObservable, observable } from 'mobx';
import { PlacePrices, SocialNetworks } from 'ts';
import { Address } from 'store';

export class Place {
  id: string = '';

  name: string = '';

  category: string = '';

  type: string = '';

  description: string = '';

  tags: string[] = [];

  address: Address = new Address();

  socialNetworks: Nullable<SocialNetworks> = null;

  prices: Nullable<PlacePrices> = null;

  constructor(
    id?: string,
    name?: string,
    category?: string,
    type?: string,
    description?: string,
    tags?: string[],
    address?: Address
  ) {
    makeObservable(this, {
      id: observable,
      name: observable,
      category: observable,
      type: observable,
      tags: observable,
      description: observable,
      address: observable,
    });

    this.id = id || '';
    this.name = name || '';
    this.category = category || '';
    this.type = type || '';
    this.description = description || '';

    if (tags != null && Array.isArray(tags) && tags.length) {
      this.tags = tags.map((tag) => String(tag));
    }

    if (address != null && address instanceof Address) {
      this.address = address;
    }
  }
}
