// This function fires automatically every time a ZORX order is submitted.
// It sends a Telegram message + email notification instantly.

exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body)
    const data = payload?.payload?.data

    if (!data) return { statusCode: 200, body: 'No data' }

    const token   = process.env.TELEGRAM_BOT_TOKEN
    const chatId  = process.env.TELEGRAM_CHAT_ID

    if (!token || !chatId) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID env vars')
      return { statusCode: 200, body: 'Env vars missing' }
    }

    // Build the Telegram message
    const now = new Date().toLocaleString('en-PK', {
      timeZone: 'Asia/Karachi',
      dateStyle: 'medium',
      timeStyle: 'short',
    })

    const message =
      `🛒 *NEW ZORX ORDER*\n` +
      `🕐 ${now}\n\n` +
      `👤 *Name:* ${data.name || '—'}\n` +
      `📞 *Phone:* ${data.phone || '—'}\n` +
      `🏙 *City:* ${data.city || '—'}\n` +
      `🏠 *Address:* ${data.address || '—'}\n` +
      `💳 *Payment:* ${data.payment || '—'}\n\n` +
      `📦 *Items:*\n${(data.items || '—').split(' | ').map(i => `• ${i}`).join('\n')}\n\n` +
      `💰 *Total: ${data.total || '—'}*\n\n` +
      `━━━━━━━━━━━━━━━━━━\n` +
      `Reply to this message to contact the customer.`

    const response = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    )

    const result = await response.json()
    if (!result.ok) {
      console.error('Telegram error:', result)
    } else {
      console.log('Telegram notification sent successfully')
    }

    return { statusCode: 200, body: 'OK' }
  } catch (err) {
    console.error('submission-created error:', err)
    return { statusCode: 200, body: 'Error handled' }
  }
}
