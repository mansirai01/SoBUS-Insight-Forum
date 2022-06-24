function convertToCSV(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      if (array[i][index] != null) {
        line += array[i][index];
      } else {
        line += "";
      }
    }

    str += line + "\r\n";
  }

  return str;
}
export const exportCSVFile = (headers, items, fileName) => {
  if (headers) {
    items.unshift(headers);
  }

  const jsonObject = JSON.stringify(items);

  const csv = convertToCSV(jsonObject);

  const exportName = fileName + ".csv" || "export.csv";

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(blob, exportName);
  } else {
    const link = document.createElement("a");
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportName);
      link.style.visibility = "hidden";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
};
