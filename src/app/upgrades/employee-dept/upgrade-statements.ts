export const deptEmployeesVersionUpgrades = [
  {
      toVersion: 1,
      statements: [
        `CREATE TABLE IF NOT EXISTS department (
          deptid integer PRIMARY KEY AUTOINCREMENT NOT NULL,
          name varchar(20) NOT NULL,
          location varchar(10)
        );`,
        `CREATE TABLE IF NOT EXISTS employee (
          empid integer PRIMARY KEY AUTOINCREMENT NOT NULL,
          name varchar(20) NOT NULL,
          title varchar(10),
          deptid integer,
          FOREIGN KEY (deptid) REFERENCES department (deptid)
        );`,
      ]
  },
]
