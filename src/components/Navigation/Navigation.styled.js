import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeaderLink = styled(Link)`
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.0075em;
  color: #e8eaf6;
  text-decoration: none;

  & + & {
    margin-left: 2rem;
  }

  &:hover,
  &:active {
    color: #f44336;
  }
`;
