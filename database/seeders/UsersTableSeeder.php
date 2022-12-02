<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('users')->delete();

        \DB::table('users')->insert(array (
            0 =>
            array (
                'id' => 1,
                'name' => 'Mashfiqur Rahman',
                'email' => 'mashfiqnahid@gmail.com',
                'phone' => '+8801685334495',
                'email_verified_at' => date('Y-m-d H:i:s'),
                'password' => Hash::make('1234587'),
                'remember_token' => NULL,
                'created_at' => '2020-06-13 21:56:04',
                'updated_at' => '2020-06-13 21:56:04'
            )
        ));
    }
}
