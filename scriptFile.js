$(document).ready(function () {

    /*delete row*/
    $('.glyphicon-trash').on('click', function () {
        $(this).parents('tr').remove();
        calculateAmount();

    });

    /*Cost corresponding price and quantity */
    var cost = 0;

    function changeQuantity() {
        $(".qty").each(function () {
            var quantity = this.value;
            var price = parseFloat(this.closest("tr").children[1].innerText);
            cost = quantity * price;
            this.closest("tr").children[3].innerText = cost;
            calculateAmount();
        });

    }
    /*Quantity increment*/
    $('.increment').click(function () {
        var element = this.closest("tr span").children[0];
        element.value = parseInt(element.value) + 1;
        changeQuantity();
    })

    /*Quantity decrement*/
    $('.decrement').click(function () {
        var element = this.closest("tr span").children[0];
        element.value = parseInt(element.value) - 1;
        if (element.value < 0) {
            element.value = 0;
        }
        changeQuantity();
    })

    function calculateAmount() {
        /*Subtotal*/
        var sum = 0;
        $('.addAmount').each(function () {
            sum += parseFloat($(this).text());
        });
        $('#subTotal').html(sum.toFixed(2));

        /*Subtotal amount after vat calculation*/
        var stotal = 0;
        $('#subTotal').each(function () {
            stotal = $(this).text() * 0.2;
        });
        $('#vatAmount').html(stotal.toFixed(2));

        /*Total Cost*/
        var totalcost = 0;
        $('#subTotal,#vatAmount').each(function () {
            totalcost += parseFloat($(this).text());
        });
        $('#tatalCost').html(totalcost.toFixed(2));

    }
})







