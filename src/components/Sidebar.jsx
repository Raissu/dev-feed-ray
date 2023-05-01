import frame from "../assets/Frame.svg";

export function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className="flex flex-col items-center">
        <strong>Raysson Mendes</strong>
        <span className="text-gray-400">Fullstack Dev</span>
      </div>

      <footer className="mt-6 py-6 px-8 pb-8 border-t-[1px] border-solid border-gray-500 text-green-feed">
        <button className="flex justify-center items-center w-full h-[50px] py-0 px-6 font-bold bg-transparent border-x-[1px] border-y-[1px] border-green-feed rounded-lg">
          <img src={frame} alt="editor" />
          <strong>Editar seu perfil</strong>
        </button>
      </footer>
    </aside>
  );
}
