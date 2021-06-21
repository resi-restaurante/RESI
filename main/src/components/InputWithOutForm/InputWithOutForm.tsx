import React, { InputHTMLAttributes, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  containerStyle?: object;
  icon?: React.ComponentType<IconBaseProps>;
}

export const InputWithOutForm: React.FC<InputProps> = ({
  containerStyle = {},
  icon: Icon,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container style={containerStyle} isFilled={isFilled} isFocused={isFocused}>
      <input onFocus={handleInputFocus} onBlur={handleInputBlur} {...rest} />
      {Icon && <Icon size={20} />}
    </Container>
  );
};
