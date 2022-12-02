<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RolesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {


        \DB::table('roles')->delete();

        \DB::table('roles')->insert(array (
            0 =>
            array (
                'id' => 1,
                'name' => 'super-admin',
                'display_name' => 'Super Admin',
                'description' => 'Super Admin',
                'created_at' => '2020-06-14 00:00:00',
                'updated_at' => '2020-06-14 00:00:00',
            ),
            1 =>
            array (
                'id' => 2,
                'name' => 'admin',
                'display_name' => 'Admin',
                'description' => 'Admin',
                'created_at' => '2020-06-13 22:12:54',
                'updated_at' => '2020-06-13 22:12:54',
            ),
            2 =>
            array (
                'id' => 3,
                'name' => 'user',
                'display_name' => 'User',
                'description' => NULL,
                'created_at' => '2020-06-13 22:13:21',
                'updated_at' => '2020-06-13 22:13:21',
            )
        ));


    }
}
