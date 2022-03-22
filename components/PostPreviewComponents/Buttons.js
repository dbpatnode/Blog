import Button from "../Button";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { supabase } from "../../utils/supabaseClient";

export async function deletePost(id, router) {
  const { data, error } = await supabase.from("posts").delete().eq("id", id);
  return router.push("/Posts");
}

export default function Buttons({ id }) {
  const router = useRouter();
  return (
    <div className="card-buttons">
      <Button
        className="edit-icon icon-btn"
        handleClick={() => {
          /* this is where we'll add the edit*/
          console.log("this is where we'll add the edit");
        }}
        text={<FontAwesomeIcon icon={faPencilSquare} size="2x" />}
      />

      <Button
        className="trash-icon icon-btn"
        handleClick={() => {
          window.confirm("Are you sure you wish to delete this item?")
            ? deletePost(id, router)
            : "cancel";
        }}
        text={<FontAwesomeIcon icon={faTrashAlt} size="2x" />}
      />
    </div>
  );
}
