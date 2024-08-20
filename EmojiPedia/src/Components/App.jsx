import React from "react";
import emojis from "../emojiPedia"
import Emoji from "./Emoji";


function App() {
  return (<div>
    <h1>
      <span>emojipedia</span>
    </h1>
    {emojis.map((emoji) => <Emoji
      key={emoji.id}
      emoji={emoji.emoji}
      name={emoji.name}
      meaning={emoji.meaning}
    />
    )}
  </div>

  )
}

export default App;
