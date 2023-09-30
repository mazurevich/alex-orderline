import './style/reset.scss';
import './style/style.scss';
import './style/button.scss';
import { renderTableHeader, renderNew } from './renders/renders.js';
import { renderBtnNew } from './renders/btns.js';
import { eventOpenList } from './renders/events.js';

const screenMode = screen.orientation.type;


renderTableHeader();
renderNew();
renderBtnNew();
eventOpenList();