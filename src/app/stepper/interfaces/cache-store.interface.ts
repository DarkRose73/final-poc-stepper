export interface CacheStore {
  ultimoPaso: number;
  estadoPasos: EstadoPaso[];
}

interface EstadoPaso {
  paso: number;
  estado: boolean;
}
