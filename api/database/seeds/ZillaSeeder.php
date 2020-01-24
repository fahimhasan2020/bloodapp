<?php

use Illuminate\Database\Seeder;

class ZillaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $items = [
            ['id' => 1,'country_id' => 1, 'name' => 'Barguna'],
            ['id' => 2,'country_id' => 1, 'name' => 'Barisal'],
            ['id' => 3,'country_id' => 1, 'name' => 'Bhola'],
            ['id' => 4,'country_id' => 1, 'name' => 'Jhalokati'],
            ['id' => 5,'country_id' => 1, 'name' => 'Patuakhali'],
            ['id' => 6,'country_id' => 1, 'name' => 'Pirojpur'],
            ['id' => 7,'country_id' => 1, 'name' => 'Bandarban'],
            ['id' => 8,'country_id' => 1, 'name' => 'Brahmanbaria'],
            ['id' => 9,'country_id' => 1, 'name' => 'Chandpur'],
            ['id' => 10,'country_id' => 1, 'name' => 'Chittagong'],
            ['id' => 11,'country_id' => 1, 'name' => 'Comilla'],
            ['id' => 12,'country_id' => 1, 'name' => 'Cox\'s Bazar'],
            ['id' => 13,'country_id' => 1, 'name' => 'Feni'],
            ['id' => 14,'country_id' => 1, 'name' => 'Khagrachhari'],
            ['id' => 15,'country_id' => 1, 'name' => 'Lakshmipur'],
            ['id' => 16,'country_id' => 1, 'name' => 'Noakhali'],
            ['id' => 17,'country_id' => 1, 'name' => 'Rangamati'],
            ['id' => 18,'country_id' => 1, 'name' => 'Dhaka'],
            ['id' => 19,'country_id' => 1, 'name' => 'Faridpur'],
            ['id' => 20,'country_id' => 1, 'name' => 'Gazipur'],
            ['id' => 21,'country_id' => 1, 'name' => 'Gopalganj'],
            ['id' => 22,'country_id' => 1, 'name' => 'Kishoreganj'],
            ['id' => 23,'country_id' => 1, 'name' => 'Madaripur'],
            ['id' => 24,'country_id' => 1, 'name' => 'Manikganj'],
            ['id' => 25,'country_id' => 1, 'name' => 'Munshiganj'],
            ['id' => 26,'country_id' => 1, 'name' => 'Narayanganj'],
            ['id' => 27,'country_id' => 1, 'name' => 'Narsingdi'],
            ['id' => 28,'country_id' => 1, 'name' => 'Rajbari'],
            ['id' => 29,'country_id' => 1, 'name' => 'Shariatpur'],
            ['id' => 30,'country_id' => 1, 'name' => 'Tangail'],
            ['id' => 31,'country_id' => 1, 'name' => 'Bagerhat'],
            ['id' => 32,'country_id' => 1, 'name' => 'Chuadanga'],
            ['id' => 33,'country_id' => 1, 'name' => 'Jessore'],
            ['id' => 34,'country_id' => 1, 'name' => 'Jhenaidah'],
            ['id' => 35,'country_id' => 1, 'name' => 'Khulna'],
            ['id' => 36,'country_id' => 1, 'name' => 'Kushtia'],
            ['id' => 37,'country_id' => 1, 'name' => 'Magura'],
            ['id' => 38,'country_id' => 1, 'name' => 'Meherpur'],
            ['id' => 39,'country_id' => 1, 'name' => 'Narail'],
            ['id' => 40,'country_id' => 1, 'name' => 'Satkhira'],
            ['id' => 41,'country_id' => 1, 'name' => 'Jamalpur'],
            ['id' => 42,'country_id' => 1, 'name' => 'Mymensingh'],
            ['id' => 43,'country_id' => 1, 'name' => 'Netrokona'],
            ['id' => 44,'country_id' => 1, 'name' => 'Sherpur'],
            ['id' => 45,'country_id' => 1, 'name' => 'Bogra'],
            ['id' => 46,'country_id' => 1, 'name' => 'Joypurhat'],
            ['id' => 47,'country_id' => 1, 'name' => 'Naogaon'],
            ['id' => 48,'country_id' => 1, 'name' => 'Natore'],
            ['id' => 49,'country_id' => 1, 'name' => 'Chapai Nawabganj'],
            ['id' => 50,'country_id' => 1, 'name' => 'Pabna'],
            ['id' => 51,'country_id' => 1, 'name' => 'Rajshahi'],
            ['id' => 52,'country_id' => 1, 'name' => 'Sirajganj'],
            ['id' => 53,'country_id' => 1, 'name' => 'Dinajpur'],
            ['id' => 54,'country_id' => 1, 'name' => 'Gaibandha'],
            ['id' => 55,'country_id' => 1, 'name' => 'Kurigram'],
            ['id' => 56,'country_id' => 1, 'name' => 'Lalmonirhat'],
            ['id' => 57,'country_id' => 1, 'name' => 'Nilphamari'],
            ['id' => 58,'country_id' => 1, 'name' => 'Panchagarh'],
            ['id' => 59,'country_id' => 1, 'name' => 'Rangpur'],
            ['id' => 60,'country_id' => 1, 'name' => 'Thakurgaon'],
            ['id' => 61,'country_id' => 1, 'name' => 'Habiganj'],
            ['id' => 62,'country_id' => 1, 'name' => 'Moulvibazar'],
            ['id' => 63,'country_id' => 1, 'name' => 'Sunamganj'],
            ['id' => 64,'country_id' => 1, 'name' => 'sylhet'],

        ];

        foreach ($items as $item) {
            \App\Model\Zilla::create($item);
        }
    }
}
