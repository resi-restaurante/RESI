/* eslint-disable no-param-reassign */
import { useRef, useEffect, ReactNode, SelectHTMLAttributes } from 'react';

import { useField } from '@unform/core';

interface SelectProps {
  name: string;
  label: string;
  children: ReactNode;
}

type Props = SelectHTMLAttributes<HTMLSelectElement> & SelectProps;

export default function NewSelect({ name, label, children, ...rest }: Props) {
  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      ref: selectRef,
      name: fieldName,
      getValue: ref => {
        return ref.current?.value;
      },
      setValue: (ref, newValue) => {
        ref.current.value = newValue;
      },
      clearValue: ref => {
        ref.current.value = '';
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <label htmlFor={fieldName}>{label}</label>

      <select
        id={fieldName}
        ref={selectRef}
        defaultValue={defaultValue}
        {...rest}
      >
        {children}
      </select>

      {error && <span className="error">{error}</span>}
    </div>
  );
}
