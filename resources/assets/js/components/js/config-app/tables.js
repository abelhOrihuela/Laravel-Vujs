export var tableAdmins = [
  {label: "username", key: 'username' },
  {label: "type", key: 'type', filter: 'admins', styles: 'font-weight: bold'},
  {label: "email", key: 'email'},
  {label: "created_at", key: 'created_at'}
];


export var tableCandidates = [
  {label: "username", key: 'username' },
  {label: "position", key: 'position'},
  {label: "email", key: 'email'},
  {label: "created_at", key: 'created_at', filter: 'shortDate'},
  {label: "updated_at", key: 'updated_at', filter: 'shortDate'}
];

export var tableCustomers = [
  {label: "username", key: 'username' },
  {label: "company", key: 'company'},
  {label: "email", key: 'email'},
  {label: "type", key: 'type', filter: 'customers', styles: 'font-weight: bold'},
  {label: "created_at", key: 'created_at', filter: 'shortDate'},
  {label: "updated_at", key: 'updated_at', filter: 'shortDate'}
];

export var tableExperience = [
  {label: "name_business", key: 'name_business' },
  {label: "name_job", key: 'name_job'},
  {label: "turn_business", key: 'turn_business'},
  {label: "created_at", key: 'created_at'}
];

export var tableGroups = [
  {label: "name_group", key: 'name_group' },
  {label: "category", key: 'descrCategory'},
  {label: "subcategory", key: 'descrSubCategory'},
  {label: "visible", key: 'visible', filter: 'trueOrFalse'}
];
