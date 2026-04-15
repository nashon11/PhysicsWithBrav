exports.handler = async (event) => {
  const { name, phone, email } = JSON.parse(event.body);

  try {
    const invoice_id = 'PL' + Date.now();

    await fetch('https://hook.eu1.make.com/jm0n974c1v2rxte6b418tihczdey3hep', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        phone,
        email,
        invoice_id,
        timestamp: new Date().toISOString()
      })
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Registration received. Check your email for payment instructions.",
        invoice_id
      })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
};
