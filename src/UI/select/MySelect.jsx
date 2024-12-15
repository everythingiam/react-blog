const MySelect = ({ options, defaultValue, value, sortPosts }) => {
  return (
    <select onChange={e => sortPosts(e.target.value)} value={value}>
      <option disabled value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  );
};

export default MySelect;
