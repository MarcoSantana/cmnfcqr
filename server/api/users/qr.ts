// import { defineEventHandler } from 'h3'
import QRCode from 'qrcode'; // Import the QRCode library

export default defineEventHandler(async (event) => {

  return QRCode.toString('Encode this text in QR code', {
    errorCorrectionLevel: 'H',
    type: 'svg'
  }, function (err, data) {
    if (err) throw err;
  });
});
