import React from 'react';
import { Link } from 'react-router-dom';

export const Card = () => (
  <div className="card mt-10">
    <img src={''} alt={''} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">React JS</h5>
      <Link to={'/profile/' + 'react'} className="btn btn-dark">
        Open
      </Link>
    </div>
  </div>
);
