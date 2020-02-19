import Realm from 'realm';

import TaskSchema from '../schemas/tasks';

export default function initRealm() {
  return Realm.open({
    schema: [TaskSchema]
  });
}