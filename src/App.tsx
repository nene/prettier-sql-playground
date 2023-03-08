import { SqlEditor } from "./SqlEditor";

export function App() {
  return (
    <div className="App">
      <SqlEditor value="SELECT * FROM my_table WHERE col > 10" />
      <SqlEditor value={"SELECT\n1,\n2,\n3,\n4"} />
    </div>
  )
}
