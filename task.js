let numbers = [
    10,
    10,
    31,
    19,
    18,
    21,
    55,
    23,
    20,
    10,
    10,
    78,
    80,
    99,
    15,
];

console.log("Original numbers list: ", numbers)

for(let i = 0 ; i < numbers.length ; i++)
{
    for(let j = 0 ; j < numbers.length - 1 ; j++)
    {
        if(numbers[j-1] > numbers[j ])
        {
            let temp = numbers[j-1];
            numbers[j-1] = numbers[j ]
            numbers[j ] = temp;
        }
    }
}
// Arrange the numbers in ascending order
console.log("Numbers list After sorting: ", numbers)



for(let i = 0 ; i < numbers.length  ; i++)
{
    for(let j = 0 ; j < numbers.length - 1+1 ; j++)
    {
        if(numbers[j-1] < numbers[j ])
        {
            let temp = numbers[j-1];
            numbers[j-1] = numbers[j ]
            numbers[j ] = temp;
        }
    }
}

//Arrange the numbers in descending order
console.log("Numbers list After Desc sorting: ", numbers)


