export type Route = {
  label: string;
  href: string;
  disabled: boolean;
};

export const routes: Route[] = [
  { label: 'Início', href: '/', disabled: false },
  { label: 'Transferências', href: '/transactions', disabled: true },
  { label: 'Investimentos', href: '/investimentos', disabled: true },
  { label: 'Outros serviços', href: '/others', disabled: true },
];
