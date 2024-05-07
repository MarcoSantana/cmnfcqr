// server/api/users/[id].ts
import QRCode from 'qrcode';
export default defineEventHandler(async (event) => {

  const id = getRouterParam(event, 'id')

  const url = `https://main--cmnfc.netlify.app/users/${id}`

  const qr = QRCode.toString(url, {
    errorCorrectionLevel: 'H',
    type: 'svg'
  }, function (err, data) {
    if (err) throw err;
  });

  // Set Content-Type header
  // event.context.res.setHeader('Content-Type', 'image/svg+xml');
  event.res.setHeader('Content-Type', 'image/svg+xml');

  // Return QR code data directly
  return qr;

})
