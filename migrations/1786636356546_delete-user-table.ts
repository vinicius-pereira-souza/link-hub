import type { ColumnDefinitions, MigrationBuilder } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable("users");
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("users", {
    id: "id",
    photo_avatar_url: { type: "text" },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    user_auth_id: {
      type: "uuid",
      notNull: true,
      references: '"neon_auth"."user"',
      onDelete: "CASCADE",
    },
    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
  pgm.createIndex("users", "user_auth_id", {
    unique: true,
  });
}
