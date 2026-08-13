import type { ColumnDefinitions, MigrationBuilder } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.dropColumn("users", ["username", "email", "password_hash"]);
  pgm.addColumn("users", {
    user_auth_id: {
      type: "uuid",
      notNull: true,
      references: '"neon_auth"."user"',
      onDelete: "CASCADE",
    },
  });
  pgm.createIndex("users", "user_auth_id", {
    unique: true,
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropIndex("users", "user_auth_id");
  pgm.dropColumn("users", "user_auth_id");
  pgm.addColumns("users", {
    username: {
      type: "varchar(30)",
      notNull: true,
      unique: true,
      check: "username ~ '^[a-z0-9_-]{3,30}$'",
    },
    email: {
      type: "varchar(254)",
      notNull: true,
      unique: true,
    },
    password_hash: {
      type: "text",
      notNull: true,
    },
  });
}
