import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { supabase } from "../utils/supabaseClient";
import timeSincePosted from "./TimeSincePosted";
import Link from "next/link";
import Button from "./Button";

export async function deletePost(id, router) {
  const { data, error } = await supabase.from("posts").delete().eq("id", id);
  return router.push("/Posts");
}

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
                <div class="card-buttons">
                  <Button
                    className="edit-icon icon-btn"
                    handleClick={() => {
                      /* this is where we'll add the edit*/ console.log(
                        "this is where we'll add the edit"
                      );
                    }}
                    text={<FontAwesomeIcon icon={faPencilSquare} size="2x" />}
                  />

                  <Button
                    className="trash-icon icon-btn"
                    handleClick={() => {
                      window.confirm(
                        "Are you sure you wish to delete this item?"
                      )
                        ? deletePost(id, router)
                        : "cancel";
                    }}
                    text={<FontAwesomeIcon icon={faTrashAlt} size="2x" />}
                  />
                </div>
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
