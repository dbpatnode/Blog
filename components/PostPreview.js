import Link from "next/link";

const PostPreview = ({ posts }) => {
  return (
    <div className="Posts">
      {posts?.map((post) => {
        const { is_published, title, excerpt, id } = post;

        return (
          is_published && (
            // <div className="PostPreview" key={id}>
            //   <h2>
            //     <Link href={`/Posts/${id}`}>{title}</Link>
            //   </h2>
            //   <p> {excerpt} </p>
            // </div>

            <div class="container">
              <div class="card">
                <div class="card-header">
                  <img
                    src="https://c0.wallpaperflare.com/preview/483/210/436/car-green-4x4-jeep.jpg"
                    alt="no-image-found"
                  />
                </div>
                <div class="card-body">
                  <span class="tag tag-teal">Technology</span>
                  <h4>
                    <Link href={`/Posts/${id}`}>{title}</Link>
                  </h4>
                  <p>{excerpt}</p>
                  <div class="user-info">
                    <h5>July Dec</h5>
                    <small>2h ago.</small>
                  </div>
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
