import styled from 'styled-components';
import { theme } from '@/styles/theme';

export const TagButtonContainer = styled.button`
  color: ${(props) => (props.$clicked ? 'white' : 'black')};
  border: none;
  background-color: ${theme.colors.bgBlue};
  border-radius: 13px;
  padding-left: 10px;
  padding-right: 10px;
  height: 30px;
  outline: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.3);
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    border: 1px solid #888;
  }
  &:hover .overlay {
    opacity: 0.5;
  }
  &:active .overlay {
    opacity: 0.8;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const TagButtonOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  /* background-color: rgba(0, 0, 0, 0.3);   */
  opacity: 0;
  transition: 'opacity 0.3s ease';
`;
