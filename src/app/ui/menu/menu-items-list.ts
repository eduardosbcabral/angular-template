import { MenuItem } from 'primeng/api';

export const MENU_ITEMS: MenuItem[] = [
  {
    label: 'Início',
    icon: 'pi pi-home',
    routerLink: '/',
  },
  {
    label: 'Gestão de Processos',
    icon: 'pi pi-file-o'
  },
  {
    label: 'Gestão do Sistema',
    icon: 'pi pi-sliders-h',
    items: [
      {
        label: 'Usuários',
        items: [
          {
            label: 'Listar',
            routerLink: ['/gestao-sistema/usuarios/listar'],
          },
          {
            label: 'Cadastrar',
            routerLink: ['/gestao-sistema/usuarios/cadastrar']
          }
        ]
      }
    ],
  },
];