import { ApiProperty } from "@nestjs/swagger";
import { NOTES_CATEGORIES, Status } from "./constants/constants";
import { CategoryType } from "./types/types";
import { Model, Table, Column, DataType } from "sequelize-typescript";
import { CreateNoteDto } from "./dto/create-note.dto";

@Table({ tableName: "notes" })
export class NoteModel extends Model<NoteModel, CreateNoteDto> {
    toJSON() {
        const object = this.get();

        delete object.updatedAt;

        return object;
    }
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    @ApiProperty()
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty()
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty()
    content: string;

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ enum: NOTES_CATEGORIES })
    category: CategoryType;

    @Column({ type: DataType.ARRAY(DataType.STRING), allowNull: false })
    @ApiProperty()
    dates: string[];

    @Column({ type: DataType.STRING, allowNull: false })
    @ApiProperty({ enum: Status })
    status: Status.ACTIVE | Status.ARCHIVED;
}
