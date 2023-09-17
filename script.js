let productName = document.getElementById("productname");
let productPrice = document.getElementById("productprice");
let productCategory = document.getElementById("productcategory");
let productDescription = document.getElementById("productdescription");
let addBtn = document.getElementById("addBtn");
let arrOfProducts = [];
if (window.localStorage.getItem("products") !== null) {
  arrOfProducts = JSON.parse(localStorage.getItem("products"));
  loopData();
}
addBtn.addEventListener("click", function () {
  // if (validateProductName() === true) {
    let productData = {
      pname: productName.value,
      pprice: productPrice.value,
      pcategory: productCategory.value,
      pdescription: productDescription.value,
    };
    arrOfProducts.push(productData);
    // console.log(arrOfProducts);
    loopData();
    clearData();
    localStorage.setItem("products", JSON.stringify(arrOfProducts));
  // }
  // else
  // {
  //   console.log("Invalid Data");
  // }
});
function loopData() {
  let tableData ="";
  for (let i = 0; i < arrOfProducts.length; i++) {
    tableData += `<tr>
            <td>${i}</td>
            <td>${arrOfProducts[i].pname}</td>
            <td>${arrOfProducts[i].pprice}</td>
            <td>${arrOfProducts[i].pcategory}</td>
            <td>${arrOfProducts[i].pdescription}</td>
            <td><button id="delBtn" onclick="deleteProduct(${i})">Delete</button></td>
            <td><button id="updateBtn" onclick="updateData(${i})">Update</button></td>
        </tr>`;
  }
  document.getElementById("info").innerHTML = tableData;
}
let delBtn = document.getElementById("delBtn");
function deleteProduct(z) {
  arrOfProducts.splice(z, 1);
  localStorage.setItem("products", JSON.stringify(arrOfProducts));
  loopData();
  clearData();
}
let upBtn = document.getElementById("upBtn");
let update;
function updateData(productIndex) {
  update = productIndex;
  productName.value = arrOfProducts[productIndex].pname;
  productPrice.value = arrOfProducts[productIndex].pprice;
  productCategory.value = arrOfProducts[productIndex].pcategory;
  productDescription.value = arrOfProducts[productIndex].pdescription;
  addBtn.classList.toggle("show");
  upBtn.classList.toggle("show");
}
let updateBtn = document.getElementById("updateBtn");
upBtn.addEventListener("click", function () {
  arrOfProducts[update].pname = productName.value;
  arrOfProducts[update].pprice = productPrice.value;
  arrOfProducts[update].pcategory = productCategory.value;
  arrOfProducts[update].pdescription = productDescription.value;
  localStorage.setItem("products", JSON.stringify(arrOfProducts));
  addBtn.classList.toggle("show");
  upBtn.classList.toggle("show");
  loopData();
  clearData();
});
function clearData() {
  productName.value = ``;
  productPrice.value = ``;
  productCategory.value = ``;
  productDescription.value = ``;
}
// function validateProductName() {
//   let regex = /^[A-Z][a-z]{3,8}$/;
//   if (regex.test(productName.value) === true) {
//     return true;
//   } else {
//     return false;
//   }
// }
