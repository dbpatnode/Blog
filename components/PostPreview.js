import dayjs from "dayjs";
import { useEffect } from "react";
import Link from "next/link";

const PostPreview = ({ posts }) => {
  return (
    <div className="card-container">
      {posts?.map((post) => {
        const { is_published, title, excerpt, id, created_at } = post;

        const formatedDate = dayjs(created_at).format("ddd MMMM D, YYYY");

        const timeSincePosted = () => {
          const date = Math.abs(
            (new Date(created_at).getTime() / 1000).toFixed(0)
          );

          const currentDate = (new Date().getTime() / 1000).toFixed(0);

          let difference = currentDate - date;

          let days = Math.floor(difference / 86400);
          let hours = Math.floor(difference / 3600) % 24;
          // let minutes = Math.floor(difference / 60) % 60;
          // let seconds = difference % 60;
          if (days <= 0) {
            return `${hours} hours ago`;
          } else if (days == 1) {
            return `${days} day and ${hours} hours ago`;
          } else if (days == 1 && hours == 1) {
            return `${days} day and ${hours} hour ago`;
          } else {
            return `${days} days and ${hours} hours ago`;
          }
        };

        return (
          is_published && (
            <div key={id} className="card">
              <div className="card-header">
                <img src="./images/no-image.jpeg" alt="no-image-found" />
              </div>
              <div className="card-body">
                <span className="tag tag-teal">Technology</span>
                <h4>
                  <Link href={`/Posts/${id}`}>{title}</Link>
                </h4>
                <p>{excerpt}</p>
                <div className="user-info">
                  <h5>{formatedDate}</h5>
                  <small>Posted {timeSincePosted()} </small>
                </div>
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default PostPreview;
