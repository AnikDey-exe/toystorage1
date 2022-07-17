AFRAME.registerComponent('addBtn', {
    init: function () {
        var _button2xs1 = document.createElement("button"); 
        _button2xs1.innerHTML = "Order Summary"; 
        _button2xs1.setAttribute('id', 'summary-btn'); 
        _button2xs1.setAttribute('class', 'btn-warning');

        var _button2sxs3 = document.createElement("button"); 
        _button2sxs3.innerHTML = "Order Now"; 
        _button2sxs3.setAttribute('id', 'order-btn'); 
        _button2sxs3.setAttribute('class', 'btn-warning');

        var _btondiv2w3 = document.getElementById('button-div'); 
        _btondiv2w3.appendChild(_button2xs1);
         _btondiv2w3.appendChild(_button2sxs3);
    }
})