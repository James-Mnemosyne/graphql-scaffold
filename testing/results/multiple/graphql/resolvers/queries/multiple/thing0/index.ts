import { Queries } from 'graphql-retail/types';

/**
 * thing0 query
 */
export const thing0: Queries['thing0'] = async function (
  _parent,
  input,
  _context
) {
  // TODO implement
  console.log('input', input);
  throw new Error('Unsupported query thing0.')
};
