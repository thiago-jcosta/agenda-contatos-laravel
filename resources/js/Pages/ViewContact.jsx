import React from "react";
import TableContacts from "../Components/TableContacts";
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function ViewContact({contacts, auth}) {

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Usuários</h2>}
        >
            <Head title="Usuários" />

            <TableContacts contacts={contacts} />
        </AuthenticatedLayout>
    )
}
