import React from 'react';
import { render } from 'react-dom';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import 'regenerator-runtime/runtime'

const Logo = () => <span>{'My Corp'}</span>;

GraphiQL.Logo = Logo;

const App = () => (
  <GraphiQL
    style={{ height: '100vh' }}
    headerEditorEnabled
    fetcher={async (graphQLParams, headers) => {
      const data = await fetch(
        'http://localhost:8080/graphql',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers,
          },
          body: JSON.stringify(graphQLParams),
          credentials: 'same-origin',
        },
      );
      return data.json().catch(() => data.text());
    }}
  />
);

render(<App />, document.getElementById('root'));
