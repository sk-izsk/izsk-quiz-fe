import { useState } from 'react';
const useValue = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handleValue = (event: React.ChangeEvent<{ value: any }>) => setValue(event.target.value as any);
  const reset = () => setValue(initialValue);

  return [value, handleValue, reset];
};

const useValueForTextField = (initialValue: any) => {
  const [value, setValue] = useState(initialValue);
  const handleValue = (event: any) => setValue(event.value);
  const reset = () => setValue(initialValue);

  return [value, handleValue, reset];
};

export { useValue, useValueForTextField };
