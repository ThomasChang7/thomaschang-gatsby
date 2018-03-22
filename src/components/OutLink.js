import styled from 'styled-components';

const OutLink = styled.a`
  text-decoration: none;
  opacity: 0.8;
  transition: all 0.2s ease;
  display: inline-block;
  &:hover {
    color: #8fbbbc;
  }
  &:after {
    content: '';
    position: relative;
    width: 0;
    height: 3px;
    display: block;
    margin-top: 5px;
    right: 0;
    background: #008080;

    transition: width 0.2s ease;
  }
  &:hover:after {
    width: 100%;
    left: 0;
    opacity: 0.8;
    background: #008080;
  }
`;

export default OutLink;
