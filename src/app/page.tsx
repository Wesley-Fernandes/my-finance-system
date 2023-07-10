
import Swap from "@modules/components/Navbar/Swap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {

  return (
    <div className="h-screen overflow-y-scroll bg-white">
      <section className="text-gray-600 body-font flex h-screen justify-center">
        <div className="container  mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center  p-2 mr-2 rounded">
            <h1 className="title-font max-[960px]:text-3xl mb-2  text-indigo-500 text-5xl font-extrabold">
              MY FINANCE
            </h1>
            <p className="mb-8 leading-relaxed">
              My Finance é um aplicativo inovador e abrangente de finanças
              pessoais projetado para ajudar os usuários a gerenciar suas
              finanças de forma eficiente e tomar decisões financeiras
              informadas. Com uma interface intuitiva e recursos poderosos, o My
              Finance oferece uma solução conveniente para controlar despesas,
              criar orçamentos, acompanhar investimentos e alcançar metas
              financeiras.
            </p>
            <div className="flex justify-center">
              <Link href={'/Register'} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Registrar-se
              </Link>
              <Link href={'/Login'} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Fazer login
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/3 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="card.png"
            />
          </div>
        </div>
  
      </section>

    </div>
  );
}
