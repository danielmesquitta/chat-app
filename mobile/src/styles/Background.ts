import styled from 'styled-components/native';

import { statusBarHeight } from './variables';

export default styled.SafeAreaView`
  flex: 1;
  background: #222;
  padding-top: ${statusBarHeight + 'px'};
`;
