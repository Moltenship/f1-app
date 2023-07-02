import { RaceService } from '@/api/services/race';

const Home = async() => {
  const data = await RaceService.getUpcomingRace();
  return (
    <div>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Home;
