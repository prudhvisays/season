import styled from 'styled-components';

const GroupStyle = styled.div`
&::before{
 background: ${(props) => props.badgeColor}
}
`;

export default GroupStyle;
