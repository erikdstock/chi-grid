export const Location = ({ location }) => {
  return (
    <p>
      Your location is {location.coords.latitude}, {location.coords.longitude}
    </p>
  );
};
