/* eslint-disable*/
import { dbService } from "fBase";
import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";

const Home = () => {
  const [tweet, setTweet] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    const docRef = await addDoc(collection(dbService, "tweets"), {
      tweet,
      createdAt: Date.now(),
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
    </div>
  );
};

export default Home;
