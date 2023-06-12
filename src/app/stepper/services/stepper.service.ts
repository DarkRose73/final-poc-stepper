import { Injectable } from '@angular/core';
import { CacheStore } from '../interfaces/cache-store.interface';

const valorInicialPasos: CacheStore = {
  ultimoPaso: 0,
  estadoPasos: [],
};

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  public cacheStore: CacheStore = valorInicialPasos;

  constructor() {
    this.cargarCacheLocalStorage();
  }

  private cargarCacheLocalStorage() {
    if (!localStorage.getItem('cacheStoreStepper')) return;
    this.cacheStore = JSON.parse(localStorage.getItem('cacheStoreStepper')!);
    console.log(JSON.parse(localStorage.getItem('cacheStoreStepper')!));
  }

  private guardarCacheLocalStorage() {
    localStorage.setItem('cacheStoreStepper', JSON.stringify(this.cacheStore));
  }

  public completarPaso(numeroPaso: number, valorPaso: boolean) {
    this.cacheStore.ultimoPaso = numeroPaso + 1;
    this.cacheStore.estadoPasos.push({ estado: valorPaso, paso: numeroPaso });
    this.guardarCacheLocalStorage();
  }

  reiniciarPasos() {
    this.cacheStore = valorInicialPasos;
    this.guardarCacheLocalStorage();
  }
}
