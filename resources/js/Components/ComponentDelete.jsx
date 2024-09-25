import React from "react";
// import Modal from "@/Components/Modal";
import {useState} from "react";
import {useForm} from "@inertiajs/inertia-react";
import Modal from "@/Components/Modal";

export default function ComponentDelete(props) {
    const [confirmingComponentDeletion, setConfirmingComponentDeletion] = useState(false);

    const {post} = useForm();

    const confirmComponentDeletion = () => {
        setConfirmingComponentDeletion(true);
    };

    const closeDeleteModal = (e) => {
        setConfirmingComponentDeletion(false);
        post(route(props.routePost, [e.target.value]))
    };

    const closeModal = () => {
        setConfirmingComponentDeletion(false);
    };
    return <>
        <button
            onClick={confirmComponentDeletion}
            className="inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-red-800 text-white text-sm px-3 py-0.5 rounded  border border-red-600 deleteButton"
        >
            Deletar
        </button>
        <Modal
            className="h-54 w-96"
            show={confirmingComponentDeletion}
            onClose={() => setConfirmingComponentDeletion(false)}
        >
            <form className="p-6 relative">
                <div className={"flex flex-col"}>
                    <h1 className="text-lg font-bold text-gray-900 m-2 mx-auto text-center">
                        Deleção de {props.item}
                    </h1>
                    <hr/>
                    <h3 className="m-4 text-lg font-medium text-gray-900 text-center">
                        Tem certeza que deseja deletar {props.item === 'empresa' ? 'essa empresa' : `esse ${props.item}`}?
                        <br/>
                        {props.item === 'empresa' ? 'A empresa' : `O ${props.item}`} será deletado permanentemente
                    </h3>
                    <div className={'flex justify-around'}>
                        <button className={'inline-flex items-center px-4 py-2 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-green-800 mr-7 text-white text-sm px-3 py-0.5 rounded  border border-green-600 deleteButton'} onClick={closeModal}>Cancelar</button>

                        <button value={props.id} className={'inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-red-800 mr-7 text-white text-sm px-3 py-0.5 rounded border border-red-600 deleteButton'} onClick={closeDeleteModal}>Deletar</button>
                    </div>
                </div>
            </form>
        </Modal>
    </>
}
