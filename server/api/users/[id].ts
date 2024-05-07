import QRCode from 'qrcode';
export default defineEventHandler((event) => {

  const id = getRouterParam(event, 'id')
  // Declare a constant for the url
  const url = `https://cmnfc.org/users/${id}`


  // Return the url as a qr code
  return QRCode.toString(url, {
    errorCorrectionLevel: 'H',
    type: 'svg'
  }, function (err, data) {
    if (err) throw err;
  });


})
