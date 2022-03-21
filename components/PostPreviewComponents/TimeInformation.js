import dayjs from "dayjs";
import timeSincePosted from "../TimeSincePosted";

export default function TimeInformation({ created_at }) {
  const formatedDate = dayjs(created_at).format("ddd MMMM D, YYYY");
  // const timeSince = setIntereval(timeSincePosted(created_at), 1000);
  return (
    <div className="user-info">
      <h5>Posted on {formatedDate}</h5>
      <small>{timeSincePosted(created_at)}</small>
    </div>
  );
}
