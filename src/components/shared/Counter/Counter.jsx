const Counter = ({ title, number }) => {
  return (
    <div>
      <h3 className="text-secondery text-4xl font-bold">{number}</h3>
      <p className="text-light-gray2 text-base font-semibold">{title}</p>
    </div>
  );
};

export default Counter;
