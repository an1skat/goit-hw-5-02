import Greeting from "./Greeting";
import Message from "./Message";
import Button from "./Button";

function App() {
  return (
    <div>
      <Greeting name="Іван" />
      <Message text="Це довільне повідомлення для користувача." />
      <Button onClick={() => console.log("Кнопка була натиснута!")} />
    </div>
  );
}

export default App;
