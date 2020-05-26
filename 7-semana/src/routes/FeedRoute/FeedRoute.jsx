import React, { useState, useEffect } from 'react';

import Stories from '../../containers/Stories';
import Loading from '../../components/Loading';

import Posts from '../../containers/Posts';

import './FeedRoute.scss';

const FeedRoute = () => {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])
  const [usersFind, setUsersFind] = useState([])

  const getUserPostId = (postUserId) =>
    users.find((user) => postUserId === user.id)

    useEffect(() => {
      fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
    }, [])

    useEffect(() =>{
      if (usersFind === users.length) {
        return
      }

      fetch(
        `https://5e7d0266a917d70016684219.mockapi.io/api/v1/users/${users[usersFind].id}/posts`
      )
      .then((response) => response.json())
      .then((data) => {
        setPosts([...posts, ...data])
        setUsersFind(usersFind + 1)
      })
    }, [users, usersFind])

    useEffect(() => {
      fetch("https://5e7d0266a917d70016684219.mockapi.io/api/v1/stories")
      .then((response) => response.json())
      .then((data) => {
        setStories(data)
      })
    }, [users])

  return (
    <div data-testid="feed-route">
      {users.length > 0 && stories.length > 0 && (
        <Stories stories={stories} getUserHandler={getUserPostId} />
      )}

      {users.length !== usersFind ? (
        <Loading />
      ) : (
        <Posts posts={posts} getUserHandler={getUserPostId} />
      )}
    </div>
  );
};

export default FeedRoute;
