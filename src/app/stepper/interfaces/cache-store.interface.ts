export interface CacheStore {
  ultimoPaso: number;
  estadoPasos: EstadoPaso[];
}

export interface EstadoPaso {
  paso: number;
  estado: boolean;
}
