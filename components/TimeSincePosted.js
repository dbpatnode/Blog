const timeSincePosted = (created_at) => {
  const date = Math.abs((new Date(created_at).getTime() / 1000).toFixed(0));

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

export default timeSincePosted;
