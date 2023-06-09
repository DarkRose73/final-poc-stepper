import { Injectable } from '@angular/core';
import { CacheStore } from '../interfaces/cache-store.interface';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  public cacheStore: CacheStore = {
    ultimoPaso: 1,
    estadoPasos: [],
  };

  constructor() {
    this.cargarCacheLocalStorage();
  }

  private cargarCacheLocalStorage() {
    if (!localStorage.getItem('cacheStoreStepper')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
    console.log(JSON.parse(localStorage.getItem('cacheStore')!));
  }

  private guardarCacheLocalStorage() {
    localStorage.setItem('cacheStoreStepper', JSON.stringify(this.cacheStore));
  }
}
