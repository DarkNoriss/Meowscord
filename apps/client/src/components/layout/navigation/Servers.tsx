import Server from './Server';

const Servers = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => (
        <Server key={index} />
      ))}
    </>
  );
};

export default Servers;
