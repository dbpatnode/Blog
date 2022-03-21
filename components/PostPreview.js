import dayjs from "dayjs";
import { useRouter } from "next/router";
import timeSincePosted from "./TimeSincePosted";
import Link from "next/link";
import PostPreviewButtons from "./PostPreviewComponents/Buttons";
import TimeInformation from "./PostPreviewComponents/TimeInformation";
const PostPreview = ({ posts }) => {
  const router = useRouter();
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
                <PostPreviewButtons id={id} />
                <TimeInformation created_at={created_at} />
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default PostPreview;
