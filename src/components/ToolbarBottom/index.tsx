import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
/** Icons */
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

import Button from '../Button/ButtonCustom'
import UseStyles from './UseStyles'

const ToolBar: React.FC<any> = () => {
  const classes = UseStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <div className='flex justify-between'>
          <Button nameButton='PONTO DE VENDA'
                  classNameTextButton='pl-1 tracking-tight text-sm pt-0.5'
                  classNameButton='grid grid-cols-1 p-2 border-2 rounded-lg text-white cursor-pointer bg-cyan-500 hover:bg-cyan-600'
                  icon={<KeyboardHideIcon />}>
          </Button>

          <Button nameButton='DELIVERY'
                  classNameTextButton='pl-1 tracking-tight text-sm pt-0.5'
                  classNameButton='grid grid-cols-1 p-2 border-2 rounded-lg text-current cursor-pointer bg-white hover:bg-slate-100'
                  icon={<MotorcycleIcon />}>
          </Button>

          <Button nameButton='VENDAS'
                  classNameTextButton='pl-1 tracking-tight text-sm pt-0.5'
                  classNameButton='grid grid-cols-1 p-2 border-2 rounded-lg text-current cursor-pointer bg-white hover:bg-slate-100'
                  icon={<AssignmentIcon />}>
          </Button>

          <Button nameButton='LIVRO DE CAIXA'
                  classNameTextButton='pl-1 tracking-tight text-sm pt-0.5'
                  classNameButton='grid grid-cols-1 p-2 border-2 rounded-lg text-current cursor-pointer bg-white hover:bg-slate-100'
                  icon={<MenuBookIcon />}>
          </Button>

          <Button nameButton='FINANCEIRO'
                  classNameTextButton='pl-1 tracking-tight text-sm pt-0.5'
                  classNameButton='grid grid-cols-1 p-2 border-2 rounded-lg text-current cursor-pointer bg-white hover:bg-slate-100'
                  icon={<AttachMoneyIcon />}>
          </Button>

          <Button nameButton='ESTOQUE'
                  classNameTextButton='pl-1 tracking-tight text-sm pt-0.5'
                  classNameButton='grid grid-cols-1 p-2 border-2 rounded-lg text-current cursor-pointer bg-white hover:bg-slate-100'
                  icon={<AllInboxIcon />}>
          </Button>

          <Button nameButton='CLIENTES'
                  classNameTextButton='pl-1 tracking-tight text-sm pt-0.5'
                  classNameButton='grid grid-cols-1 p-2 border-2 rounded-lg text-current cursor-pointer bg-white hover:bg-slate-100'
                  icon={<PeopleAltIcon />}>
          </Button>
        </div>
      </AppBar>
    </div>
  );
}

export default ToolBar