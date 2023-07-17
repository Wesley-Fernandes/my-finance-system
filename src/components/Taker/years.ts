const actual = new Date().getFullYear();
const list_of_years = [];



for (let ano = 2019; ano <= actual; ano++) {
    list_of_years.push(ano);
}

const result = list_of_years.reverse();

export { result as years };