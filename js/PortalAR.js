'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroAmbientLight,
  Viro360Image,
  ViroPortal,
  ViroPortalScene,
  Viro3DObject,
} from 'react-viro';

var createReactClass = require('create-react-class');
var MainScene = createReactClass({

  render: function() {
    return (
      <ViroARScene>
      <ViroAmbientLight color="#ffffff" intensity={200}/>
        <ViroPortalScene passable={true} dragType="FixedDistance" onDrag={()=>{}}>
          <ViroPortal position={[0, 0, -1]} scale={[.1, .1, .1]}>
            <Viro3DObject source={require('./res/portal_archway/portal_archway.vrx')}
              resources={[require('./res/portal_archway/portal_archway_diffuse.png'),
                          require('./res/portal_archway/portal_archway_normal.png'),
                          require('./res/portal_archway/portal_archway_specular.png')]}
              type="VRX"/>
          </ViroPortal>
          <Viro360Image source={require("./res/ghetto_360.jpg")} />
          <ViroAmbientLight color="#FFFFFF" />
        </ViroPortalScene>
      </ViroARScene>
    );
  },
});

module.exports = MainScene;