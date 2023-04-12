import {Table,Column,Model} from 'sequelize-typescript';
import {STRING,INTEGER} from 'sequelize';

@Table({
    freezeTableName:true,
    schema:'criptos',
    tableName: 'usuario_criptos ',
    updatedAt: false,
    createdAt: false
})

export class usuarioCriptomonedasPojo extends Model{

@Column({
    type: INTEGER,
    field: 'amount'
})
amount: number;

@Column({
    type: STRING,
    field: 'user_id'
})

user_id: string;

@Column({
    type: STRING,
    field: 'cripto_id'
})

cripto_id: string;

@Column({
    primaryKey: true,
    type: STRING,
    field: 'movement'
})
movement: string;

}