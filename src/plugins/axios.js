import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTdkYTA4MmRiMWFhZjFhM2Q1NDNlZjg4ODJlZGViNiIsIm5iZiI6MTc2MDgyNTQwNi45NDcsInN1YiI6IjY4ZjQxMDNlMjk3MDc3OTAwNDc1MWQ1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zXVC5_XwVZ3W6Q5OG7oqIbinMuPqqwqmEmP2GctdXmg`,
  },
});

export default api;