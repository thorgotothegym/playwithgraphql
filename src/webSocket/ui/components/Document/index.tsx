import React from "react";
import Message from "../../../domain/entities/Document";

export const Document = ({
  DocumentID,
  DocumentTitle,
  Timestamp,
  UserID,
  UserName,
}: Message) => {
  return (
    <>
      <h1>
        <strong>{DocumentID}</strong>
      </h1>
      <p>{DocumentTitle}</p>
      <p>{Timestamp}</p>
      <p>{UserID}</p>
      <p>{UserName}</p>
    </>
  );
};
