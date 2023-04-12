import {Table,Column,Model} from 'sequelize-typescript';
import {STRING,INTEGER} from 'sequelize';


@Table({
    freezeTableName:true,
    schema:'criptos',
    tableName: 'criptomonedas',
    updatedAt: false,
    createdAt: false
})


export class criptomonedasPojo extends Model{

    @Column({
        primaryKey: true,
        type: STRING,
        field: 'cripto_id'
    })
    cripto_id: string;

    @Column({
        type: STRING,
        field: 'cripto_name'
    })
    cripto_name: string;

    @Column({
        type: INTEGER,
        field: 'stock'
    })
    stock: number;


    @Column({
        type: INTEGER,
        field: 'value'
    })
    value: number;





}