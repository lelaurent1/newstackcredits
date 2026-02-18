import React from 'react'
import type { JSX } from 'react/jsx-runtime'



// Component
function BlazeIntegrationGroup({
  dataContent
}: {
  dataContent: string;
}) {
  return (
    <div
      role="group"
      tabIndex="-1"
      data-content={dataContent}
      dir="ltr"
    >
    </div>
  );
}

export default BlazeIntegrationGroup
