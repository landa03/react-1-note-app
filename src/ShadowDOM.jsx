import React, { useRef, useEffect } from 'react';

const ShadowDomComponent = () => {
  const shadowRootRef = useRef(null);

  useEffect(() => {
    // Create a shadow root and attach it to the component's DOM
    const shadowRoot = shadowRootRef.current.attachShadow({ mode: 'open' });

    // Inject your React component into the shadow root
    // The shadowRoot is now its own isolated DOM
    shadowRoot.innerHTML = `
      <div id="shadow-content">
        <h1>Hello from Shadow DOM!</h1>
        <p>This content is inside the shadow root.</p>
      </div>
    `;
    
    // Optional: You can add styles to the shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      #shadow-content {
        background-color: lightblue;
        padding: 20px;
        border-radius: 8px;
      }
      h1 {
        color: darkblue;
      }
    `;
    shadowRoot.appendChild(style);
  }, []);

  return <div ref={shadowRootRef} />;
};

export default ShadowDomComponent;
