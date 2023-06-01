import Link from "next/link";
import React from "react";
import Image from "next/image";

export const FormL = () => {
  return (
    <>
      <div className="bg-azulescuro flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="/image/logo.png"
            alt="Gaslive Logo"
            width={75}
            height={60}
          />
          </div>
          <div>
          <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-slate-50">
            Portal de Monitoramento
          </h2>
          <p className="mt-10 text-center text-xl font-bold leading-9 tracking-tight text-slate-50">
            Gerencie dados e acesse relatórios de usuários e clientes no app da
            SleepUp
          </p>
          </div>
        

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-slate-300 rounded-lg">
          <form className="space-y-6 p-8" action="#" method="POST">
            <h1 className="text-center text-2xl font-bold leading-9 tracking-tight text-sky-700">
              LOGIN
            </h1>
            <div>
              <div className="mt-2">
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  placeholder="Senha"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-slate-950">
            Nâo Possui Cadastro?{" "}
            <Link
              href="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Clique Aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
