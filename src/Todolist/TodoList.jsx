export const TodoList = () => {
  const TodoList =["HW","Study React", "Go Shopping", "Clean the house", "Exercise"]; 
  return (
    <ul>
      {TodoList.map((todo) => (
        <li >
          {todo}
        </li>
      ))}
    </ul>
  );
};