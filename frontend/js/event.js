"use strict";(self.webpackChunkdoctrine_website=self.webpackChunkdoctrine_website||[]).push([[963],{3567:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var o=n(9755);function s(){function e(e,t){o("#event-modal-label").html(e),o("#event-modal-body").html(t),o("#event-modal").modal()}"#success"===window.location.hash&&(e("Purchase Successful","Your ticket purchase for <strong>"+window.event.name+"</strong> was successful! You will be e-mailed a receipt for your purchase immediately and details for joining the event will e-mailed 1 week before the event is scheduled to start."),window.location.hash=""),"#canceled"===window.location.hash&&(e("Purchase Failure","Oh no! Your ticket purchase for <strong>"+window.event.name+"</strong> was not successful. Please give it another try."),window.location.hash=""),"#thanks"===window.location.hash&&(e("Event Finished","Thanks for attending <strong>"+window.event.name+"</strong>! Keep your eyes open for more events in the future."),window.location.hash=""),o("#checkout-button").on("click",(function(){o(this).addClass("disabled")})),o.getScript("https://js.stripe.com/v3",(()=>{var e=Stripe(window.stripePublishableKey);document.getElementById("checkout-button").addEventListener("click",(function(){e.redirectToCheckout({items:[{sku:window.event.sku,quantity:1}],successUrl:window.event.url+"#success",cancelUrl:window.event.url+"#canceled"}).then((function(e){e.error&&(document.getElementById("stripe-error-message").textContent=e.error.message)}))}))}))}}}]);