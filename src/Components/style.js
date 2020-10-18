import styled from 'styled-components'
import defaultImg from '../images/defaultBcg.jpeg'
const styledHero = styled.header`
  background: url(${props => props.img? props.img : defaultImg}) center/cover fixed no-repeat ;
  width: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default styledHero;
