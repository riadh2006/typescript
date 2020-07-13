let messsage = 'abc';
console.log(messsage.toLocaleUpperCase());
console.log(messsage.italics());


let result: string;
result = 'abc';

result.endsWith('c');



let result2;
result2 = 'abc';

(<string>result2).endsWith('c');


let result3;
result3 = 'abc';

(result3 as string).endsWith('c');