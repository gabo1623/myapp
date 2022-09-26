import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Funcionarios } from "./Funcionarios";
import { Usuarios } from "./Usuarios";
import { Nues } from "./Nues";

@Index("fk_actas_usuarios1_idx", ["usuarioCreacionId"], {})
@Index("fk_actas_usuarios2_idx", ["usuarioActualizacionId"], {})
@Index("fk_actas_funcionarios1_idx_idx", ["funcionarioId"], {})
@Entity("actas", { schema: "db_sistema_decomiso" })
export class Actas {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "fiscalia", length: 100 })
  fiscalia: string;

  @Column("int", { name: "nro_oficio" })
  nroOficio: number;

  @Column("date", { name: "fecha_oficio" })
  fechaOficio: string;

  @Column("int", { name: "nro_parte" })
  nroParte: number;

  @Column("varchar", { name: "unidad_policial", length: 45 })
  unidadPolicial: string;

  @Column("varchar", { name: "grado_funcionario", length: 45 })
  gradoFuncionario: string;

  @Column("int", { name: "estado" })
  estado: number;

  @Column("datetime", { name: "fecha_creacion" })
  fechaCreacion: Date;

  @Column("int", { name: "usuario_creacion_id" })
  usuarioCreacionId: number;

  @Column("datetime", { name: "fecha_actualizacion", nullable: true })
  fechaActualizacion: Date | null;

  @Column("int", { name: "usuario_actualizacion_id", nullable: true })
  usuarioActualizacionId: number | null;

  @Column("int", { name: "funcionario_id" })
  funcionarioId: number;

  @ManyToOne(() => Funcionarios, (funcionarios) => funcionarios.actas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "funcionario_id", referencedColumnName: "id" }])
  funcionario: Funcionarios;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.actas, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "usuario_actualizacion_id", referencedColumnName: "id" },
  ])
  usuarioActualizacion: Usuarios;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.actas2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "usuario_creacion_id", referencedColumnName: "id" }])
  usuarioCreacion: Usuarios;

  @OneToMany(() => Nues, (nues) => nues.acta)
  nues: Nues[];
}
