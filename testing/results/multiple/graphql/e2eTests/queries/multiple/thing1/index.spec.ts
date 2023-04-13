import { getTestUserToken } from 'src/graphql-retail/testing/utils/getTestUserToken';
  import { makeGraphQLRequest } from 'src/graphql-retail/testing/utils/makeGraphQLRequest';
  import gql from 'graphql-tag';
  
  const query = gql`
    query thing1 {
      thing1 {
        __typename
      }
    }
  `;
  
  // This is an e2e test for thing1, that verifies that it progressese through the entire server, with no issues
  describe('thing1', () => {
    it('fetches correctly', async () => {
      const userToken = (await getTestUserToken({ email: 'usere2etestemail+titan123@gmail.com' })).token;
      const result = await makeGraphQLRequest({ query, variables: {}, headers: { authorization: `Bearer ${userToken}` } });
  
      expect(result.data).toMatchSnapshot();
      expect(result.errors).toEqual(undefined);
    }, 25000);
  });
  
