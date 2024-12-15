import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        placeholder="Поиск..."
        value={filter.query}
        onChange={(e) => setFilter({...filter, query: e.target.value})}
      />

      <MySelect
        defaultValue="Сортировка"
        sortPosts={selectedSort => setFilter({...filter, sort: selectedSort})}
        value={filter.sort}
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' },
        ]}
      />
    </div>
  )
};

export default PostFilter;
