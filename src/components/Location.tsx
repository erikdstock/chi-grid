import React from "react";

interface Props {
  location: Position;
}

export const Location: FC<Props> = ({ location }) => {
  return (
    <p>
      Your location is {location.coords.latitude}, {location.coords.longitude}
    </p>
  );
};
