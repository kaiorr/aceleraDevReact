import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  return (
    <React.Fragment>
      <section className="stories">
        <div className="container">
        </div>
      </section>

      {Story && (
        <Story />
        )}
    </React.Fragment>
  );
};

export default Stories;
