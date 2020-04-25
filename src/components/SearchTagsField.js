import React from "react";
import { Card, CardContent, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { getPublicPhotosByTags } from "../state_management/api";

let SearchTagsField = ({ setTags }) => (
  <Card className="w-1/2">
    <CardContent>
      <TextField
        label="Search by tags"
        variant="outlined"
        placeholder="example: cat,apple"
        className="w-full"
        onChange={(e) => setTags(e.target.value)}
      />
    </CardContent>
  </Card>
);

const mapDispatchToProps = { setTags: getPublicPhotosByTags };

SearchTagsField = connect(null, mapDispatchToProps)(SearchTagsField);

export default SearchTagsField;
