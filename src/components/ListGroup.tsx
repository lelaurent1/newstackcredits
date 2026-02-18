import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import ListItemButton from './ListItemButton.tsx'


// Component
function ListGroup() {
            return (
                <div className={"MuiBox-root css-0"}>
                    <ListItemButton dataId="0" />
                    <ListItemButton dataId="1" />
                    <ListItemButton dataId="4" />
                    <ListItemButton dataId="5" />
                    <ListItemButton dataId="2" />
                    <a target={"_blank"} rel={"noopener noreferrer"} style={{textDecoration:"none"}}>
                        <ListItemButton dataId="3" />
                    </a>
                </div>
            );
        }

export default ListGroup
