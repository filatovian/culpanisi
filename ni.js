function assembleEncodeFromView(view) {
  let encodedData = JSON.stringify(view);
  let encodedString = '';
  encodedData.split(',').forEach((item) => {
    encodedString += item + '}';
  });
  return encodedString;
}
