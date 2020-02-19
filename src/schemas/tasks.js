export default class Tasks {
  static schema = {
    name: 'Tasks',
    primaryKey: 'id',
    properties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      date: 'string'
    }
  }
}