import React from "react";
import {Link} from "@inertiajs/inertia-react";
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function SuccessEditContact({auth}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Sucesso ao editar contato</h2>}
        >

            <Head title={"Sucesso ao editar contato"}></Head>

            <div className="flex justify-center items-center flex-col">
                <div id="add-success"
                     className="flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow text-gray-400 bg-gray-800 mt-12"
                     role="alert">
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-green-800 text-green-200">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clip-rule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal">Contato editado com sucesso</div>
                </div>
                <div className={"w-3/4 flex justify-around mt-16"}>
                    <Link href={route("contact.view")}>
                        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                            Ver contatos salvos
                        </button>
                    </Link>

                </div>
            </div>
        </AuthenticatedLayout>
    )
}
