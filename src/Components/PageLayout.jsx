import React, { Children, useState } from 'react'
import MobView from './MobView'
import TabView from './TabView'

function PageLayout() {
    return (
        <>
            <MobView/>
            <TabView/>
        </>
    )
}

export default PageLayout
