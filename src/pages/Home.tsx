import { useSelector } from 'react-redux'
import Forecast from '../components/Forecast/Forecast'
import Header from '../components/Header/Header'
import Search from '../components/Search/Search'
import Spinner from '../components/ui/Spinner/Spinner'
import CurrentWeather from '../components/CurrentWeather/CurrentWeather'
import { AppStore } from '../store/store'

const Home = () => {
  const { loading } = useSelector((state: AppStore) => ({
    loading: state.app.isLoading,
  }))

  return (
    <>
      {loading && <Spinner />}
      <Header />
      <Search />
      <CurrentWeather />
      <Forecast />
    </>
  )
}

export default Home
