const apiImgPath = 'https://image.tmdb.org/t/p/w400/';
const emptyBackdrop =
  'https://library.kissclipart.com/20180906/evw/kissclipart-video-camera-with-tripod-png-clipart-photographic-5f3c9c69f7c20fef.png';

export const articleMapper = item => {
  const {
    poster_path: posterPath,
    title,
    popularity: userScore,
    overview,
    genres,
    id,
  } = item;
  return {
    posterPath: posterPath ? apiImgPath + posterPath : emptyBackdrop,
    title,
    userScore,
    overview,
    genres: genres.map(({ name }) => name).join('  '),
    id,
  };
};

export const listMapper = items => {
  return items.map(({ id, title, name, backdrop_path: backdropPath }) => ({
    id,
    title,
    name,
    backdropPath: backdropPath ? apiImgPath + backdropPath : emptyBackdrop,
  }));
};

export const castMapper = items => {
  const emptyProfile =
    'https://stempel.fiu.edu/wp-content/uploads/sites/75/2017/12/profile-empty.png';
  return items.map(({ id, profile_path: profilePath, name, character }) => ({
    id,
    profilePath: profilePath ? apiImgPath + profilePath : emptyProfile,
    name,
    character,
  }));
};

export const reviewsMapper = items => {
  return items.map(({ id, author, content }) => ({
    id,
    author,
    content: content.length > 700 ? `${content.slice(0, 500)}...` : content,
  }));
};
