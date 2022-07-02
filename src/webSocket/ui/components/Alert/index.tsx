import React, { useState } from "react";

interface AlertProps {
  counter: number;
}

export const Alert = ({ counter }: AlertProps) => {
  return (
    <>
      <div>
        bell<span>{counter <= 0 ? null : counter}</span>
      </div>
      {counter <= 0 ? null : (
        <div>
          <p>New documment added</p>
        </div>
      )}
    </>
  );
};
