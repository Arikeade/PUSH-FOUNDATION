const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener("submit", payWithPaystack, false);

function payWithPaystack(e) {
  e.preventDefault();

    let handler = PaystackPop.setup({ 
        key: 'pk_test_ae80e3882edee408a43124371eccba14910e4fb7', 
        email: document.getElementById("email").value,
        amount: document.getElementById("amountv").value * 100,
        fullname: document.getElementById("name").value,
        phonenumber: document.getElementById("phone").value,
        ref: 'PF'+Math.floor((Math.random() * 1000000000) + 1),

        callback: function (response) {
            
            window.location = "http://127.0.0.1:5502/appreciation.html";
            alert("Transaction successful");
        },
        onClose: function () {
           
            window.location = "http://127.0.0.1:5502/donate.html";
            alert('Transaction cancelled');
        }
    });
    handler.openIframe(); 
}