import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className="max-w-[70rem] mx-auto my-8 grid grid-cols-[256px,1fr] items-start gap-8">
        <Sidebar />

        <main>
          <Post
            author="Raysson Mendes"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non exercitationem enim veritatis dicta, quidem voluptates vero adipisci, inventore atque perspiciatis consequuntur assumenda nam accusantium sint corporis earum quisquam quo facilis."
          />

          <Post
            author="Raysson Mendes"
            content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non exercitationem enim veritatis dicta, quidem voluptates vero adipisci, inventore atque perspiciatis consequuntur assumenda nam accusantium sint corporis earum quisquam quo facilis."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
