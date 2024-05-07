import QRCode from 'qrcode';
export default defineEventHandler((event) => {

  const id = getRouterParam(event, 'id')

  const url = `https://main--cmnfc.netlify.app/users/${id}`

  return QRCode.toString(url, {
    errorCorrectionLevel: 'H',
    type: 'svg'
  }, function (err, data) {
    if (err) throw err;
  });


})
