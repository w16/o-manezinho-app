import { action, makeObservable, observable } from 'mobx';
import { Place } from 'store/models/place';
import { Pageable } from 'store/extensions/pageable';

export class PlaceStore extends Pageable {
  list: Place[] = [];

  constructor() {
    super(async (page: number, perPage: number) => {
      console.log(page, perPage);

      this.setTotal(0);

      if (this.isRefreshing) {
        console.log('Clear list');
      } else {
        console.log('Append list');
      }
    });

    makeObservable(this, {
      list: observable,
      clear: action,
      add: action,
      addMany: action,
      remove: action,
    });
  }

  clear(): void {
    this.list = [];
  }

  add(place: Place, atFirst = false): void {
    if (atFirst) {
      this.list.unshift(place);
    } else {
      this.list.push(place);
    }
  }

  addMany(places: Place[], atFirst = false): void {
    if (atFirst) {
      this.list.unshift(...places);
    } else {
      this.list.push(...places);
    }
  }

  remove(placeId: string): void {
    if (placeId != null) {
      const index = this.list.findIndex((place) => place.id === placeId);
      if (index > -1) {
        this.list = [
          ...this.list.slice(0, index),
          ...this.list.slice(index + 1),
        ];
      }
    }
  }

  replace(place: Place): void {
    if (place != null) {
      const index = this.list.findIndex((p) => place.id === p.id);
      if (index > -1) {
        this.list = [
          ...this.list.slice(0, index),
          place,
          ...this.list.slice(index + 1),
        ];
      }
    }
  }
}
