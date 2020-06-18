import styled from 'styled-components'

export const ScrollNavigator = styled.ScrollView`
  height: 120;
  fontFamily: 'Ubuntu-Light';
`

export const NavigatorContent = styled.View`
`

export const ViewNavigator = styled.View`
  flex-direction: row;
  margin-left: 25px;
  fontFamily: 'Ubuntu-Light';
`

export const NavigatorBox = styled.TouchableOpacity`
  background-color: rgba(255, 255, 255, 0.190);
  height: 100;
  width: 113;
  margin-right: 10;
  border-radius: 3;
  padding: 8px;
  justify-content: space-between;
  fontFamily: 'Ubuntu-Light';
`

export const Title = styled.Text`
  color: #FFF;
  fontFamily: 'Ubuntu-Light';
`

export const Icon = styled.Image`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  fontFamily: 'Ubuntu-Light';
`