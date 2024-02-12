import { JobContext } from './context';

function App() {
  return (
    <>
      <JobContext.Provider>
        <div>Main</div>
      </JobContext.Provider>
    </>
  );
}

export default App;
