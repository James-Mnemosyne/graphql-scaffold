import { Queries } from 'graphql-retail/types';

/**
 * thing query
 */
export const thing: Queries['thing'] = async function (_parent, input, _context) {
  // TODO implement
  console.log('input', input);
  throw new Error('Unsupported query thing.');
};
