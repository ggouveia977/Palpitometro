import { Jogo } from "./jogo.model";

export interface Palpite {
  id?: number;
  jogoId?: Jogo;
  selecaoA?: any;
  placarA?: number;
  selecaoB?: any;
  placarB?: number;
  criadoEm?: string;
}