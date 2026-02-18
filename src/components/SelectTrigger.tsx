import React from 'react'
import type { JSX } from 'react/jsx-runtime'

import Svg from './Svg.tsx'


// Component
function SelectTrigger({
  label,
  iconId,
}: {
  label: string;
  iconId: string | number;
}) {
  return (
    <button
      type={"button"}
      role={"combobox"}
      dir={"ltr"}
      data-state={"closed"}
      className={
        "Trigger-sc-1i1y36u-1 dwAHcA SelectTrigger-sc-itmc3f-3 iUoNes"
      }
    >
      <span style={{ pointerEvents: "none" }}>
        <div className={"Marketplace-sc-1ra0at5-0 cxyKCf"}>
          <Svg id={iconId} />
          {label}
        </div>
      </span>
      <Svg id="15" />
    </button>
  );
}

export default SelectTrigger
