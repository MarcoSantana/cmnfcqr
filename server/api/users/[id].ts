// // server/api/users/[id].ts
// import QRCode from 'qrcode';
// export default defineEventHandler(async (event) => {

//   const id = getRouterParam(event, 'id')

//   const url = `https://main--cmnfc.netlify.app/users/${id}`

//   const qr = QRCode.toString(url, {
//     errorCorrectionLevel: 'H',
//     type: 'svg'
//   }, function (err, data) {
//     if (err) throw err;
//   });

//   // Set Content-Type header
//   // event.context.res.setHeader('Content-Type', 'image/svg+xml');
//   event.res.setHeader('Content-Type', 'image/svg+xml');

//   // Return QR code data directly
//   return qr;

// })
import QRCode from 'qrcode';

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id');
  const url = `https://main--cmnfc.netlify.app/users/${id}`;

  try {
    const qr = await QRCode.toDataURL(url, {
      errorCorrectionLevel: 'H',
      type: 'png', // Specify PNG format for image output
    });

    // Set Content-Type header for PNG image
    event.res.setHeader('Content-Type', 'image/png');

    // Return the QR code as a PNG image buffer
    const buffer = await dataURLToBuffer(qr); // Helper function to convert data URL to buffer
    return buffer;
  } catch (err) {
    console.error('Error generating QR code:', err);
    // Handle errors appropriately (e.g., return error status code or message)
    return new Response('Error generating QR code', { status: 500 });
  }
});

// Helper function to convert data URL to buffer (assuming Node.js environment)
async function dataURLToBuffer(dataURL) {
  const base64Data = dataURL.replace(/^data:image\/\w+;base64,/, '');
  const buffer = Buffer.from(base64Data, 'base64');
  return buffer;
}
