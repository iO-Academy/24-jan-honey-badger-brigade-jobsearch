import { JobContextProvider } from './context';

function App() {
  return (
    <>
      <JobContextProvider>
        <div></div>
      </JobContextProvider>
    </>
  );
}

export default App;
