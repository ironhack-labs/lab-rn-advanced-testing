/* eslint-disable react/react-in-jsx-scope */
import {RenderOptions, render} from '@testing-library/react-native';

import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {GameContext, useContextGame} from '../src/context/use-game-context';
import {gameContext} from '../src/context/';
import {ReactNode} from 'react';

type AllTheProvidersProps = {
  children: ReactNode;
  context: Partial<GameContext>;
};

const AllTheProviders = ({children, context}: AllTheProvidersProps) => {
  const {state, actions} = useContextGame();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <gameContext.Provider
        value={{
          ...state,
          ...actions,
          ...context,
        }}>
        {children}
      </gameContext.Provider>
    </ApplicationProvider>
  );
};

const customRender = (
  ui: React.ReactElement,
  options?: RenderOptions & Pick<AllTheProvidersProps, 'context'>,
) =>
  render(ui, {
    wrapper: props => <AllTheProviders {...props} context={options?.context} />,
    ...options,
  });

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
