import React, { useState } from 'react';

// Custom hook for toggling a boolean value
function useToggle(initialState = false) {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(prevState => !prevState);
  };

  return [state, toggle];
}

export default function CustomHooks() {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <p>{isToggled ? 'Toggled On' : 'Toggled Off'}</p>
    </div>
  );
}


