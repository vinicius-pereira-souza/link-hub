import type { ColumnDefinitions, MigrationBuilder } from "node-pg-migrate";

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable("links", {
    id: "id",
    user_id: {
      type: "uuid",
      notNull: true,
      references: '"neon_auth"."user"(id)',
      onDelete: "CASCADE",
    },
    title: {
      type: "text",
      notNull: true,
    },
    url: {
      type: "text",
      notNull: true,
    },
    click_amount: {
      type: "integer",
      notNull: true,
      default: 0,
    },
    position_at: {
      type: "integer",
      notNull: true,
      default: 0,
    },
    is_active: {
      type: "boolean",
      notNull: true,
      default: true,
    },
    created_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
    updated_at: {
      type: "timestamptz",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });

  pgm.createConstraint("links", "links_url_check", {
    check: `url ~ '^https?://[^\\s/$.?#].[^\\s]*$'`,
  });
  pgm.createIndex("links", "user_id");
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropConstraint("links", "links_url_check");
  pgm.dropTable("links");
}
