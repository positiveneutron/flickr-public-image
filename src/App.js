import React from "react";
import { Typography } from "@material-ui/core";
import SearchTagsField from "./components/SearchTagsField";
import PublicImageList from "./components/PublicImageList";

function App() {
  return (
    <div className="flex flex-col items-center my-16">
      <Typography variant="h3" className="text-red-500 font-bold">
        Flickr Public Images App 🖼
      </Typography>
      <Typography variant="subtitle1">
        Developed by{" "}
        <a
          href="https://github.com/positiveneutron"
          className="text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
        >
          ilham
        </a>{" "}
        with ❤️
      </Typography>
      <SearchTagsField />
      <PublicImageList />
    </div>
  );
}

export default App;
