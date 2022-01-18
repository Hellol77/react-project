/* eslint-disable*/
import Tweet from "components/Tweet";
import { dbService } from "fBase";
import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);
  const getTweets = async () => {
    const dbTweets = await getDocs(collection(dbService, "tweets"));
    dbTweets.forEach((document) => {
      const tweetObject = {
        ...document.data(),
        id: document.id,
      };
      setTweets((prev) => [tweetObject, ...prev]);
    });
  };
  useEffect(() => {
    onSnapshot(
      query(collection(dbService, "tweets"), orderBy("createdAt", "desc")),
      (snapshot) => {
        const tweetArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTweets(tweetArray);
      }
    );
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const docRef = await addDoc(collection(dbService, "tweets"), {
      text: tweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={tweet}
          onChange={onChange}
          type="text"
          placeholder="what's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Tweet" />
      </form>
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweetObj={tweet} isOwner={tweet.creatorId===userObj.uid}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
