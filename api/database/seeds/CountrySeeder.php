<?php

use Illuminate\Database\Seeder;

class CountrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $items = [
            ['id' => 1, 'name' => 'bangladesh'],
            ['id' => 2, 'name' => 'india'],
            ['id' => 3, 'name' => 'pakistan'],
            ['id' => 4, 'name' => 'nepal'],
            ['id' => 5, 'name' => 'bhutan'],
            ['id' => 6, 'name' => 'malaysia'],

        ];

        foreach ($items as $item) {
            \App\Model\Country::create($item);
        }
    }
}
