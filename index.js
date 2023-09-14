//1. get elemen dr inputan , reference html element form in js
const formTask = document.querySelector(".form-task"); //get element by class name juga bisa

//2. menambahakn event listener di element form
formTask.addEventListener("submit", (event) => {
  //submit adalah nama event, setiap event ada parameternya
  event.preventDefault();

  //3. reference html element input
  const inputForm = document.querySelector(".input-form");
  console.log(inputForm.value); //hanya tampil saat di inspect di console

  //4. ambil reference html element ul dari wrapper list
  const wrapperList = document.querySelector(".task-list-wrapper");

  //5. create <li> using js
  const taskList = document.createElement("li");
  taskList.innerHTML = inputForm.value;

  //6. masukkan input value ke <li>
  taskList.innerHTML = inputForm.value;

  //7. append <li> ke <ul> wrappernya
  wrapperList.append(taskList);
});
