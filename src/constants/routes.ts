export type Route = {
  label: string;
  href: string;
};

export const routes: Route[] = [
  { label: 'Início', href: '/' },
  { label: 'Transferências', href: '/transactions' },
  { label: 'Investimentos', href: '/investimentos' },
  { label: 'Outros serviços', href: '/others' },
];
