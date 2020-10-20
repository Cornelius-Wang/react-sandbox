import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';

const firstToolTip = (
  <Tooltip message='tooltip message' color='hotpink'>
    Lorem
  </Tooltip>
);

const secondToolTip = (
  <Tooltip message='another tooltip message' color='#126BCC'>
    Ipsum
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      {/* content goes here */}
      <Split className='left' flexBasis='2'>
        This is the content for the left `Split`. Lorem {firstToolTip} ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content for the right `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit.  {secondToolTip}  Incidunt ex velit suscipit facere officia?
      </Split>
    </main>
  );
}

export default App;
