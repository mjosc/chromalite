import * as React from 'react';
import { Menu, Item, Separator, theme, animation, contextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import './ColorContextMenu.css';

interface Props {
  onClick: any
}

const ColorContextMenu: React.FunctionComponent<Props> = props => (
  <Menu id={'test'} theme={theme.light} animation={animation.zoom} className='test'>
    <Item onClick={props.onClick}>
      Remove Color
    </Item>
    <Item>
      Add Color
    </Item>
    <Separator />
    <Item>
      Edit Scheme
    </Item>
  </Menu>
);

export default ColorContextMenu;
export { contextMenu };
