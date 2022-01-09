import React from 'react';
import InputHookForm from '../components/InputHookForm';
import { useFormContext } from 'react-hook-form';

type SortableItemProps = {
  item: {
    id: string;
    input1: string;
    input2: string;
  };
  index: number;
  onUp: () => void;
  onDown: () => void;
  onDelete: () => void;
};

export const SortableItem: React.FC<SortableItemProps> = ({
  item,
  index,
  onUp,
  onDown,
  onDelete,
}) => {
  const { control } = useFormContext();

  return (
    <div>
      <h3>{item.id}</h3>
      <InputHookForm
        control={control}
        name={`sortable.${index}.input1`}
        field={'Input1'}
        rules={{ required: 'Required' }}
      />
      <InputHookForm
        control={control}
        name={`sortable.${index}.input2`}
        field={'Input2'}
        rules={{ required: 'Required' }}
      />
      <button type={'button'} onClick={onUp}>
        위로
      </button>
      <button type={'button'} onClick={onDown}>
        아래로
      </button>
      <button type={'button'} onClick={onDelete}>
        삭제
      </button>
    </div>
  );
};

export default SortableItem;
