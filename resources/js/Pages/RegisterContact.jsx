import React from "react";
import { Link, useForm } from "@inertiajs/inertia-react";
import InputMask from 'react-input-mask';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function RegisterContact({ countries = [], auth }) {
    // Adicionar verificação para garantir que countries[0] existe
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        sex: "Masculino",
        birth: '',
        phone: '',
        country: countries.length > 0 ? countries[0].name : '', // Verificação
    });

    const sexOption = ["Masculino", "Feminino", "Outro"];

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cadastrar contato</h2>}
        >
            <Head title="Cadastrar contato" />

            <div className="flex justify-center mt-6">
                <form className={"w-3/4"} onSubmit={submit}>
                    <div>
                        <div className="pb-12">
                            <h2 className="text-lg font-semibold leading-7 text-gray-900">Cadastrar novo contato</h2>

                            <div className="mt-6">
                                {/* Nome */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                                        Nome do contato
                                    </label>
                                    <div className="sm:col-span-4">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                            onChange={onHandleChange}
                                            value={data.name}
                                        />
                                    </div>
                                    <p className={'text-sm text-red-600'}>{errors.name}</p>
                                </div>

                                {/* Email */}
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                                        Email do contato
                                    </label>
                                    <div className="sm:col-span-4">
                                        <input
                                            type="text"
                                            name="email"
                                            id="email"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                            onChange={onHandleChange}
                                            value={data.email}
                                        />
                                    </div>
                                    <p className={'text-sm text-red-600'}>{errors.email}</p>
                                </div>

                                {/* Sexo */}
                                <div className="sm:col-span-3 w-full">
                                    <label htmlFor="sex" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                                        Sexo do contato
                                    </label>
                                    <div className="">
                                        <select
                                            id="sex"
                                            name="sex"
                                            autoComplete="sex"
                                            onChange={onHandleChange}
                                            value={data.sex}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 pr-2"
                                        >
                                            {sexOption.map((opt, index) => (
                                                <option key={index} value={opt}>{opt}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <p className={'text-sm text-red-600'}>{errors.sex}</p>
                                </div>

                                {/* Nascimento */}
                                <div className="sm:col-span-4">
                                    <label htmlFor="birth" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                                        Nascimento
                                    </label>
                                    <div className="">
                                        <input
                                            id="birth"
                                            name="birth"
                                            type="date"
                                            autoComplete="birth"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 pr-2"
                                            onChange={onHandleChange}
                                            value={data.birth}
                                            max={"2020-01-01"}
                                        />
                                    </div>
                                    <p className={'text-sm text-red-600'}>{errors.birth}</p>
                                </div>

                                {/* Telefone */}
                                <div className="sm:col-span-4">
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                                        Telefone
                                    </label>
                                    <div className="mt-2">
                                        <InputMask
                                            id="phone"
                                            name="phone"
                                            type="text"
                                            mask={"(99) 9 9999-9999"}
                                            placeholder={"(__) _ ____-____"}
                                            autoComplete="phone"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                                            onChange={onHandleChange}
                                            value={data.phone}
                                        />
                                    </div>
                                    <p className={'text-sm text-red-600'}>{errors.phone}</p>
                                </div>

                                {/* Nacionalidade */}
                                <div className="sm:col-span-3 w-full">
                                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900 mt-4">
                                        Nacionalidade do contato
                                    </label>
                                    <div className="">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2 pr-2"
                                            onChange={onHandleChange}
                                            value={data.country}
                                        >
                                            {countries.length > 0 ? countries.map((country, index) => (
                                                <option key={index} value={country.name}>{country.name}</option>
                                            )) : <option value="">Selecione um país</option>}
                                        </select>
                                    </div>
                                    <p className={'text-sm text-red-600'}>{errors.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Botões */}
                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <Link href={route("dashboard")}>
                            <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                Cancelar
                            </button>
                        </Link>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            disabled={processing}
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
