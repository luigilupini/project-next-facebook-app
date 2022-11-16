import { useRef, useState } from "react";
import Image from "next/image";

import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";

import { useSession } from "next-auth/client";

import { db, storage } from "../firebase";
import firebase from "firebase";

export default function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const mediaRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return; // exit return logic
    db.collection("posts")
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          // https://firebase.google.com/docs/storage:
          // Create a reference of the needed path into our storage/bucket API.
          // Upload image into a decoded format `putString` into our bucket:
          const uploadTask = storage
            .ref(`posts/${doc.id}`)
            // Matches our `reader` data below with our uploader task here:
            .putString(imageToPost, "data_url");

          removeMedia();
          // We have an `on` listener for storage events on this task.
          // Trigger callback to fetch storage bucket img for `postImage` field:
          // Events have three callback functions known (next, error, complete).
          uploadTask.on(
            "state_change",
            null, // We can null the next callback.
            (error) => console.log(error),
            // We `on` complete append the storage bucket image matched by id to
            // our posts collection in firestore with a `postImage` url.
            () => {
              storage
                .ref(`posts/${doc.id}`)
                // We download image from posts collection database:
                .getDownloadURL()
                .then((url) => {
                  db.collection("posts")
                    .doc(doc.id)
                    // Important to merge this `db.collection` task with above!
                    .set({ postImage: url }, { merge: true });
                });
            }
          );
        }
      });
    inputRef.current.value = ""; // Clear/set DOM node to empty string.
  };
  const sendMedia = (e) => {
    /* https://developer.mozilla.org/en-US/docs/Web/API/FileReader: 
    The `FileReader` object lets web applications asynchronously reads contents
    of files (or raw data buffers) stored on the user's computer, using File or
    Blob objects to specify the file or data to read. File objects may obtained
    from a `FileList` object returned as a result of selecting files using the
    `<input>` element as type `file`. `FileReader` can only access the contents
    of files a user has explicitly selected, either via a `<input>` element or
    by drag and drop. It cannot read a file by pathname from the user's system.
    To read files on a client system by pathname, use (File System Access API).
    To read server-side files, use standard Ajax, with CORS granted. */
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    // `onload` fired when a read has completed successfully.
    reader.onload = (readerEvent) => {
      // FileReader.result is read only on the file's contents. This property is
      // only valid after the read operation is "complete" and the format of the
      // data depends on which methods was used to initiate read operation.
      setImageToPost(readerEvent.target.result);
    };
  };
  const removeMedia = () => {
    setImageToPost(null);
  };
  // console.log(imageToPost);
  return (
    <div className="mt-6 rounded-2xl bg-white p-2 font-medium text-gray-500 shadow-md">
      <div className="flex items-center space-x-4 p-4">
        <Image
          className="rounded-full"
          src={session.user.image}
          width={40}
          height={40}
          alt="profile"
        />
        <form className="flex flex-1">
          <input
            ref={inputRef}
            className="h-12 flex-grow rounded-full bg-gray-100 px-5 text-sm font-normal placeholder-gray-400 focus:outline-none"
            type="text"
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type="submit" onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeMedia}
            className="flex transform cursor-pointer flex-col filter transition duration-150 hover:scale-105 hover:brightness-110"
          >
            <div className="group relative">
              <img
                src={imageToPost}
                alt=""
                className="h-10 rounded object-cover"
              />
              <p className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-sm bg-red-200 p-1 text-center text-xs text-red-600 opacity-0 group-hover:opacity-80">
                Remove
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-evenly border-t p-3">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live video</p>
        </div>
        <div onClick={() => mediaRef.current.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base">Photo/video</p>
          <input ref={mediaRef} type="file" hidden onChange={sendMedia} />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/activity</p>
        </div>
      </div>
    </div>
  );
}
