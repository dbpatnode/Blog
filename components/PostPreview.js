import dayjs from "dayjs";
import timeSincePosted from "./TimeSincePosted";
import Link from "next/link";

const PostPreview = ({ posts }) => {
  return (
    <div className="card-container">
      {posts?.map((post) => {
        const { is_published, title, excerpt, id, created_at } = post;
        const formatedDate = dayjs(created_at).format("ddd MMMM D, YYYY");

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
                  <h5>Posted on {formatedDate}</h5>
                  <small>{timeSincePosted(created_at)} </small>
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
