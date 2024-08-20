import React from "react";
import emojis from "../emojiPedia"
import Emoji from "./Emoji";

function createEmoji(emoji) {
  return (
    <Emoji
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}

    />
  )
}

function App() {
  return (<div>
    <h1>
      <span>emojipedia</span>
    </h1>
    {emojis.map(createEmoji)}
  </div>

  )
}

export default App;
