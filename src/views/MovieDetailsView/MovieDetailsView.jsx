import React, { Component } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { NavLink, Route, Switch } from 'react-router-dom';
import { articleMapper } from '../../assets/mapper';
import * as API from '../../services/server';
import Article from '../../common/Article/Article';
import Cast from '../../common/Cast/Cast';
import Reviews from '../../common/Reviews/Reviews';
import routes from '../../routes/routes';
import styles from './MovieDetailsView.module.css';

const getIdFromProps = props => props.match.params.movieId;

class MovieDetailsView extends Component {
  state = { prevPage: null };

  static propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location.isRequired,
    match: ReactRouterPropTypes.match.isRequired,
  };

  componentDidMount() {
    const { location } = this.props;
    const id = getIdFromProps(this.props);
    API.getArticlesById(id).then(({ data }) =>
      this.setState({ article: articleMapper(data) }),
    );
    if (location.state && location.state.from) {
      this.setState({
        prevPage: location.state.from,
      });
    }
  }

  handleGoBack = () => {
    const { history } = this.props;
    const { prevPage } = this.state;
    if (prevPage) {
      history.push({ ...prevPage });
      return;
    }
    history.push('/');
  };

  render() {
    const { article } = this.state;
    const { match } = this.props;
    const id = getIdFromProps(this.props);
    return (
      <>
        {article && <Article onGoBack={this.handleGoBack} {...article} />}
        <ul className={styles.detailsList}>
          <li className={styles.detailsItem}>
            <NavLink
              to={{
                pathname: `${match.url}${routes.CAST.path}`,
              }}
              activeClassName={styles.detailsLinkActive}
              className={styles.detailsLink}
            >
              Cast
            </NavLink>
          </li>
          <li className={styles.detailsItem}>
            <NavLink
              to={{
                pathname: `${match.url}${routes.REVIEW.path}`,
              }}
              activeClassName={styles.detailsLinkActive}
              className={styles.detailsLink}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route
            path={`${match.url}${routes.CAST.path}`}
            render={props => <Cast {...props} id={id} />}
          />
          <Route
            path={`${match.url}${routes.REVIEW.path}`}
            render={props => <Reviews {...props} id={id} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsView;
