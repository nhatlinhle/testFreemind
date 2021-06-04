
// Validate form
$("#register").validate({
  rules: {
    name: "required",
    phone: {
      required: true,
      number: true,
      minlength: 10,
      maxlength: 12
    },
    position: "required",
    exp: "required",
    picture: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    name: "Nhập tên",
    phone: {
      required: "Nhập số điện thoại",
      number: "Phải là số",
      minlength: "Nhập từ 10 đến 12 ký tự",
      maxlength: "Nhập từ 10 đến 12 ký tự"
    },
    position: "Chọn vị trí",
    exp: "Nhập kinh nghiệm làm việc",
    picture: "Chọn ảnh",
    email: "Nhập email"
  },
  errorElement: 'span',
  errorPlacement: function (error, element) {
    error.addClass('invalid-feedback');
    element.closest('.col-75').append(error);
  },
  highlight: function (element, errorClass, validClass) {
    $(element).addClass('is-invalid');
  },
  unhighlight: function (element, errorClass, validClass) {
    $(element).removeClass('is-invalid');
  },
  submitHandler: function (e) {
    const name = $("#name").val()
    const phone = $("#phone").val()
    const position = $("#position").val()
    const exp = $("#exp").val()
    const fileInput = $("#file-input").val()
    const email = $("#email").val()
    let data = {
      name: name,
      phone: phone,
      position: position,
      exp: exp,
      picture: fileInput,
      email: email
    }
    let dataSend = JSON.stringify(data)
    const url = "https://freemind-test.netlify.app/.netlify/functions/test";
    $.ajax({
      type: 'POST',
      url: url,
      data: dataSend,
      dataType: "json",
      success: function () {
        let r = confirm("Successful!");
        if (r == true) {
          window.location.reload();
        }
      },
      error: function (xhr, status, error) {
        alert(error);
      }
    });
  }
});
// Get name picture
$('#file-input').change(function () {
  let file = $('#file-input')[0].files[0].name
  $('#file-name').text(file)
});
































