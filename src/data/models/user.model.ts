import {Table,Column,Model} from 'sequelize-typescript';
import {STRING,INTEGER} from 'sequelize';

@Table({
    freezeTableName:true,
    schema:'criptos',
    tableName: 'usuarios',
    updatedAt: false,
    createdAt: false
})


export class UserPojo extends Model{


@Column({
    type: STRING,
    field: "email"
})
email: string;

@Column({
    type: STRING,
    field: "password"
})
password: string


@Column({
    type: STRING,
    field: 'full_name'
})
full_name: string;

@Column({
    type: STRING,
    field: 'birth_date'  
})
birth_date: string;


@Column({
    primaryKey: true,
    type: STRING,
    field: 'user_id'
})
user_id: string;

@Column({
    type: INTEGER,
    field: "amount"
})
amount: number;



}

