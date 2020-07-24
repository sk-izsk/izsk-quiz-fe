type BorderStyle =
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'none'
  | 'hidden';

const makeBorder: (width: number, style: BorderStyle, color: string) => string = (
  width: number,
  style: BorderStyle,
  color: string,
) => {
  return `${width}px ${style} ${color}`;
};

export { makeBorder };
