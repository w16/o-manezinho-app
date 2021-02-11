import { PlaceStore } from 'store';

export class RootStore {
  placeStore!: PlaceStore;

  init(): void {
    this.placeStore = new PlaceStore();
  }
}
