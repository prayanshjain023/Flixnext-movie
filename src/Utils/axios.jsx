import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZDNmODZlODQ2ZGQ3ZmQzOTc0NzE5YTYyZTkzNzdmYiIsInN1YiI6IjY2MDAxODA3NjJmMzM1MDE3ZDUyNmFiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MawWAMxpL23mXhxxuzH3d8DaNvB0_EjwhCpE_XrqtBk'
    },
  });

export default instance