import { MenuItem } from 'primeng/api';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Início',
    icon: 'pi pi-home',
    routerLink: '/',
  },
  {
    label: 'Gestão de Processos',
    icon: 'pi pi-file-o',
    items: [
      {
        label: 'PAD',
        routerLink: '/home',
      }
    ]
  },
  {
    label: 'Gestão do Sistema',
    icon: 'pi pi-sliders-h',
    items: [
      {
        label: 'Usuários',
        routerLink: 'gestao-sistema/usuarios'
      }
    ],
  },
];