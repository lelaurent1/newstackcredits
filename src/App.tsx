import React, { useState } from 'react'
import type { JSX } from 'react/jsx-runtime'

import IconButton1 from './components/IconButton1.tsx'
import MuiButton from './components/MuiButton.tsx'
import IconButton from './components/IconButton.tsx'
import StyledViewport from './components/StyledViewport.tsx'
import BlazeIntegrationGroup from './components/BlazeIntegrationGroup.tsx'
import DrawerSidebar from './components/DrawerSidebar.tsx'
import EmbedShell from './components/EmbedShell.tsx'
import DashboardContent from './components/DashboardContent.tsx'

function App() {
    const [currentStep, setCurrentStep] = useState(1);

    return (
<body>
<noscript>
<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF2T8TH" height={"0"} width={"0"} style={{display:"none", visibility:"hidden"}}></iframe>
</noscript>
<div id={"__next"}>
<div className={"MuiBox-root css-1t8e0eb"}>
<div className={"content paddingBottom MuiBox-root css-0"} id={"anchored-content"}>
<div id={"scrollToTop"}></div>
<div className={"MuiBox-root css-etg73k"}>
<DrawerSidebar currentStep={currentStep} setCurrentStep={setCurrentStep} />
<div className={"navbar MuiBox-root css-0"}>
<div className={"MuiBox-root css-1hdbkvc"}>
<IconButton1 className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium mobileSidebarToggle css-vc6vv3 sf-hidden" showRipple={false} svgId={6} />
</div>
<div className={"MuiBox-root css-h7249k"}></div>
<div className={"MuiBox-root css-1hdbkvc"}></div>
</div>
<DashboardContent currentStep={currentStep} setCurrentStep={setCurrentStep} />
</div>
</div>
<div className={"anchorPortal MuiBox-root css-1vdpw2 sf-hidden"}></div>
</div>
</div>
<next-route-announcer>
<p id={"__next-route-announcer__"} role={"alert"} style={{border:"0px", clip:"rect(0px,0px,0px,0px)", height:"1px", margin:"-1px", overflow:"hidden", padding:"0px", position:"absolute", top:"0px", width:"1px", whiteSpace:"nowrap", overflowWrap:"normal"}}>
/brand/contractDrafts/c1cf591e-bf09-11f0-a319-002248499710/form
</p>
</next-route-announcer>
<div id={"jsExtensionEmbedder"}>
<div role={"region"} tabIndex={"-1"} style={{pointerEvents:"none"}}>
<StyledViewport />
</div>
<div id={"jsExtensionMenuParent"}>
<template shadowrootmode={"open"}>
<div id={"jsExtensionMenu"}>
<EmbedShell />
</div>
</template>
</div>
</div>
<iframe height={"0"} width={"0"} style={{display:"none", visibility:"hidden"}}></iframe>
<iframe style={{display:"block", position:"absolute", top:"0px", left:"0px", visibility:"hidden"}} sandbox={"allow-popups allow-top-navigation-by-user-activation"} src="frames/5a13bc68-4239-4734-b9a8-00ffd7672f94/index.html"></iframe>
<text-blaze-app-reference style={{display:"contents"}}>
<template shadowrootmode={"closed"}>
<BlazeIntegrationGroup dataContent='{"extensionEnabled":true,"text":true}' />
</template>
</text-blaze-app-reference>
</body>
    );
}

export default App
