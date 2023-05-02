import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className="bg-gray-800 rounded-lg overflow-hidden">
      <img
        className="w-full h-[72px] object-cover"
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className="flex flex-col items-center">
        <img
          className="box-border w-12 h-12 border-4 mt-[-1.5rem]  border-solid outline-2 outline-none outline-black border-green-feed rounded-lg"
          src="https://github.com/raissu.png"
        />

        <strong className="mt-4 leading-none">Raysson Mendes</strong>
        <span className="text-gray-400 mt-1 text-[0.875rem]">
          Fullstack Dev
        </span>
      </div>

      <footer className="mt-6 py-6 px-8 pb-8 border-t-[1px] border-solid border-gray-500 text-green-feed">
        <button className="hover:text-white transtion duration-500 hover:bg-green-feed gap-[0.5rem] flex justify-center items-center w-full h-[50px] py-0 px-6 font-bold bg-transparent border-x-[1px] border-y-[1px] border-green-feed rounded-lg">
          <PencilLine />
          <p>Editar seu perfil</p>
        </button>
      </footer>
    </aside>
  );
}
