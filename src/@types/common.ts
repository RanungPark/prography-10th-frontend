export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type ButtonSizePick = Exclude<Size, 'xs'>;

export type Variant = 'default' | 'primary' | 'success' | 'warning' | 'error';
export type ButtonVariantPick = Exclude<
  Variant,
  'success' | 'warning' | 'error'
>;
