import { RaceService } from '@/api/services/race';

const Home = async() => {
  const data = await RaceService.getRacesForCurrentSeason();
  return (
    <div>
      <h1>
        {data.MRData.RaceTable.Races[0].season}
      </h1>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
};

export default Home;
