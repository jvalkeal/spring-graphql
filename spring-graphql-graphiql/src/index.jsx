import React from 'react';
import { render } from 'react-dom';
import GraphiQL from 'graphiql';
import 'graphiql/graphiql.css';
import 'regenerator-runtime/runtime'
import { LOGO, PATH } from './config';

const Logo = () => <span>{LOGO}</span>;

GraphiQL.Logo = Logo;

const App = (props) => (
  <GraphiQL
    style={{ height: '100vh' }}
    headerEditorEnabled
    fetcher={async (graphQLParams, headers) => {
      const data = await fetch(
        props.path,
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

render(<App path={PATH} />, document.getElementById('root'));
