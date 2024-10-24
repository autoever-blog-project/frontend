import styled from 'styled-components';

export const TagButtonContainer = styled.button`
  border: 1px solid ${(props) => (props.$clicked ? 'red' : 'black')};
  color: ${(props) => (props.$clicked ? 'red' : 'black')};
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
    border: 1px solid rgba(0, 0, 0, 0.3);
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
