import React from "react";
import {Head, Link} from "@inertiajs/inertia-react";
import OptionsTable from "./OptionsTable";
import ComponentDelete from "./ComponentDelete";

export default function TableContacts({contacts}) {

    const buttonText = ['Editar', 'Excluir']

    const dataAction = (item, id) => {
        switch (item) {
            case 'Editar':
                return (
                    <Link href={route('contact.edit', [id])}
                          className="inline-flex items-center px-4 py-2 bg-zinc-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-zinc-500 active:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-zinc-800 text-white text-sm rounded border border-zinc-600"
                          type={"submit"}>{item}</Link>
                )
            case 'Excluir':
                const deleteComponentData = {
                    routePost: "contact.delete",
                    item: "contato",
                    id: id
                }
                return (
                    <ComponentDelete routePost={deleteComponentData.routePost} item={deleteComponentData.item}
                     id={deleteComponentData.id}/>
                )
        }
    }

    const buttons = (contact) => {
        let button = []
        buttonText.map(action => {
            button.push(dataAction(action, contact.id))
        })
        return button
    }

    return (
        <>
            <div className={"flex justify-center mt-12"}>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-400">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sexo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nascimento
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Telefone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                País
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {contacts.map((contact) => {
                            return <tr className="bg-white border-b">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {contact.name}
                                </th>
                                <td className="px-6 py-4">
                                    {contact.email}
                                </td>
                                <td className="px-6 py-4">
                                    {contact.sex}
                                </td>
                                <td className="px-6 py-4">
                                    {contact.birth}
                                </td>
                                <td className="px-6 py-4">
                                    {contact.phone}
                                </td>
                                <td className="px-6 py-4">
                                    {contact.country}
                                </td>
                                <td className="px-6 py-4">
                                    <OptionsTable buttons={buttons(contact)} />
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
