import React from 'react';
/** Material UI */
import { Button, Dialog, TextField, Grid } from '@material-ui/core';
/** Types and Interfaces */
import IPropsComercio from './Types/IPropsComercio'
/** Components */
import DialogContent from './DialogContent'
import DialogTitle from './DialogTitle'
import DialogActions from './DialogActions'
/** Material IU */
import { styled } from '@material-ui/core/styles'

const DialogContentStyled = styled(DialogContent)({
    height: '900px'
})

const DialogComercio: React.FC<IPropsComercio> = (props: IPropsComercio) => {
    return (
        <div>
            <Dialog onClose={() => props.setIsOpen(false)} aria-labelledby="customized-dialog-title" open={props.isOpen} fullWidth={true} maxWidth={'md'}>
                <DialogTitle id="customized-dialog-title" onClose={() => props.setIsOpen(false)}>
                    Minha Loja
               </DialogTitle>
                <DialogContentStyled dividers>
                    <Grid container>
                        <Grid item xs={4}>
                            <TextField label='Logo' variant='filled' color='primary' size='small' fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField label='Nome' variant='filled' color='primary' size='small' focused fullWidth />
                            <TextField label='CPF/CNPJ' variant='filled' color='primary' size='small' focused style={{ position: 'relative', top: '10px' }} fullWidth />
                            <TextField label='E-mail' variant='filled' color='primary' size='small' focused style={{ position: 'relative', top: '20px' }} fullWidth />
                            <TextField label='Telefone Principal' variant='filled' color='primary' focused size='small' style={{ position: 'relative', top: '30px' }} fullWidth />
                        </Grid>
                        <Grid item xs={4}>
                            <div className='flex'>
                                <TextField label='CEP' variant='filled' color='primary' size='small' focused />
                                <TextField label='Número' variant='filled' color='primary' size='small' focused />
                            </div>
                            <TextField label='Logradouro' variant='filled' color='primary' size='small' focused style={{ position: 'relative', top: '10px' }}/>
                            <div className='flex'>
                                <TextField label='Bairro' variant='filled' color='primary' size='small' focused style={{ position: 'relative', top: '20px' }}/>
                                <TextField label='Estado' variant='filled' color='primary' size='small' focused style={{ position: 'relative', top: '20px' }}/>
                            </div>
                            <TextField label='Cidade' variant='filled' color='primary' size='small' focused style={{ position: 'relative', top: '30px' }}/>
                            <TextField label='Complemento' variant='filled' color='primary' size='small' focused style={{ position: 'relative', top: '40px' }}/>
                            <TextField label='Site' variant='filled' color='primary' size='small' focused style={{ position: 'relative', top: '50px' }}/>
                        </Grid>
                    </Grid>
                </DialogContentStyled>
                <DialogActions>
                    <Button onClick={props.onClick} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default DialogComercio

