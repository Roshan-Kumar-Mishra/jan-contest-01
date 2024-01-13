/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    arr.forEach((developer) => {
      console.log(`ID: ${developer.id}, Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`);
    });
  }
  
  function PrintDeveloperbyForEach() {
    arr.forEach((developer) => {
      console.log(`ID: ${developer.id}, Name: ${developer.name}, Age: ${developer.age}, Profession: ${developer.profession}`);
    });
  }
  
  
  function addData() {
    const newDeveloper = { id: 4, name: "emma", age: "22", profession: "developer" };
    arr.push(newDeveloper);
    console.log("Data added successfully.");
  }
  
  function removeAdmin() {
    arr = arr.filter((developer) => developer.profession !== "admin");
    console.log("Admins removed successfully.");
  }
  
  function concatenateArray() {
    const newArray = [
      { id: 5, name: "bob", age: "25", profession: "developer" },
      { id: 6, name: "alice", age: "23", profession: "admin" },
    ];
    arr = arr.concat(newArray);
    console.log("Arrays concatenated successfully.");
  }