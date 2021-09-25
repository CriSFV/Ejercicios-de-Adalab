const callToApi = (searchSerieNamePepino) => {
  // importante  return para el fech
  return fetch(`https://api.tvmaze.com/search/shows?q=${searchSerieNamePepino}`)
    .then((response) => response.json())
    .then((data) => {
      const dataeachSerie = data.map((dat) => {
        return {
          name: dat.show.name,
          id: dat.show.id,
        };
      });
      return dataeachSerie;
    });
};
export default callToApi;
