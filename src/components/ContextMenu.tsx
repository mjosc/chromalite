import * as React from 'react';
import { Menu, Item, contextMenu } from 'react-contexify';

interface Props {

}

const ContextMenu: React.FunctionComponent<Props> = props => (
  <Menu id={'test'}>
    <Item>
      test
    </Item>
  </Menu>
);

export default ContextMenu;
export {
  contextMenu as MenuManager
}
