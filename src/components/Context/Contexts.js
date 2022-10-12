import { ApiProvider } from './ApiContext';

import { HomeProvider } from './HomeContext';

function ContextsProvider({ children }) {
    return (
        <HomeProvider>
            <ApiProvider>{children}</ApiProvider>
        </HomeProvider>
    );
}

export { ContextsProvider };
