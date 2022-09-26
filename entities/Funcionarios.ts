import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Actas } from "./Actas";

@Entity("funcionarios", { schema: "db_sistema_decomiso" })
export class Funcionarios {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 45 })
  nombre: string;

  @Column("varchar", { name: "rut", length: 10 })
  rut: string;

  @Column("int", { name: "estado" })
  estado: number;

  @OneToMany(() => Actas, (actas) => actas.funcionario)
  actas: Actas[];
}
