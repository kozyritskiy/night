import $ from "jquery";

$("#form-main").on("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  let form = $(e.target);
  let request = ajaxForm(form);

  request.done(function(msg) {
    let mes = msg.mes;
    overlay.messageSubmit.innerHTML = mes;
  });

  request.fail(function(jqXHR, textStatus) {
    overlay.messageSubmit.innerHTML = "Request failed: " + textStatus;
  });

  overlay.open();
}

let ajaxForm = function(form) {
  let data = form.serialize(),
    url = form.attr("action"),
    type = form.attr("method");

  return $.ajax({
    type: type,
    url: url,
    dataType: "JSON",
    data: data
  });
};

let feedback = document.querySelector(".feedback");
let template = document.querySelector("#formMessage").innerHTML;
let overlay = createOverlay(template);

function createOverlay(template) {
  let fragment = document.createElement("div");

  fragment.innerHTML = template;

  let wrapOverlayElement = fragment.querySelector(".wrap-overlay");
  let overlayElement = fragment.querySelector(".overlay");
  let closeElement = fragment.querySelector(".button_close");
  let messageSubmit = fragment.querySelector(".message__submit");

  fragment = null;

  wrapOverlayElement.addEventListener("click", function(e) {
    if (e.target === overlayElement) {
      closeElement.click();
    }
  });

  closeElement.addEventListener("click", function() {
    feedback.removeChild(wrapOverlayElement);
  });

  return {
    messageSubmit,
    open() {
      feedback.insertBefore(wrapOverlayElement, feedback.firstChild);
    }
  };
}
