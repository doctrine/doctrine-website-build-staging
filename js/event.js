export default function() {
    function openEventModal(label, message) {
        $('#event-modal-label').html(label);
        $('#event-modal-body').html(message);

        $('#event-modal').modal();
    }

    if (window.location.hash === '#success') {
        openEventModal(
            'Purchase Successful',
            'Your ticket purchase for <strong>' + window.event.name + '</strong> was successful! You will be e-mailed information about the event in the next 24 hours.'
        );

        window.location.hash = '';
    }

    if (window.location.hash === '#canceled') {
        openEventModal(
            'Purchase Failure',
            'Oh no! Your ticket purchase for <strong>' + window.event.name + '</strong> was not successful. Please give it another try.'
        );

        window.location.hash = '';
    }

    $('#checkout-button').on('click', function() {
        $(this).addClass('disabled');
    });

    $.getScript('https://js.stripe.com/v3', () => {
        var stripe = Stripe(window.stripePublishableKey);

        var checkoutButton = document.getElementById('checkout-button');

        checkoutButton.addEventListener('click', function () {
            stripe.redirectToCheckout({
                items: [{sku: window.event.sku, quantity: 1}],
                successUrl: window.event.url + '#success',
                cancelUrl: window.event.url + '#canceled',
            })
            .then(function (result) {
                if (result.error) {
                    var displayError = document.getElementById('stripe-error-message');
                    displayError.textContent = result.error.message;
                }
            });
        });
    });
};
