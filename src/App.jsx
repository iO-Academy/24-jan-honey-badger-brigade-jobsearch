import { JobContextProvider } from './context';

function App() {
  return (
    <>
      <JobContextProvider>
        <div>Home</div>
      </JobContextProvider>
    </>
  );
}

export default App;
