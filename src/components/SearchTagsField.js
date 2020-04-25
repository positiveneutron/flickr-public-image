import React from "react";
import { Card, CardContent, TextField } from "@material-ui/core";

const SearchTagsField = () => (
  <Card className="w-1/2">
    <CardContent>
      <TextField
        label="Search by tags"
        variant="outlined"
        placeholder="example: company, AIA"
        className="w-full"
      />
    </CardContent>
  </Card>
);

export default SearchTagsField;
