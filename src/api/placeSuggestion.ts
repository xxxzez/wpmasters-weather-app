import { ReceivedCity } from './types'

const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'
const GEO_API_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4f0dcce84bmshac9e329bd55fd14p17ec6fjsnff18c2e61917',
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  },
}

export const fetchCities = async (input: string) => {
  const url = `${GEO_API_URL}/cities?minPopulation=10000&namePrefix=${input}`
  const res = await (await fetch(url, GEO_API_OPTIONS)).json()
  return res.data
    .filter((item: ReceivedCity) => item.type === 'CITY')
    .map((i: ReceivedCity) => {
      return i.city + ', ' + i.country
    })
}
