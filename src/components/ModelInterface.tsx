// ModelInterface.tsx
// Interactive interface of the model

import React, { FunctionComponent } from 'react';

import '../styles/ModelInterface.scss';
import InterfaceMain from './ModelInterface/InterfaceMain';
import InterfaceCreate from './ModelInterface/InterfaceCreate';
import InterfaceReset from './ModelInterface/InterfaceReset';

const ModelInterface: FunctionComponent<{}> = () => {
  return (
    <div className="Interface">
      <InterfaceMain />
      <InterfaceCreate />
      <InterfaceReset />
    </div>
  )
}

export default ModelInterface;