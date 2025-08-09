import { Button, Dialog } from '../ui';

export interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmDialog({
  onClose,
  isOpen,
  onConfirm,
}: ConfirmDialogProps) {
  return (
    <Dialog isOpen={isOpen} onClose={onClose} title='Confirmar'>
      <div className='flex flex-col gap-10'>
        <p>Tem certeza que deseja excluir esta transação?</p>
        <div className='flex justify-end gap-4'>
          <Button title='Confirmar' onClick={onConfirm} />
          <Button variant='secondary' title='Cancelar' onClick={onClose} />
        </div>
      </div>
    </Dialog>
  );
}
