import styled from 'styled-components';

export const Title = styled.h1`
  color: 	#9932CC ;
  font-family: sans-serif ;
  font-size: ${props => `${props.fontSize}px`};
  span {
    font-size: 12px;
  }
  padding-top: 3%;
`;

export const Forms = styled.form`
  display: inline-block;
  position: relative;
  padding-top: 8%;
`;

export const Div = styled.div`
  text-align: center;
  position: absolute;
  width: 100%;
`;