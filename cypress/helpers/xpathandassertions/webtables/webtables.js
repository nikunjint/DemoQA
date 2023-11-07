export function webTables() {
  return {
    xpath: {
      add: "#addNewRecordButton",
      first_name: "#firstName",
      last_name: "#lastName",
      user_email: "#userEmail",
      age: "#age",
      salary: "#salary",
      department: "#department",
      submit: "#submit",
      search: "#searchBox",
      validate_search:
        "body > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)",
      edit: "#edit-record-4>svg>path",
      delete: "#delete-record-4>svg>path",
    },
  };
}
