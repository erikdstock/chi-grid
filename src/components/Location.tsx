interface Props {
  location: Position;
}

export const Location: React.FC<Props> = ({ location }) => {
  return (
    <p>
      Your location is {location.coords.latitude}, {location.coords.longitude}
    </p>
  );
};
