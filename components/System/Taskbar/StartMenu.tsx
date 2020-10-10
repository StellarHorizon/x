import styles from '@/styles/System/Taskbar/StartMenu.module.scss';

import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

// TODO:
// - The menu can be <ol>.
// - CSS positionined directly above button
// - 0 height by default
// - animate to 100% height
// - On click the bg color gets lighter
// - Stays lighter until menu goes away
// - 375px width
// - hover on start menu has a circle gradient from cursor for 15-20px
// - hover lights up borders of buttons and bg of items
// - START | All Apps | Dustin Brett | Documents | Power
// - Highlight color for icon, text color and left border for buttons, 4px
// - Title on hover is "Start"
// - 1px border on right side of button menu
// - Start menu is also transprent but is more blurred, maybe more dark slightly

const StartMenu: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.start} title="Start">
      <ol className={styles.menu} style={{ display: showMenu ? 'block' : 'none' }} />
      <FontAwesomeIcon icon={faWindows} onClick={() => setShowMenu(!showMenu)} />
    </nav>
  );
}

export default StartMenu;
