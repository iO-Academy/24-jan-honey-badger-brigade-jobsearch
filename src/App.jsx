import JobCard from './components/JobCard';
import { JobContext } from './context';

function App() {
  return (
    <>
      <JobContext.Provider>
        <div>Main</div>
        <JobCard />
      </JobContext.Provider>
    </>
  );
}

export default App;
