const tbody = document.querySelector("tbody");
const basketItems = JSON.parse(localStorage.getItem("basket"));
const noorder = document.querySelector("#noorder");
let count = 1;
if (basketItems.length == 0) {
    noorder.style.display = "block";
    tbody.parentElement.style.display = "none";
}
for (let i = 0; i < basketItems.length; i++) {
    let tr = `<tr id="${basketItems[i].id}"> 
                <th>${count++}</th>
                <td class="imagerow">
                <img src="${basketItems[i].image}";
                </td>
                <td>${basketItems[i].name}</td>
                <td>${basketItems[i].price + "Azn"}</td>
                <td>${(basketItems[i].price * basketItems[i].count) + "Azn"}</td>
                <td>${basketItems[i].count}</td>
                <td>
                    <button type="button" class="btn btn-success px-4 mr-1 plusbutton">+</button>
                    <button type="button" class="btn btn-danger px-4 mr-1 minusbutton">-</button>
                </td>
                <td> <i class="fas fa-trash"></i> </td>
            </tr>`;
    tbody.innerHTML += tr;
}

// DELETE
let trashBin = document.querySelectorAll(".fa-trash");
trashBin.forEach((item) => {
    item.addEventListener("click", function () {
        item.closest("tr").remove();
        let basket = JSON.parse(localStorage.getItem("basket"));
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id == item.parentElement.parentElement.id) {
                basket.splice(i, 1);
                localStorage.setItem("basket", JSON.stringify(basket));
                basketCount();
            };
        }
    });
});
// INCREASE COUNT
let PlusButton = document.querySelectorAll(".plusbutton");
PlusButton.forEach((item) => {
    item.addEventListener("click", function () {
        let basket = JSON.parse(localStorage.getItem("basket"));
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id == item.parentElement.parentElement.id) {
                basket[i].count++;
                localStorage.setItem("basket", JSON.stringify(basket));
                item.parentElement.previousElementSibling.innerText = basket[i].count;
                item.parentElement.previousElementSibling.previousElementSibling.innerText = basket[i].count * basket[i].price + "Azn";
            }
        }
    })
})
// DECREASE COUNT
let MinusButton = document.querySelectorAll(".minusbutton");
MinusButton.forEach((item) => {
    item.addEventListener("click", function () {
        let basket = JSON.parse(localStorage.getItem("basket"));
        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id == item.parentElement.parentElement.id && basket[i].count > 0) {
                basket[i].count--;
                localStorage.setItem("basket", JSON.stringify(basket));
                item.parentElement.previousElementSibling.innerText = basket[i].count;
                item.parentElement.previousElementSibling.previousElementSibling.innerText = basket[i].count * basket[i].price + "Azn";
            }
        }
    })
})
