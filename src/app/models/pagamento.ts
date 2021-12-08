import { pagamentoId } from "./pagamentoId";

export interface pagamento {
    pagamentoId?: pagamentoId;
    idAnalista?: any;
    taxa?: any;
    valorHoraContrato?: any;
    horasFixas?: any;
    horasTrabalhadas: number,
    horasExtras?: any;
    pagamentoHora?: any;
    pagamentoHoraExtra?: any;
    pagamento?: any;
  }