exports.handler = async (event) => {
  const { name, phone, email } = JSON.parse(event.body);

  const response = await fetch('https://payment.intasend.com/api/v1/payment/mpesa-stk-push/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ISSecretKey_live_185c5e46-ebeb-4342-ae5a-8401a6c8301e'
    },
    body: JSON.stringify({
      public_key: 'ISPubKey_live_0f800726-22df-43e2-a802-2743832120d7',
      currency: 'KES',
      amount: 2000,
      phone_number: phone,
      email: email,
      narrative: 'Physics Lab Tuition - ' + name
    })
  });

  const data = await response.json();

  return {
    statusCode: response.ok ? 200 : 400,
    body: JSON.stringify(data)
  };
};