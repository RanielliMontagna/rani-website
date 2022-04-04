import { VariantType } from 'notistack';

export type LoadingType = boolean;

export type Notificacao = {
  variante?: VariantType;
  mensagem?: string;
};

export type AppSlice = {
  loading: LoadingType;
  tema: string | null;
  notificacao: Notificacao;
};
