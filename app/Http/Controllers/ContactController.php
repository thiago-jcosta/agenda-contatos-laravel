<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Country;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource (Listar os contatos).
     */
    public function index()
    {
        // Otimizando a consulta: Use "get()" ao invés de "all()" e "where()".
        $contacts = Contact::where("user_id", Auth::user()->id)->get();

        // Retornando a view "ViewContact" com os contatos do usuário autenticado.
        return Inertia::render("ViewContact", ["contacts" => $contacts]);
    }

    /**
     * Show the form for creating a new resource (Exibir o formulário de criação de contato).
     */
    public function create()
    {
    $countries = Country::all();

    // Verifique se 'countries' está sendo retornado corretamente
    if ($countries->isEmpty()) {
        $countries = collect([['name' => 'Default Country']]); // Substitua com um valor padrão, se necessário
    }

    return Inertia::render('RegisterContact', ['countries' => $countries]);
    }



    /**
     * Store a newly created resource in storage (Armazenar um novo contato).
     */
    public function store(Request $request)
    {
        // Validação dos dados de entrada. Assegure-se de que os campos estão devidamente validados.
        $request->validate([
            'name' => "required|string|max:255",        // Validação do nome
            'email' => "required|email|unique:contacts", // Validação do email, garantindo que seja único na tabela 'contacts'
            'sex' => "required|string",                 // Validação do sexo
            'birth' => "required|date_format:Y-m-d",    // Validação da data de nascimento no formato 'Y-m-d'
            'phone' => "required|regex:/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/", // Validação do telefone
            'country' => "required|string|max:255",     // Validação do país
        ]);

        // Criação do contato, associando ao usuário autenticado.
        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->sex = $request->sex;
        $contact->birth = $request->birth;
        $contact->phone = $request->phone;
        $contact->country = $request->country;
        $contact->user_id = Auth::user()->id; // Associando o contato ao usuário autenticado
        $contact->save();

        // Redireciona para a página de sucesso após salvar o contato.
        return redirect()->route("contact.successStore");
    }

    /**
     * Função que exibe a página de sucesso ao adicionar um contato.
     */
    public function successStore()
    {
        // Renderiza a página "SuccessAddContact".
        return Inertia::render("SuccessAddContact");
    }

    /**
     * Show the form for editing the specified resource (Exibir formulário de edição de contato).
     */
    public function edit(Contact $contact)
    {
        // Pegando todos os países para popular o dropdown de seleção.
        $countries = Country::all();
        return Inertia::render("EditContact", ["contact" => $contact, "countries" => $countries]);
    }

    /**
     * Update the specified resource in storage (Atualizar um contato existente).
     */
    public function update(Request $request, Contact $contact)
    {
        // Verificando se o email mudou. Se não mudou, apenas valide se o email está preenchido.
        if ($request->email === $contact->email) {
            $request->validate([
                'name' => "required|string|max:255",
                'email' => "required|email",
                'sex' => "required|string",
                'birth' => "required|date_format:Y-m-d",
                'phone' => "required|regex:/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/",
                'country' => "required|string|max:255",
            ]);
        } else {
            // Se o email mudou, valida se é único na tabela de contatos.
            $request->validate([
                'name' => "required|string|max:255",
                'email' => "required|email|unique:contacts",
                'sex' => "required|string",
                'birth' => "required|date_format:Y-m-d",
                'phone' => "required|regex:/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/",
                'country' => "required|string|max:255",
            ]);
        }

        // Atualizando os dados do contato.
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->sex = $request->sex;
        $contact->birth = $request->birth;
        $contact->phone = $request->phone;
        $contact->country = $request->country;
        $contact->save();

        // Redireciona para a página de sucesso após atualizar o contato.
        return redirect()->route("contact.successUpdate");
    }

    /**
     * Função que exibe a página de sucesso ao editar um contato.
     */
    public function successEdit()
    {
        return Inertia::render("SuccessEditContact");
    }

    /**
     * Remove the specified resource from storage (Excluir um contato).
     */
    public function destroy(Contact $contact)
    {
        // Excluindo o contato.
        $contact->delete();

        // Redireciona para a listagem de contatos após excluir.
        return redirect()->route("contact.view");
    }
}
