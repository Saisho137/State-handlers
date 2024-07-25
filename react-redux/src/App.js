import Auth from "./components/Auth";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  return (
    <article style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Redux Example</h1>
      <section>
        <h2 style={{ textAlign: 'center' }}>Authentication:</h2>
        <Auth />
      </section>
      <section>
        <h2 style={{ textAlign: 'center' }}>Todo Counter:</h2>
        <Counter />
      </section>
      <section>
        <h2 style={{ textAlign: 'center' }}>To do:</h2>
        <TodoList />
      </section>
    </article>
  );
}

export default App;
