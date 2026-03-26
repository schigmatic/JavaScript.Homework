const arr = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

const result = arr
  .map((str) => {
    const parts = str.includes("-") ? str.split("-") : str.split("/");
    if (parts.length !== 3) return null;
    let day = Number(parts[0]);
    let month = Number(parts[1]);
    const year = parts[2];
    if (
      day >= 1 &&
      day <= 31 &&
      month >= 1 &&
      month <= 12 &&
      year.length === 4
    ) {
      if (str.includes("/")) {
        [day, month] = [month, day];
      }
      return `${String(day).padStart(2, "0")}-${String(month).padStart(2, "0")}-${year}`;
    }
    return null;
  })
  .filter((el) => el !== null);
console.log(result);
