import React from 'react';
import './SidebarOption.css';

function SidebarOption({active,text,Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}` }>
        <Icon/> {/*The icon of the option*/}
        <h2>{text}</h2> {/*The title of the option*/}
    </div>
  )
}

export default SidebarOption