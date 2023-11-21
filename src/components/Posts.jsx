import React from 'react'
import './Posts.css'
import Post from './Post'

function Posts({ data }) {
    return (
      <div>
        <div className="divider">
          <p className="postb">
            &nbsp;&nbsp;&nbsp;134 Posts
          </p>
        </div>
        <div>
          {data.posts.map((post) => {
            return <Post key={post.id} post={post} username={data.username} />;
          })}
        </div>
      </div>
    );
}

export default Posts