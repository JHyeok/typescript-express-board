import db from '../db';

export class LineSchema extends db.Model<LineSchema> {
  get tableName() { return 'line'; }
}
