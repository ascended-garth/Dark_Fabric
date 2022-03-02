import * as React from 'react';
import { render } from 'react-dom';
import { DefaultButton, ThemeProvider, initializeIcons } from '@fluentui/react';

initializeIcons();

// NOTE: This sandbox uses Fluent UI React 8.
// TO use version 7, start from https://aka.ms/fabric7sandbox

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider>
      <DefaultButton onClick={() => alert('hello')}>Hello World</DefaultButton>
    </ThemeProvider>
  );
};

const rootElement = document.getElementById('root');
render(<App />, rootElement);
