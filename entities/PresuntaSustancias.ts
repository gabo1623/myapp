import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Nues } from "./Nues";

@Entity("presunta_sustancias", { schema: "db_sistema_decomiso" })
export class PresuntaSustancias {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "nombre", length: 45 })
  nombre: string;

  @Column("int", { name: "estado", default: () => "'1'" })
  estado: number;

  @OneToMany(() => Nues, (nues) => nues.presuntaSustancia)
  nues: Nues[];
}
