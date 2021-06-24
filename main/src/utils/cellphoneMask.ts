/* eslint-disable */
const cellphoneMask = (value: string) => {
  value = value.replace(/\D/g, '');
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  return value;
};

export default cellphoneMask;
