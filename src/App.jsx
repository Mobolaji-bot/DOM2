import Count from "./components/Count"
import CountEffect from "./components/CountEffect"
import Counter from "./components/Counter"
import Effect from "./components/Effect"
import Friends from "./components/Friends"
import Greetings from "./components/Greetings"
import Moves from "./components/Moves"
import Movie from "./components/movie"
import Numbers from "./components/Numbers"
import Profile from "./components/Profile"
import ShoppingList from "./components/ShoppingList"
import TodoList from "./components/TodoList"
import UseEffects from "./components/UseEffects"
import UserStatus from "./components/UserStatus"
import UseState from "./components/UseState"
import Weather from "./components/Weather"
import New from "./components/New"
import Book from "./components/Book"




const App = () => {
  return (
    <div>
      <Weather />
      <UserStatus loggedIn={true} IsAdmin={false} />
      <Greetings  />
      <Count />
      <Friends />
      <Movie />
      <Moves />
      <UseState />
      <Numbers />
      <Counter />
      <TodoList />
      <Profile />
      <ShoppingList />
      <Effect />
      <UseEffects />
      <CountEffect />
      <New />
     <Book />
    </div>
  )
}

export default App
