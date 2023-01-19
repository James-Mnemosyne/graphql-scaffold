import { Queries } from 'graphql-retail/types';

/**
 * thing1 query
 */
export const thing1: Queries['thing1'] = async function (
  _parent,
  input,
  _context
) {
  // TODO implement
  console.log('input', input);
  throw new Error('Unsupported query thing1.')
};
