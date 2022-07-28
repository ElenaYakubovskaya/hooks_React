import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import { GithubContext } from '../context/github/githubContext';
import { Link } from 'react-router-dom';

export const Profile = () => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlname = useParams().name;

  useEffect(() => {
    getUser(urlname);
    getRepos(urlname);
  }, []);

  if (loading) {
    return <Loader />;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
  } = user;

  return (
    <>
      <Link to="/" className="btn bnt-link">
        {' '}
        Go Home
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-crnter">
              <img src={avatar_url} alt={name} style={{ width: '150px' }} />
              <h1>{name}</h1>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark"
              >
                Open Profile
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Company: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div style={{ color: 'black' }}>Followers: {followers}</div>
              <div style={{ color: 'black' }}>Following: {following}</div>
              <div style={{ color: 'black' }}>Repositories: {public_repos}</div>
              <div style={{ color: 'black' }}>Gits: {public_gists}</div>
            </div>
          </div>
        </div>
      </div>
      {repos.join()}
    </>
  );
};
