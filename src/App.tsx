import React from 'react';
import SnippetNews from './components/SnippetNew/SnippetNew';
import { SAMPLE_SNIPPET } from './constants/sampleSnippet';

const App: React.FC = () => (
  <div style={{ padding: 24 }}>
    <SnippetNews data={SAMPLE_SNIPPET} />
  </div>
);

export default App;