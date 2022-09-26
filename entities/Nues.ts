import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Actas } from "./Actas";
import { Usuarios } from "./Usuarios";
import { PresuntaSustancias } from "./PresuntaSustancias";

@Index("fk_presunta_sustancias1_idx", ["presuntaSustanciaId"], {})
@Index("fk_nues_usuarios1_idx", ["usuarioCreacionId"], {})
@Index("fk_nues_usuarios2_idx", ["usuarioActualizacionId"], {})
@Index("fk_nues_actas1_idx", ["actaId"], {})
@Entity("nues", { schema: "db_sistema_decomiso" })
export class Nues {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "numero" })
  numero: number;

  @Column("int", { name: "presunta_sustancia_id" })
  presuntaSustanciaId: number;

  @Column("decimal", { name: "cantidad", precision: 12, scale: 4 })
  cantidad: string;

  @Column("varchar", { name: "medida", length: 45 })
  medida: string;

  @Column("varchar", { name: "descripcion", length: 45 })
  descripcion: string;

  @Column("decimal", { name: "muestra", precision: 12, scale: 4 })
  muestra: string;

  @Column("decimal", { name: "contra_muestra", precision: 12, scale: 4 })
  contraMuestra: string;

  @Column("decimal", { name: "saldo", precision: 12, scale: 4 })
  saldo: string;

  @Column("varchar", { name: "observaciones", length: 70 })
  observaciones: string;

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

  @Column("int", { name: "acta_id" })
  actaId: number;

  @ManyToOne(() => Actas, (actas) => actas.nues, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "acta_id", referencedColumnName: "id" }])
  acta: Actas;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.nues, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "usuario_creacion_id", referencedColumnName: "id" }])
  usuarioCreacion: Usuarios;

  @ManyToOne(() => Usuarios, (usuarios) => usuarios.nues2, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([
    { name: "usuario_actualizacion_id", referencedColumnName: "id" },
  ])
  usuarioActualizacion: Usuarios;

  @ManyToOne(
    () => PresuntaSustancias,
    (presuntaSustancias) => presuntaSustancias.nues,
    { onDelete: "NO ACTION", onUpdate: "NO ACTION" }
  )
  @JoinColumn([{ name: "presunta_sustancia_id", referencedColumnName: "id" }])
  presuntaSustancia: PresuntaSustancias;
}
