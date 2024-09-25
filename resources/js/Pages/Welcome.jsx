import { Head } from '@inertiajs/react';
import NotAuthenticated from "@/Layouts/NotAuthenticatedLayout";
import computer from "/public/computer.jpg"
import computer2 from "/public/computer2.jpg"
import {Link} from "@inertiajs/inertia-react";

export default function Welcome() {
    return (
        <>
            <NotAuthenticated
            >
                <Head title="ProContact" />

            <div className={"w-screen bg-black flex flex-col items-center justify-between"}>
                <div className={"flex flex-col items-center"}>
                    <h2 className={"text-3xl text-zinc-50 font-bold mt-6"}>Sistema de autenticação e Agenda de Contato</h2>
                </div>

                <img className={"w-3/12 rounded-lg my-8"} src={computer2} alt="Computer above a table"/>
            </div>


            <div className={"w-screen flex justify-around items-center pt-8"}>
                <div className={"w-3/12"}>
                    <div className={"mt-2 flex gap-x-6"}>
                    </div>
                </div>
                <div className={"w-3/12"}>
                    <img className={"w-full rounded-lg"} src={computer} alt="Computer above a table"/>
                </div>
            </div>

            </NotAuthenticated>
        </>
    );
}
