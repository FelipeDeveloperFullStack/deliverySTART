import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SettingsIcon from '@material-ui/icons/Settings';
import IconButton from '@material-ui/core/IconButton';

import Button from '../Button/ButtonCustom'
import UseStyles from './UseStyles'

const AppBarStyled = styled(AppBar)({
  background: '#444444',
  color: '#FFF'
})

const ToolBar: React.FC<any> = () => {
  const classes = UseStyles();

  return (
    <div className={classes.root}>
      <AppBarStyled position="static">
        <Toolbar variant="dense">
          <div className='flex justify-between w-full'>

            <div className='flex justify-between'>
              <Button classNameButton='flex justify-evenly p-2 text-current cursor-pointer'
                classNameTextButton='pl-1 tracking-tight text-sm pt-0.5 font-bold'
                nameButton='MINHA LOJA'
                styleIcon={{ position: 'relative', left: '15px' }}
                icon={<StorefrontIcon />}>
              </Button>
              <Button classNameButton='flex justify-evenly p-2 rounded-lg text-current cursor-pointer bg-zinc-500/50 hover:bg-zinc-500/75'
                classNameTextButton='pl-1 tracking-tight text-sm pt-0.5'
                nameButton='RESULTADOS'
                styleIcon={{ position: 'relative', left: '15px' }}
                icon={<TrendingUpIcon />}>
              </Button>    
            </div>

            <IconButton style={{ paddingTop: '10px', color: '#FFF' }}>
              <SettingsIcon />
            </IconButton>

          </div>
        </Toolbar>
      </AppBarStyled>
    </div>
  );
}

export default ToolBar