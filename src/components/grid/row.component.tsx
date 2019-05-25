import styled from '@emotion/styled';

const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

export default Row;