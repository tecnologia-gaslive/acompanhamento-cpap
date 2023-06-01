"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const target = e.currentTarget;

  const razaosocial = target.elements.namedItem("razaosocial") as HTMLInputElement;
  const cnpj = target.elements.namedItem("cnpj") as HTMLInputElement;
  const telefone = target.elements.namedItem("telephone") as HTMLInputElement;
  const email = target.elements.namedItem("email") as HTMLInputElement;
  const password = target.elements.namedItem("senha") as HTMLInputElement;

  const data = {
    razaosocial: razaosocial.value,
    cnpj: cnpj.value,
    telefone: telefone.value,
    email: email.value,
    senha: password.value,
  };
  try {
    const response = await fetch("/api/register-me", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
    }
    const responseData = await response.json();
    console.log(responseData);
  } catch (error: any) {
    console.log("There was an error" + error.message);
  }
  console.log(data);
}

export const FormR = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
              className="mx-auto h-10 w-auto"
              src="/image/logo-gaslive-escuro.svg"
              alt="Gaslive Logo"
              width={50}
              height={50}
            / > 
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-indigo-950">
            CADASTRO
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div>
              <div className="mt-2">
                <input
                  placeholder="Razão Social"
                  id="razaoSocial"
                  name="razaosocial"
                  type="text"
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  placeholder="CNPJ"
                  id="cnpj"
                  name="cnpj"
                  type="text"
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  placeholder="Telefone (DDD + Numero)"
                  id="telefone"
                  name="telephone"
                  type="tel"
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  autoComplete=""
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Senha"
                  id="senha"
                  name="senha"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <div className="text-sm"></div>
              </div>
              <div className="mt-2">
                <input
                  placeholder="Digite sua Senha Novamente"
                  id="senharesc"
                  name="Senharesc"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                CADASTRE-SE
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Ja possui Cadastro?{" "}
            <Link
              href="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Clique aqui
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
