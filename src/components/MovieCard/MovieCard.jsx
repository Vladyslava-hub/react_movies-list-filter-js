import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3">
        <img
          src={movie.imgUrl || 'https://via.placeholder.com/300x225'}
          alt={`${movie.title} poster`}
        />
      </figure>
    </div>

    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              src="images/imdb-logo.jpeg"
              alt="IMDB logo"
              // eslint-disable-next-line no-return-assign, no-param-reassign
              onError={e => (e.target.src = 'https://via.placeholder.com/48')}
            />
          </figure>
        </div>

        <div className="media-content">
          <p className="title is-6">{movie.title || 'Untitled'}</p>
        </div>
      </div>

      <div className="content">
        {movie.description || 'No description available.'}
        <br />
        <a
          href={movie.imdbUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on IMDB
        </a>
      </div>
    </div>
  </div>
);
