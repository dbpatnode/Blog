import Link from "next/link";
import PostPreviewButtons from "./PostPreviewComponents/Buttons";
import TimeInformation from "./PostPreviewComponents/TimeInformation";
import parse from "html-react-parser";
const PostPreview = ({ posts }) => {
  return (
    <div className="card-container">
      {posts?.map((post) => {
        const { is_published, title, excerpt, id, created_at, content } = post;

        // const parsedContent = parse(content);

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
