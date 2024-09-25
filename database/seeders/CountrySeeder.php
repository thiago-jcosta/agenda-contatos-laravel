<?php

namespace Database\Seeders;

use App\Models\Country;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $nameCountries = ["Alemanha", "Argentina", "Austrália", "Brasil", "Dinamarca", "Estados Unidos", "França", "Holanda", "Inglaterra", "Japão", "México", "Polônia"];

        foreach ($nameCountries as $nameCountry) {
            $country = Country::create([
                "name" => "$nameCountry"
            ]);
        }
    }
}
