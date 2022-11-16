import Image from "next/image";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import moment from "moment/moment";
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/outline";

function Post({ key, name, message, email, timestamp, image, postImage }) {
  let date = timestamp?.toDate();
  return (
    <div className="flex flex-col drop-shadow">
      {/* head of post */}
      <div className="mt-5 rounded-t-2xl bg-white p-5 shadow-sm">
        <div className="flex items-center space-x-2">
          <img src={image} alt="user" className="h-10 w-10 rounded-full" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-gray-400" style={{ fontSize: "11px" }}>
              {moment(date).startOf("day").fromNow()}
            </p>
          </div>
        </div>
        <p className="pt-4 text-sm lg:text-base">{message}</p>
      </div>
      {postImage && (
        <div className="relative h-56 overflow-hidden bg-white md:h-64 lg:h-80">
          <Image src={postImage} fill alt="post" className="object-cover" />
        </div>
      )}
      {/* footer of post */}
      <div className="flex items-center justify-between rounded-b-2xl border-t bg-white text-gray-400">
        <div className="inputIcon rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-4" />
          <p className="text-xs sm:text-base">Link</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-4" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-4" />
          <p className="text-xs sm:text-base">Link</p>
        </div>
      </div>
    </div>
  );
}

export default function Posts() {
  const [value, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );
  if (loading) return <h1>Loading...</h1>;
  if (error) return console.log(error);
  else
    return value.docs.map((post) => (
      <Post
        key={post.id}
        name={post.data().name}
        message={post.data().message}
        email={post.data().email}
        timestamp={post.data().timestamp}
        image={post.data().image}
        postImage={post.data().postImage}
      />
    ));
}
