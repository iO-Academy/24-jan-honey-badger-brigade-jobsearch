import { JobContext, JobContextProvider } from './context';

function App() {
  return (
    <>
      <JobContextProvider>
        <div>Main</div>
      </JobContextProvider>
    </>
  );
}

export default App;
