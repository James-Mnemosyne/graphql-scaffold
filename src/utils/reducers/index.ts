export function Multiply(product: number, value: number | undefined): number {
  return product * (value ?? 1);
}

export const Product = Multiply;
